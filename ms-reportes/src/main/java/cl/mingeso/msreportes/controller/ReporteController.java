package cl.mingeso.msreportes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.mingeso.msreportes.entity.DevolucionEntity;
import cl.mingeso.msreportes.services.ReporteService;

@RestController
@RequestMapping("/reportes")
public class ReporteController {

    @Autowired
    ReporteService reporteService;

    @GetMapping("/devoluciones")
    ResponseEntity<List<DevolucionEntity>> getDevoluciones() {
        List<DevolucionEntity> devoluciones = reporteService.findAll();
        return ResponseEntity.ok(devoluciones);
    }

}
