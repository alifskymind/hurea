package com.alifskymind.hurea.service;

import com.alifskymind.hurea.entity.UserEntity;
import com.alifskymind.hurea.model.UserModel;
import com.alifskymind.hurea.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImplementation implements UserService {

	// bind service to repository using constructor
	private final UserRepository userRepository;

	public UserServiceImplementation(UserRepository userRepository) {

		this.userRepository = userRepository;
	}

	// post method
	@Override
	public UserModel saveUser(UserModel user) {

		UserEntity userEntity = new UserEntity();
		BeanUtils.copyProperties(user, userEntity);
		userRepository.save(userEntity);
		return user;
	}

	// get method all
	@Override
	public List<UserModel> getAllUsers() {

		List<UserEntity> userEntities = userRepository.findAll();

		List<UserModel> users = userEntities
				.stream()
				.map(userEntity -> new UserModel(
						userEntity.getId(),
						userEntity.getFirstName(),
						userEntity.getLastName(),
						userEntity.getEmail(),
						userEntity.getPassword()
				))
				.collect(Collectors.toList());

		return users;
	}

	// get method individually
	@Override
	public UserModel getUserById(Long id) {

		UserEntity userEntity = userRepository.findById(id).get();
		UserModel user = new UserModel();
		BeanUtils.copyProperties(userEntity, user);
		return user;
	}

	// put method
	@Override
	public UserModel updateUser(Long id, UserModel user) {

		UserEntity userEntity = userRepository.findById(id).get();

		userEntity.setFirstName(user.getFirstName());
		userEntity.setLastName(user.getLastName());
		userEntity.setEmail(user.getEmail());
		userEntity.setPassword(user.getPassword());

		userRepository.save(userEntity);
		return user;
	}

	// delete method
	@Override
	public boolean deleteUser(Long id) {

		UserEntity user =  userRepository.findById(id).get();
		userRepository.delete(user);
		return true;
	}
}
