package com.tech3.srinithi.service;

import com.tech3.srinithi.exception.UserException;
import com.tech3.srinithi.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
