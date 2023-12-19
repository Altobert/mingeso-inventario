package cl.mingeso.msingreso.controller;

import org.springframework.web.bind.annotation.RestController;

import cl.mingeso.msingreso.dto.PrestamoDto;
import cl.mingeso.msingreso.entity.Prestamo;
import cl.mingeso.msingreso.services.PrestamoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/ingreso")
public class RegisterController {

    @Autowired
    private PrestamoService prestamoService;

    @PostMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Prestamo> registrarPrestamo(/*@RequestBody Prestamo prestamo*/){
        Prestamo prestamo = new Prestamo();
        prestamo.setIdPrestamo(1);
        prestamo.setIdProfesor(1);
        prestamo.setIdProyector(1);

        prestamoService.savePrestamo(prestamo);
        return null;
    }
    
}
