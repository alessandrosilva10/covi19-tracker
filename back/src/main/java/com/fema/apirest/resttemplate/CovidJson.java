package com.fema.apirest.resttemplate;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

import com.fema.apirest.models.Covid;

public class CovidJson {
	
	public void consumeApi() {
		
		String uri = Singleton.getInstance().setUri("https://covid19-brazil-api.now.sh/api/report/v1/countries");

		RestTemplate restTemplate = new RestTemplateBuilder()
				.rootUri(uri)
				.build();
	   		 
		    RestTemplate restTemplate1 = new RestTemplate();
		 
		    String result = restTemplate.getForObject(uri, String.class);
		    System.out.println(result);    
	}
}
