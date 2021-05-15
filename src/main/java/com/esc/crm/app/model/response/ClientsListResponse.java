package com.esc.crm.app.model.response;

import com.esc.crm.app.shared.dto.CustomerDto;
import lombok.Data;

import java.util.List;

@Data
public class ClientsListResponse {
    private int total;
    private List<CustomerDto> items;
}
