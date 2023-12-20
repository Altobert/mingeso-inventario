package cl.mingeso.msgestion.controller;

import javax.persistence.criteria.CriteriaBuilder.In;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.mingeso.msgestion.entity.Devolucion;
import cl.mingeso.msgestion.services.DevolucionService;

@RestController
@RequestMapping("/gestion")
public class DevolucionController {
    
    @Autowired
    DevolucionService devolucionService;

    @PostMapping()
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Devolucion> createDevolucion(@RequestBody Devolucion devolucion) {
        Devolucion newDevolucion = new Devolucion();
        Integer id=0;        
        
        Integer cantidadDevoluciones= devolucionService.obtenerCantidadDevoluciones();
        if(cantidadDevoluciones == 0){
            id = 1;
        }else{
            id = cantidadDevoluciones + 1;
        }

        newDevolucion.setId(id);
        newDevolucion.setContadorDanos(devolucion.getContadorDanos());
        newDevolucion.setEstadoDevolucion(devolucion.getEstadoDevolucion());
        newDevolucion.setHoraDevolucion(devolucion.getHoraDevolucion());
        newDevolucion.setFechaDevolucion(devolucion.getFechaDevolucion());
        newDevolucion.setProyector(devolucion.getProyector());
        devolucionService.registrarDevolucion(newDevolucion);
        return ResponseEntity.ok(newDevolucion);
    } 

}
