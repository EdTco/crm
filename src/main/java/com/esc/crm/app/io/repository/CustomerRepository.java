package com.esc.crm.app.io.repository;

import com.esc.crm.app.io.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<CustomerEntity, Long> {
    CustomerEntity findByCustomerId(String id);
//    List<CustomerEntity> findAll( String name, Pageable pageable);
}
