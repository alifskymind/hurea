package com.alifskymind.hurea.controller;

import com.alifskymind.hurea.model.UserModel;
import com.alifskymind.hurea.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {

	// bind controller to service using constructor
	private final UserService userService;

	public UserController(UserService userService) {

		this.userService = userService;
	}

	// post method
	@PostMapping("/users")
	public UserModel saveUser(@RequestBody UserModel user) {

		return userService.saveUser(user);
	}

	// get method all
	@GetMapping("/users")
	public List<UserModel> getAllUsers() {

		return userService.getAllUsers();
	}

	// get method individually
	@GetMapping("/users/{id}")
	public ResponseEntity<UserModel> getUserById(@PathVariable("id") Long id) {

		UserModel user = null;
		user = userService.getUserById(id);
		return ResponseEntity.ok(user);

	}

	// put method
	@PutMapping("/users/{id}")
	public ResponseEntity<UserModel> updateUser(@PathVariable("id") Long id, @RequestBody UserModel user) {

		user = userService.updateUser(id, user);
		return ResponseEntity.ok(user);
	}

	// delete method
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable("id") Long id) {

		boolean deleted = false;
		deleted = userService.deleteUser(id);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", deleted);
		return ResponseEntity.ok(response);
	}

}
