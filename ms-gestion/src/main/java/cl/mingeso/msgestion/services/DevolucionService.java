package cl.mingeso.msgestion.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.mingeso.msgestion.entity.Devolucion;
import cl.mingeso.msgestion.repository.DevolucionRepository;

@Service
public class DevolucionService {

    @Autowired
    DevolucionRepository devolucionRepository;

    public void registrarDevolucion(Devolucion devolucion) {
        devolucionRepository.save(devolucion);
        System.out.println("Devolucion registrada");
    }

}
