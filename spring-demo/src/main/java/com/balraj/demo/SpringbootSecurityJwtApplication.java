package com.balraj.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
@EnableConfigurationProperties
public class SpringbootSecurityJwtApplication extends SpringBootServletInitializer {
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(SpringbootSecurityJwtApplication.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(SpringbootSecurityJwtApplication.class, args);
	}
}
