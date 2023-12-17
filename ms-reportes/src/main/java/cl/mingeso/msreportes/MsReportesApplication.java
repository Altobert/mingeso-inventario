package cl.mingeso.msreportes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MsReportesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsReportesApplication.class, args);
	}

}
