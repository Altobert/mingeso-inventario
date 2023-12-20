package cl.mingeso.msingreso.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;


@Entity
@Table(name = "prestamo")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Prestamo{

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date fechaPrestamo;
    private Date horaPrestamo;
    private String descripcionUso;
    private String cantidadHoras;
    private String marcaProyector;    
    private String profesor;

}
