package com.esc.crm.app.model.response;

import lombok.Data;

@Data
public class UserRest {
    private String userId;
    private String email;
    private String firstName;
    private String lastName;
    private String picURL;
    private String userType;
}
