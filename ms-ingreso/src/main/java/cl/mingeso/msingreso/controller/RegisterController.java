package cl.mingeso.msingreso.controller;

import org.springframework.web.bind.annotation.RestController;

import cl.mingeso.msingreso.dto.PrestamoDto;
import cl.mingeso.msingreso.entity.Prestamo;
import cl.mingeso.msingreso.services.PrestamoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class RegisterController {

    //registrar prestamo de proyector
    //registrar profesor
    //registrar fecha de reserva
    //registrar hora de reserva

    @Autowired
    private PrestamoService prestamoService;

    @PostMapping("/")
    public ResponseEntity<Prestamo> postMethodName(@RequestBody Prestamo prestamo) {
        //TODO: process POST request
        prestamoService.savePrestamo(prestamo);
        return null;
    }
    


}
