package cl.mingeso.msingreso.entity;

import java.util.Date;
import jakarta.persistence.Entity;

@Entity
public class Proyector {

    private String marcaString;
    private String modeloString;
    private String descripcionString;
    private Date fechaPrestamoString;
    private Date fechaDevolucionString;

}
