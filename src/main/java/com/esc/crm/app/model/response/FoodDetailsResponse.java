package com.esc.crm.app.model.response;

import lombok.Data;

@Data
public class FoodDetailsResponse {

	private String foodId;
	private String foodName;
	private float foodPrice;
	private String foodCategory;

}
