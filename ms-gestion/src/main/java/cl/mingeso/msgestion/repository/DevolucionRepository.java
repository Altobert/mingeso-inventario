package cl.mingeso.msgestion.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cl.mingeso.msgestion.entity.Devolucion;

@Repository
public interface DevolucionRepository extends JpaRepository<Devolucion, Integer>{
    
}
