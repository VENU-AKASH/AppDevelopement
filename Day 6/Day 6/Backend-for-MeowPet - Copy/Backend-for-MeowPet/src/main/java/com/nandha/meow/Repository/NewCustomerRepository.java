package com.nandha.meow.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nandha.meow.Entity.NewCustomerEntity;




public interface NewCustomerRepository extends JpaRepository<NewCustomerEntity,Integer>{

}
