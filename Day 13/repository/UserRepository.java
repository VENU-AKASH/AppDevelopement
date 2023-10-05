package com.tech3.srinithi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tech3.srinithi.model.User;



public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);

}