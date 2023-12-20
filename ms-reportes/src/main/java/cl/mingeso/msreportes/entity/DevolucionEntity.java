package cl.mingeso.msreportes.entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class DevolucionEntity {

    private Integer id;
    private Date fechaDevolucion;
    private Date horaDevolucion;
    private String estadoDevolucion;
    /*
     * estado devolucion {en buenas condiciones o con daños}
		 	si profesor devuelve con daños > 2
		 		queda inabilitado para pedir prestamos 
     */
    private Integer contadorDanos;
    private String proyector;

}
