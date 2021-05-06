package com.esc.crm.app.io.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "sales")
@GenericGenerator(
        name = "saleSequenceGenerator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
                @Parameter(name = "sequence_name", value = "saleSequence"),
                @Parameter(name = "initial_value", value = "1"),
                @Parameter(name = "increment_size", value = "1")
        }
)
@Data
public class SaleEntity implements Serializable {
    @Id
    @GeneratedValue(generator = "saleSequenceGenerator")
    private long id;

    @Column(nullable = false)
    private String orderId;
    @Column(nullable = false, updatable = false)
    private String date;
}
