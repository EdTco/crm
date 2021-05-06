package com.esc.crm.app.shared.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class CustomerDto implements Serializable {
    private static final long serialVersionUID = 2L;
    private long id;
    private String customerId;
    private String name;
    private String lastname;
    private String email;
    private String password;
    private String UrlPic;
    private String orderId;
}
