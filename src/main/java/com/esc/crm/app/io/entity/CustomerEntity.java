package com.esc.crm.app.io.entity;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "customers")
@GenericGenerator(
        name = "customerSequenceGenerator",
        strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
        parameters = {
                @Parameter(name = "sequence_name", value = "customerSequence"),
                @Parameter(name = "initial_value", value = "1"),
                @Parameter(name = "increment_size", value = "1")
        }
)
@Data
public class CustomerEntity implements Serializable {
    private static final long serialVersionUID = 2L;

    @Id
    @GeneratedValue(generator = "customerSequenceGenerator")
    private long id;

    @Column(nullable = false)
    private String customerId;

    @Column(nullable = false, length = 40)
    private String name;

    @Column(nullable = false, length = 40)
    private String lastname;

    @Column(nullable = false, unique = true, updatable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String UrlPic;

    @Column(nullable = false)
    private String orderId;

}
