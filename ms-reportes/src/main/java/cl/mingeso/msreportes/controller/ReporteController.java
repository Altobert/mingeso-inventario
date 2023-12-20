package cl.mingeso.msreportes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import cl.mingeso.msreportes.services.ReporteService;

@RestController
@RequestMapping("/reportes")
public class ReporteController {

    @Autowired
    ReporteService reporteService;

}
