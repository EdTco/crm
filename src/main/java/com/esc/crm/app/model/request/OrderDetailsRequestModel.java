package com.esc.crm.app.model.request;

import lombok.Data;

@Data
public class OrderDetailsRequestModel {

	private String[] items;
	private float cost;
	private String userId;

}
