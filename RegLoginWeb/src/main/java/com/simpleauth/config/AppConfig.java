package com.simpleauth.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan(basePackages = "com.simpleauth")
@Import(value = {PersistenceConfig.class})
public class AppConfig {
  
}