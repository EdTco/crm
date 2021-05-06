package com.esc.crm.app.controller;

import com.esc.crm.app.model.request.UserDetailsRequestModel;
import com.esc.crm.app.model.response.OperationStatusModel;
import com.esc.crm.app.model.response.RequestOperationName;
import com.esc.crm.app.model.response.RequestOperationStatus;
import com.esc.crm.app.model.response.UserRest;
import com.esc.crm.app.service.UserService;
import com.esc.crm.app.shared.dto.UserDto;
import io.swagger.annotations.*;
import org.modelmapper.ModelMapper;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	private ModelMapper modelMapper;

	/**
	 * Initialize Logger object
	 */
	org.slf4j.Logger logger = LoggerFactory.getLogger(UserController.class);

	@CrossOrigin
	@ApiOperation(value = "The Get User Details Web Service Endpoint", notes = "This web service endpoint returns the User detials with json format or xml format")
	@ApiImplicitParams({ @ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
	@GetMapping(path = "/{id}",
			produces = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
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
			consumes = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE },
			produces = {MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
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
	@ApiImplicitParams({ @ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
	@PutMapping(path = "/{id}",
			consumes = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE },
			produces = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
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
	@ApiImplicitParams({ @ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
	@DeleteMapping(path = "/{id}",
			produces = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
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
	@ApiImplicitParams({ @ApiImplicitParam(name = "authorization", value = "Bearer JWT Token", paramType = "header")})
	@GetMapping(produces = { MediaType.APPLICATION_XML_VALUE, MediaType.APPLICATION_JSON_VALUE })
	public List<UserRest> getUsers(){

		logger.info("UserController -> getUsers() method has been called");
		List<UserRest> returnValue = new ArrayList<>();

		List<UserDto> users = userService.getUsers();

		for(UserDto userDto : users) {
			UserRest userModel = new UserRest();
			BeanUtils.copyProperties(userDto, userModel);
			returnValue.add(userModel);
		}

		logger.info("Return the users' list to the requester");
		return returnValue;
	}

}
