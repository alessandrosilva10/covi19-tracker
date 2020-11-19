package com.fema.apirest.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.fema.apirest.models.Covid;
import com.fema.apirest.repository.CovidRepository;

@RestController
@RequestMapping(value="/api")
public class CovidResource {
	@Autowired
	CovidRepository covidRepository;
	
	@GetMapping("/covidteste")
	public List<Covid> listaCountries(){
		return covidRepository.findAll();
	}

	@GetMapping("/covid/country/{id}")
	public Covid listaCountryById(@PathVariable(value="id") long id){
		return covidRepository.findById(id);
	}
	
	@PostMapping("/country")
	public Covid salvarCovid(@RequestBody Covid covid) {
		return covidRepository.save(covid);
	}
	
	@GetMapping("/covidcountries")
	@CrossOrigin(origins = "http://localhost:3000")
	public String covid_countries() {
		RestTemplate restTemplate = new RestTemplateBuilder().build();
		//return restTemplate.getForObject("https://covid19-brazil-api.now.sh/api/report/v1", String.class);
		return restTemplate.getForObject("https://covid19-brazil-api.now.sh/api/report/v1/countries", String.class);
	}
	
	@GetMapping("/covidbrazil")
	@CrossOrigin(origins = "http://localhost:3000")
	public String covid_brazil() {
		RestTemplate restTemplate = new RestTemplateBuilder().build();
		return restTemplate.getForObject("https://covid19-brazil-api.now.sh/api/report/v1", String.class);
	}
}
