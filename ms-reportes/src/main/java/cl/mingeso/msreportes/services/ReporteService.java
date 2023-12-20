package cl.mingeso.msreportes.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import cl.mingeso.msreportes.entity.DevolucionEntity;

@Service
public class ReporteService {

    @Autowired
    RestTemplate restTemplate;

    public List<DevolucionEntity> findAll(){        
        ResponseEntity<DevolucionEntity> response = restTemplate.exchange(
                "http://localhost:8085/gestion/",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<DevolucionEntity>() {}
        );
        return (List<DevolucionEntity>) response.getBody();
    }



}
