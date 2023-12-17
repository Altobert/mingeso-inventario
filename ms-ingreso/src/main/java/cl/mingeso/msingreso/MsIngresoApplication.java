package cl.mingeso.msingreso;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MsIngresoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsIngresoApplication.class, args);
	}

}
