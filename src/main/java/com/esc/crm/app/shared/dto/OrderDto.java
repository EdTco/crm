package com.esc.crm.app.shared.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class OrderDto implements Serializable {

    private static final long serialVersionUID = 2500955288592764755L;
    private long id;
    private String orderId;
    private float cost;
    private String[] items;
    private String userId;
    private boolean status;
}
