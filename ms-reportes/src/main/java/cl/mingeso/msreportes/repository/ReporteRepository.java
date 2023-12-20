package cl.mingeso.msreportes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import cl.mingeso.msreportes.entity.Reporte;

public interface ReporteRepository extends JpaRepository<Reporte, Integer>{
    
}
