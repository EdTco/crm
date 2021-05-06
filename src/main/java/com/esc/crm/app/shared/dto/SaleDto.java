package com.esc.crm.app.shared.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class SaleDto implements Serializable {
    private long id;
    private String orderId;
    private String date;
}
