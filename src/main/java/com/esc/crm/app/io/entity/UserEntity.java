package com.esc.crm.app.io.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "users")
@Data
@GenericGenerator(
		name = "userSequenceGenerator",
		strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
		parameters = {
				@Parameter(name = "sequence_name", value = "userSequence"),
				@Parameter(name = "initial_value", value = "1"),
				@Parameter(name = "increment_size", value = "1")
		}
)
public class UserEntity implements Serializable {

	private static final long serialVersionUID = -3753911216867256002L;

	@Id
	@GeneratedValue(generator = "userSequenceGenerator")
	private long id;

	@Column(nullable = false)
	private String userId;

	@Column(nullable = false, length = 20)
	private String firstName;

	@Column(nullable = false, length = 50)
	private String lastName;

	@Column(nullable = false, length = 120, unique = true)
	private String email;

	@Column(nullable = false)
	private String encryptedPassword;

	@Column(nullable = false)
	private String picURL;

	@Column(nullable = false)
	private String userType;

}
