package cl.eureka.services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer	// Habilita el servidor Eureka
public class EurekaServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(EurekaServicesApplication.class, args);
	}

}
