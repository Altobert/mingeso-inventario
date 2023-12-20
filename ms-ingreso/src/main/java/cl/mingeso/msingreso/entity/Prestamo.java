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

import java.util.Date;

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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    Date fechaPrestamo;
    Date horaPrestamo;
    String descripcionUso;
    Integer cantidadHoras;
    String marcaProyector;    

}
