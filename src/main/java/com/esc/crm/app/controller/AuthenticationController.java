package com.esc.crm.app.controller;

import com.esc.crm.app.model.request.LoginRequest;
import com.esc.crm.app.model.response.UserRest;
import com.esc.crm.app.service.UserService;
import com.esc.crm.app.shared.dto.UserDto;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ResponseHeader;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;

@RestController
public class AuthenticationController {

    org.slf4j.Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    UserService userService;

    @ApiOperation("User login")
    @ApiResponses(value = {@ApiResponse(code = 200, message = "Response Headera", responseHeaders = {
            @ResponseHeader(name = "authorization", description = "Bearer <JWT value here>", response = String.class),
            @ResponseHeader(name = "userId", description = "<Public User Id value here>", response = String.class)
    })
    })
    @PostMapping("/users/login")
    public void fakeLogin(@RequestBody LoginRequest login) {
        logger.info(login.toString());
    }

    @RequestMapping(value = "/users/{email}", method = RequestMethod.GET)
    public UserRest getUserByEmail(@PathVariable String email) {

        UserRest returnValue = new UserRest();

        UserDto user = userService.getUser(email);
        BeanUtils.copyProperties(user, returnValue);

        return returnValue;
    }

    @CrossOrigin
    @PostMapping(path = "/users/logout")
    public ResponseEntity<HashMap<Object, Object>> logout(HttpServletRequest request) {
        HashMap<Object, Object> map = new HashMap<>();
        try {
            request.logout();
            map.put("code", 200);
            map.put("data", "success");
            return ResponseEntity.ok(map);
        } catch (ServletException e) {
            map.put("code", 508);
            map.put("data", "declined");
            return ResponseEntity.ok(map);
        }
    }
}
