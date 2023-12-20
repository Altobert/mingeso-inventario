package cl.mingeso.msingreso.dto;

import java.io.Serializable;

public class PrestamoDto implements Serializable {

    private static final long serialVersionUID = 1L;

    private Integer idPrestamo;
    private Integer idProfesor;
    private Integer idProyector;
    private String fechaPrestamo;
    private String fechaDevolucion;
    private String estadoDevolucion;

    public PrestamoDto() {
    }

    public PrestamoDto(Integer idPrestamo, Integer idProfesor, Integer idProyector, String fechaPrestamo,
            String fechaDevolucion, String estadoDevolucion) {
        this.idPrestamo = idPrestamo;
        this.idProfesor = idProfesor;
        this.idProyector = idProyector;
        this.fechaPrestamo = fechaPrestamo;
        this.fechaDevolucion = fechaDevolucion;
        this.estadoDevolucion = estadoDevolucion;
    }

    public Integer getIdPrestamo() {
        return this.idPrestamo;
    }

    public void setIdPrestamo(Integer idPrestamo) {
        this.idPrestamo = idPrestamo;
    }

    public Integer getIdProfesor() {
        return this.idProfesor;
    }

    public void setIdProfesor(Integer idProfesor) {
        this.idProfesor = idProfesor;
    }

    public Integer getIdProyector() {
        return this.idProyector;
    }

    public void setIdProyector(Integer idProyector) {
        this.idProyector = idProyector;
    }

    public String getFechaPrestamo() {
        return this.fechaPrestamo;
    }

    public void setFechaPrestamo(String fechaPrestamo) {
        this.fechaPrestamo = fechaPrestamo;
    }

    public String getFechaDevolucion() {
        return this.fechaDevolucion;
    }

    public void setFechaDevolucion(String fechaDevolucion) {
        this.fechaDevolucion = fechaDevolucion;
    }

    public String getEstadoDevolucion() {
        return this.estadoDevolucion;
    }

    public void setEstadoDevolucion(String estadoDevolucion) {
        this.estadoDevolucion = estadoDevolucion;
    }

    public PrestamoDto idPrestamo(Integer idPrestamo) {
        this.idPrestamo = idPrestamo;
        return this;
    }

    @Override
    public String toString() {
        return "{" + " idPrestamo='" + getIdPrestamo() + "'" + ", idProfesor='" + getIdProfesor() + "'"
                + ", idProyector='" + getIdProyector() + "'" + ", fechaPrestamo='" + getFechaPrestamo() + "'"
                + ", fechaDevolucion='" + getFechaDevolucion() + "'" + ", estadoDevolucion='" + getEstadoDevolucion()
                + "'" + "}";
    }

}
