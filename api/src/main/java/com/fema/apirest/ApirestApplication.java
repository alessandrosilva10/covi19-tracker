package com.fema.apirest;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.fema.apirest.resttemplate.CovidJson;
import com.zaxxer.hikari.HikariDataSource;

@SpringBootApplication
public class ApirestApplication {
	@Autowired
    DataSource dataSource;
	
	public void run(String... args) throws Exception {
	 System.out.println("DATASOURCE = " + dataSource);

	  
	 HikariDataSource newds = (HikariDataSource)dataSource;
	 System.out.println("DATASOURCE = " + newds.getMaximumPoolSize());
	 }
	
	public static void main(String[] args) {
		SpringApplication.run(ApirestApplication.class, args);
	}
}
