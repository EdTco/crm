package com.esc.crm.app.model.response;

import lombok.Data;

@Data
public class InfoResponse {
    private String[] roles;
    private String introduction;
    private String avatar;
    private String name;
}
