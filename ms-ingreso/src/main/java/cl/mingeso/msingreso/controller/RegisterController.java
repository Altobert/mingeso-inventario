package cl.mingeso.msingreso.controller;

import org.springframework.web.bind.annotation.RestController;

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
    
    @PostMapping()
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Prestamo> registrarPrestamo(@RequestBody Prestamo prestamo){
        Prestamo newprestamo = new Prestamo();
        Integer idContador = 0;
        idContador++;

        Integer cantidadRegistros = prestamoService.countPrestamo();
        if (cantidadRegistros == 0) {
            idContador = 1;            
        }else{
            idContador = cantidadRegistros + 1;
        }

        newprestamo.setId(cantidadRegistros.longValue() + 1);
        newprestamo.setFechaPrestamo(prestamo.getFechaPrestamo());
        newprestamo.setHoraPrestamo(prestamo.getHoraPrestamo());
        newprestamo.setDescripcionUso(prestamo.getDescripcionUso());
        newprestamo.setCantidadHoras(prestamo.getCantidadHoras());
        newprestamo.setMarcaProyector(prestamo.getMarcaProyector());
        prestamoService.savePrestamo(newprestamo);
                
        return ResponseEntity.ok(newprestamo);
    }
    
}
