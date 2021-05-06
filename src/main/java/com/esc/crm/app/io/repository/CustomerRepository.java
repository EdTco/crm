package com.esc.crm.app.io.repository;

import com.esc.crm.app.io.entity.CustomerEntity;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<CustomerEntity, Long> {
}
