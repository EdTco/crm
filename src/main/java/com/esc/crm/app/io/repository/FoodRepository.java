package com.esc.crm.app.io.repository;

import com.esc.crm.app.io.entity.FoodEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends CrudRepository<FoodEntity, Long> {
	FoodEntity findByFoodId(String foodId);
}
