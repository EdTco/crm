package com.esc.crm.app.controller;

import com.esc.crm.app.service.CustomerService;
import com.esc.crm.app.shared.dto.CustomerDto;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerService customerService;
    /**
     * Initialize Logger object
     */
    org.slf4j.Logger logger = LoggerFactory.getLogger(CustomerController.class);

    @CrossOrigin
    @ApiOperation(value = "The Get Customer Details Web Service Endpoint", notes = "This web service endpoint returns the customer details with json format or xml format")
    @ApiImplicitParams({@ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
    @GetMapping(path = "/{id}",
            produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<CustomerDto> getCustomer(@PathVariable String id) {

        logger.info("CustomerController -> getCustomer(id) method has been called");
        CustomerDto returnValue = new CustomerDto();

        Optional<CustomerDto> customerDto = customerService.getCustomerById(id);
        BeanUtils.copyProperties(customerDto, returnValue);
        logger.info("Return the user to the requester");

        return ResponseEntity.ok(returnValue);
    }


}
