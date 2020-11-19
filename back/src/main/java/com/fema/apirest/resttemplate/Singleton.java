package com.fema.apirest.resttemplate;

public class Singleton {
	private String uri;
	private static Singleton instancia;
	private Singleton(){};
	
	public static synchronized Singleton getInstance() {
		if(instancia == null) {
			System.out.print("Instancia criada");
			instancia = new Singleton();
		}
		return instancia;
	}
	
	public String setUri(String uri) {
		return uri;
	}
}
