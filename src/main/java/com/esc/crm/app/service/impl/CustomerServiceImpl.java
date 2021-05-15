package com.esc.crm.app.service.impl;

import com.esc.crm.app.io.entity.AddressEntity;
import com.esc.crm.app.io.entity.CustomerEntity;
import com.esc.crm.app.io.repository.AddressRepository;
import com.esc.crm.app.io.repository.CustomerRepository;
import com.esc.crm.app.service.CustomerService;
import com.esc.crm.app.shared.Utils;
import com.esc.crm.app.shared.dto.AddressDto;
import com.esc.crm.app.shared.dto.CustomerDto;
import javassist.NotFoundException;
import org.modelmapper.ModelMapper;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    AddressRepository addressRepository;

    @Autowired
    Utils utils;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;


    /**
     * Logger initialization
     */
    org.slf4j.Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    ModelMapper modelMapper = new ModelMapper();

    @Override
    public CustomerDto createCustomer(CustomerDto customer) {
        logger.info("CustomerService -> createCustomer(customer) method is called.");
        CustomerEntity customerEntity = modelMapper.map(customer, CustomerEntity.class);

        logger.info("Creating new Customer");

        String customerId = utils.generateOrderId(10);

        customerEntity.setCustomerId(customerId);
        customerEntity.setStatus("active");

        logger.info("Saving the customer to the database -> orders");

        CustomerEntity storedCustomer = customerRepository.save(customerEntity);
        CustomerDto returnValue = modelMapper.map(storedCustomer, CustomerDto.class);

        logger.info("Returning the order details to the OrderController via OrderDto object");

        return returnValue;
    }

    @Override
    public Optional<CustomerDto> getCustomerById(String id) {
        logger.info("CustomerService -> getCustomerById(orderId) method is called. Finding the order");

        Optional<CustomerDto> returnValue;
        CustomerEntity customerEntity = customerRepository.findByCustomerId(id);

        if (customerEntity == null) {
            logger.error("Can't find the customer id from the database");
        }

        returnValue = modelMapper.map(customerEntity, (Type) CustomerDto.class);

        logger.info("Customer details found. Returning the order to the OrderController via OrderDto object");
        return returnValue;
    }

    @Override
    public CustomerDto updateCustomer(String customerId, CustomerDto customer) throws NotFoundException {
        logger.info("CustomerService -> updateCustomerDetails(CustomerId, customer) method is called. Finding the order");

        CustomerDto returnValue;
        CustomerEntity customerEntity = customerRepository.findByCustomerId(customerId);
        if (customerEntity == null) {
            logger.error("Can't find the Customer id from the database");

            throw new NotFoundException(customerId);
        }

        logger.info("Customer details found. Updating order details");

//        "name, lastname, email, password, urlpic, status"
        customerEntity.setName(customer.getName());
        customerEntity.setLastname(customer.getLastname());
        customerEntity.setEmail(customer.getEmail());

        String passwordEncrypted = bCryptPasswordEncoder.encode(customer.getPassword());
        customerEntity.setPassword(passwordEncrypted);
        logger.info("Saving updated details to the database -> customers");
        customerEntity.setUrlPic(customer.getUrlPic());
        customerEntity.setStatus(customer.getStatus());

        CustomerEntity updatedCustomer = customerRepository.save(customerEntity);

        returnValue = modelMapper.map(updatedCustomer, CustomerDto.class);

        logger.info("Returning the customer to the CustomerController via CustomerDto object");

        return returnValue;
    }

    @Override
    public void deleteCustomer(String customerId) throws NotFoundException {
        logger.info("CustomerService -> deleteCustomer(customerId) method is called. Finding the user");

        CustomerEntity customerEntity = customerRepository.findByCustomerId(customerId);
        if (customerEntity == null) {

            logger.error("Can't find the customer id from the database");

            throw new NotFoundException(customerId);
        }

        logger.info("Customer details found. Deleting the user from the database -> Customer");
        customerRepository.delete(customerEntity);
    }

    @Override
    public List<CustomerDto> getCustomers() {
        logger.info("CustomerService -> getCustomers() method is called. Collection all users details");

        List<CustomerDto> returnValue = new ArrayList<>();

        Iterable<CustomerEntity> iterable = customerRepository.findAll();

        for (CustomerEntity customerEntity : iterable) {
            CustomerDto customerDto = new CustomerDto();
            BeanUtils.copyProperties(customerEntity, customerDto);
            AddressEntity address = addressRepository.findByCustomerId(customerDto.getCustomerId());
            customerDto.setType(address.getCity());
            returnValue.add(customerDto);
        }

        logger.info("Customers details found. Returning customers to the UserController via List<Customers>");
        return returnValue;
    }
    @Override
    public Page<CustomerEntity> getAllCustomer(Pageable sorted){
        return customerRepository.findAll(sorted);
    }
}
