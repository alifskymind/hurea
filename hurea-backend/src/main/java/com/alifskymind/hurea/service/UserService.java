package com.alifskymind.hurea.service;

import com.alifskymind.hurea.model.UserModel;

import java.util.List;

public interface UserService {

	// post method
	UserModel saveUser(UserModel user);

	// get method all
	List<UserModel> getAllUsers();

	// get method individually
	UserModel getUserById(Long id);

	// put method
	UserModel updateUser(Long id, UserModel user);

	// delete method
	boolean deleteUser(Long id);

}
