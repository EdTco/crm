package com.esc.crm.app.service;

import com.esc.crm.app.shared.dto.FoodDto;

import java.util.List;

public interface FoodService {

	FoodDto createFood(FoodDto food);
	FoodDto getFoodById(String foodId);
	FoodDto updateFoodDetails(String foodId, FoodDto foodDetails);
	void deleteFoodItem(String id);
	List<FoodDto> getFoods();
}
