package com.fema.apirest.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fema.apirest.models.Covid;

public interface CovidRepository extends JpaRepository<Covid, Long> {
	Covid findById(long id);
}
