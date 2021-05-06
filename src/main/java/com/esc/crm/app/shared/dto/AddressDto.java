package com.esc.crm.app.shared.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class AddressDto implements Serializable {
    private static final long serialVersionUID = 1L;

    private long id;
    private String addressId;
    private String address;
    private String city;
    private String customerId;
}
