package com.esc.crm.app.io.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "orders")
@Data
@GenericGenerator(
		name = "orderSequenceGenerator",
		strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
		parameters = {
				@Parameter(name = "sequence_name", value = "orderSequence"),
				@Parameter(name = "initial_value", value = "1"),
				@Parameter(name = "increment_size", value = "1")
		}
)
public class OrderEntity implements Serializable {

	private static final long serialVersionUID = -6946120796474180178L;

	@Id
	@GeneratedValue(generator = "orderSequenceGenerator")
	private long id;

	@Column(nullable = false)
	private String orderId;

	@Column(nullable = false)
	private float cost;

	@Column(nullable = false)
	private String[] items;

	@Column(nullable = false)
	private String userId;

	@Column(nullable = false)
	private boolean status;

}
