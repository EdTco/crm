package com.esc.crm.app.service;

import com.esc.crm.app.io.entity.CustomerEntity;
import com.esc.crm.app.shared.dto.CustomerDto;
import javassist.NotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    Page<CustomerEntity> getAllCustomer(Pageable sorted );
    CustomerDto createCustomer(CustomerDto customer);
    Optional<CustomerDto> getCustomerById(String id);
    CustomerDto updateCustomer(String customerId, CustomerDto customer) throws NotFoundException;
    void  deleteCustomer(String customerId) throws NotFoundException;
    List<CustomerDto> getCustomers();
}
