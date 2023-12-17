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
public class Prestamo {

    private Date fechaPrestamoDate;
    private Date horaPrestamoDate;
    private String profesoString;
    private String usoString;
    /*
     * proyector
			no puede quedar prestado por mas de 6 horas.
				si lo anterior ocurre, 
					no puede pedir hasta proxima semana
     */
    private Integer horasPrestamo;
    /*
     * si proyector es epson
			solo para clases y examen de titulo

		si proyector es viewSonic
			solo para reuniones varias
     */
    private String objetivoPrestamo;
}
