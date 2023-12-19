package cl.mingeso.msingreso.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "prestamo")
public class Prestamo {

    @Id
    @NotNull
    Integer idPrestamo;
    Integer idProfesor;
    Integer idProyector;
    String fechaPrestamo;
    String fechaDevolucion;
    String estadoDevolucion;

}
