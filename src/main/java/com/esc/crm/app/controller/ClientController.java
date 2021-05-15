package com.esc.crm.app.controller;

import com.esc.crm.app.io.entity.CustomerEntity;
import com.esc.crm.app.model.response.ClientsListResponse;
import com.esc.crm.app.service.CustomerService;
import com.esc.crm.app.shared.dto.CustomerDto;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clients")
public class ClientController {

    @Autowired
    CustomerService customerService;
    /**
     * Initialize Logger object
     */
    org.slf4j.Logger logger = LoggerFactory.getLogger(ClientController.class);

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

    @CrossOrigin
    @GetMapping(path = "/list",
            produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap<Object, Object>> getAllClients(
            @RequestParam(defaultValue = "1") String page,
            @RequestParam(defaultValue = "20") String limit,
            @RequestParam(required = false) String type,
            @RequestParam(defaultValue = "id") String sort,
            @RequestParam(defaultValue = "active", required = false) String status,
            @RequestParam(required = false) String name) {
        Pageable sorted = null;
        if(sort.equals("+id")){
            sorted =
                    PageRequest.of(
                            Integer.parseInt(page),
                            Integer.parseInt(limit),
                            Sort.by(name).descending().and(Sort.by(status)));
        }

        Page<CustomerEntity> allCustomers = customerService.getAllCustomer(sorted);

        logger.info(allCustomers.toString());
        HashMap<Object, Object> map = new HashMap<>();
        List<CustomerDto> dtoList = customerService.getCustomers();
        ClientsListResponse response = new ClientsListResponse();
        response.setTotal(dtoList.size());
        response.setItems(dtoList);
        map.put("code", 200);
        map.put("data", response);
        return ResponseEntity.ok(map);
    }
}
