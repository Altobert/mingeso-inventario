package cl.mingeso.msgestion.entity;

import java.util.Date;

import javax.persistence.Entity;
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
@Table(name = "prestamo")
public class Prestamo {

    @Id
    @NotNull
    private Integer idPrestamo;
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
