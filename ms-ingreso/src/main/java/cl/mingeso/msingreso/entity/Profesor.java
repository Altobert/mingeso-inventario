package cl.mingeso.msingreso.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "profesor")
public class Profesor {

    @Id
    @NotNull
    Integer idProfesor;
    String nombreProfesoString;
    Integer contadorDanosPrestamo;
    Date fechaPrestamoDate;
    Date fechaDevolucionDate;
    String estadoDevolucionString;

}
