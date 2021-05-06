package com.esc.crm.app.model.request;

import lombok.Data;

@Data
public class FoodDetailsRequestModel {

	private String foodName;
	private String foodCategory;
	private float foodPrice;
}
