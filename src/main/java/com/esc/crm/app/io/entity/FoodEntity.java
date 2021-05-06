package com.esc.crm.app.io.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "foods")
@Data
@GenericGenerator(
        name = "foodSequenceGenerator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
                @Parameter(name = "sequence_name", value = "foodSequence"),
                @Parameter(name = "initial_value", value = "1"),
                @Parameter(name = "increment_size", value = "1")
        }
)
public class FoodEntity implements Serializable {

    private static final long serialVersionUID = 767958036359069705L;

    @Id
	@GeneratedValue(generator = "foodSequenceGenerator")
    private long id;

    @Column(nullable = false)
    private String foodId;

    @Column(nullable = false)
    private String foodName;

    @Column(nullable = false)
    private float foodPrice;

    @Column(nullable = false)
    private String foodCategory;

}
