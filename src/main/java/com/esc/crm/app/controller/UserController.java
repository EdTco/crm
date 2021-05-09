package com.esc.crm.app.controller;

import com.esc.crm.app.model.request.UserDetailsRequestModel;
import com.esc.crm.app.model.response.*;
import com.esc.crm.app.security.SecurityConstants;
import com.esc.crm.app.service.UserService;
import com.esc.crm.app.shared.dto.UserDto;
import io.jsonwebtoken.Jwts;
import io.swagger.annotations.*;
import org.modelmapper.ModelMapper;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

//    @Autowired
//    private ModelMapper modelMapper;

    /**
     * Initialize Logger object
     */
    org.slf4j.Logger logger = LoggerFactory.getLogger(UserController.class);

    @CrossOrigin
    @ApiOperation(value = "The Get User Details Web Service Endpoint", notes = "This web service endpoint returns the User detials with json format or xml format")
    @ApiImplicitParams({@ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
    @GetMapping(path = "/{id}",
            produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public UserRest getUser(@PathVariable String id) {

        logger.info("UserController -> getUser(id) method has been called");
        UserRest returnValue = new UserRest();

        UserDto userDto = userService.getUserByUserId(id);
        BeanUtils.copyProperties(userDto, returnValue);

        logger.info("Return the user to the requester");
        return returnValue;
    }

    @CrossOrigin
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong"), //
            @ApiResponse(code = 403, message = "Access denied"), //
            @ApiResponse(code = 404, message = "The user doesn't exist"), //
            @ApiResponse(code = 500, message = "Expired or invalid JWT token")})
    @ApiOperation(value = "The User Registration Web Service Endpoint", notes = "This web service endpoint returns the User detials with json format or xml format when the user is created")
    @PostMapping(
            consumes = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public UserRest createUser(@RequestBody UserDetailsRequestModel userDetails) {

        logger.info("UserController -> createUser(userDetails) method has been called");
        UserRest returnValue = new UserRest();

        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userDetails, userDto);

        UserDto createUser = userService.createUser(userDto);
        BeanUtils.copyProperties(createUser, returnValue);

        logger.info("Return the user to the requester");
        return returnValue;
    }

    @CrossOrigin
    @ApiOperation(value = "The User Details Update Web Service Endpoint", notes = "This web service endpoint returns the User detials or success message with json format or xml format when the user is updated")
    @ApiImplicitParams({@ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
    @PutMapping(path = "/{id}",
            consumes = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public UserRest updateUser(@PathVariable String id, @RequestBody UserDetailsRequestModel userDetails) {

        logger.info("UserController -> updateUser(id, userDetails) method has been called");
        UserRest returnValue = new UserRest();

        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(userDetails, userDto);

        UserDto updateUser = userService.updateUser(id, userDto);
        BeanUtils.copyProperties(updateUser, returnValue);

        logger.info("Return the user to the requester");
        return returnValue;
    }

    @CrossOrigin
    @ApiOperation(value = "The User Deletion Web Service Endpoint", notes = "This web service endpoint returns success token with json format or xml format when the user is deleted")
    @ApiImplicitParams({@ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
    @DeleteMapping(path = "/{id}",
            produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public OperationStatusModel deleteUser(@PathVariable String id) {

        logger.info("UserController -> deleteUser(id) method has been called");
        OperationStatusModel returnValue = new OperationStatusModel();
        returnValue.setOperationName(RequestOperationName.DELETE.name());

        userService.deleteUser(id);

        returnValue.setOperationResult(RequestOperationStatus.SUCCESS.name());

        logger.info("Return the message to the requester");
        return returnValue;
    }

    @CrossOrigin
    @ApiOperation(value = "The Get Users Web Service Endpoint", notes = "This web service endpoint returns List of User detials with json format or xml format")
    @ApiImplicitParams({@ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
    @GetMapping(produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public List<UserRest> getUsers() {

        logger.info("UserController -> getUsers() method has been called");
        List<UserRest> returnValue = new ArrayList<>();

        List<UserDto> users = userService.getUsers();

        for (UserDto userDto : users) {
            UserRest userModel = new UserRest();
            BeanUtils.copyProperties(userDto, userModel);
            returnValue.add(userModel);
        }

        logger.info("Return the users' list to the requester");
        return returnValue;
    }

    @CrossOrigin
    @ApiOperation(value = "The Get User Web Service Endpoint", notes = "This web service endpoint return User detials with json format or xml format")
    @ApiImplicitParams({@ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
    @GetMapping(path = "/info", produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<HashMap<Object, Object>> getinfo(HttpServletRequest request) {
        String requestHeader = request.getHeader("Authorization");
        String token = requestHeader.replace(SecurityConstants.TOKEN_PREFIX, "");
        String user =
                Jwts
                        .parser()
                        .setSigningKey(SecurityConstants.TOKEN_SECRET)
                        .parseClaimsJws(token)
                        .getBody()
                        .getSubject();
        if (user != null) {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
            UserDto userDto = userService.getUser(authenticationToken.getPrincipal().toString());
            InfoResponse infoResponse = new InfoResponse();

            infoResponse.setRoles(new String[]{userDto.getUserType()});
            infoResponse.setName(userDto.getFirstName());
            infoResponse.setAvatar(userDto.getPicURL());
            infoResponse.setIntroduction(userDto.getEmail());

            HashMap<Object, Object> map = new HashMap<>();
            map.put("code", 200);
            map.put("data", infoResponse);
            return ResponseEntity.ok().body(map);
        }
        return ResponseEntity.notFound().build();
    }

    @CrossOrigin
    @PostMapping(
            path = "/logout",
            consumes = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE},
            produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE})
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
