package cl.mingeso.msgestion.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "devolucion")
public class Devolucion {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    Date fechaDevolucion;
    Date horaDevolucion;
    String estadoDevolucion;
    /*
     * estado devolucion {en buenas condiciones o con daños}
		 	si profesor devuelve con daños > 2
		 		queda inabilitado para pedir prestamos 
     */
    Integer contadorDanos;
    
}
