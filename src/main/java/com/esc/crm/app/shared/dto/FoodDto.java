package com.esc.crm.app.shared.dto;

import lombok.Data;

import java.io.Serializable;

@Data
public class FoodDto implements Serializable {

	private static final long serialVersionUID = 5323277388000239262L;
	private long id;
	private String foodId;
	private String foodName;
	private String foodCategory;
	private float foodPrice;
}
