package com.fema.apirest.resttemplate;

import com.fema.apirest.models.Covid;

public class CovidBuilder {
	private Covid covid;

    public CovidBuilder() {
        this.covid = new Covid();
    }
    
    public static CovidBuilder builder() {
        return new CovidBuilder();
    }
    
    public CovidBuilder addCountry(String country) {
        this.covid.setCountry(country);
        return this;
    }
    
    public CovidBuilder addDeaths(int deaths) {
        this.covid.setDeaths(deaths);
        return this;
    }
    
    public CovidBuilder addCases(int cases) {
        this.covid.setCases(cases);
        return this;
    }
    
    public CovidBuilder addConfirmed(int confirmed) {
        this.covid.setConfirmed(confirmed);
        return this;
    }
    
    public CovidBuilder addRecovered(int recovered) {
        this.covid.setRecovered(recovered);
        return this;
    }
    
    public Covid get() {
    	//this.covid.getConfirmed(this.);
        return this.covid;
    }
}

//https://www.mballem.com/post/simplificando-com-builder-pattern/
