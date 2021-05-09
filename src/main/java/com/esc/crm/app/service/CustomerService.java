package com.esc.crm.app.service;

import com.esc.crm.app.shared.dto.CustomerDto;
import javassist.NotFoundException;

import java.util.List;
import java.util.Optional;

public interface CustomerService {
    CustomerDto createCustomer(CustomerDto customer);
    Optional<CustomerDto> getCustomerById(String id);
    CustomerDto updateCustomer(String customerId, CustomerDto customer) throws NotFoundException;
    void  deleteCustomer(String customerId) throws NotFoundException;
    List<CustomerDto> getCustomers();
}
