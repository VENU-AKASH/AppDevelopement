package com.nandha.meow.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.nandha.meow.Entity.NewCustomerEntity;
import com.nandha.meow.Repository.NewCustomerRepository;
@Service
public class NewCustomerService {




	@Autowired
	NewCustomerRepository newCustomerRepository;
		public Page<NewCustomerEntity> SortingAndPaging(int page,int size,String field){
			Pageable paging=PageRequest.of(page, size).withSort(Sort.by(field));
			return newCustomerRepository.findAll(paging);
		}
		public Page<NewCustomerEntity> Paging(int CurrentPage,int itemsPerPage){
			Pageable paging=PageRequest.of(CurrentPage,itemsPerPage);
			return newCustomerRepository.findAll(paging);
		}
}
