package cl.mingeso.msgestion.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
public class Devolucion {

    private Date fechaDevolucion;
    private Date horaDevolucion;
    private String estadoDevolucion;
    
}
