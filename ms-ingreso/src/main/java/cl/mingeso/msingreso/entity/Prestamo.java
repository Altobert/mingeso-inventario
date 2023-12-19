package cl.mingeso.msingreso.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter
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
