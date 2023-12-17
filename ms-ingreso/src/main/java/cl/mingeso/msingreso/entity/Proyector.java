package cl.mingeso.msingreso.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;



@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "proyector")
public class Proyector {

    @Id
    @NotNull
    private Integer idProyector;    
    private String marcaString;
    private String modeloString;
    private String descripcionString;
    private Date fechaPrestamoString;
    private Date fechaDevolucionString;

}
