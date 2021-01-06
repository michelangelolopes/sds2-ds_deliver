package com.sds2.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sds2.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

	
}