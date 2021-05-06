package com.esc.crm.app.model.response;


import lombok.Data;

@Data
public class OrderDetailsResponse {
	private String orderId;
	private float cost;
	private String items[];
	private String userId;
	private boolean status;
}
