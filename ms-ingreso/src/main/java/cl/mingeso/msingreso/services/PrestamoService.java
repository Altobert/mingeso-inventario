package cl.mingeso.msingreso.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cl.mingeso.msingreso.entity.Prestamo;
import cl.mingeso.msingreso.repository.PrestamoRepository;

@Service
public class PrestamoService {

    @Autowired
    private PrestamoRepository prestamoRepository;
    
    public void savePrestamo(Prestamo prestamo) {
        prestamoRepository.save(prestamo);        
        System.out.println("Prestamo guardado");
    }

}
