import axios from 'axios';

const PRESTAMO_API_URL = "http://localhost:8080/prestamo/";

class PrestamoService {

    getPrestamos(){
        return axios.get(PRESTAMO_API_URL);
    }

    registrarPrestamo(prestamo){
        return axios.post(PRESTAMO_API_URL, prestamo);
    }
    
    /*getEstudiantes(){
        return axios.get(PRESTAMO_API_URL);
    }*/

    /*getEstudianteByRut(rut){
        return axios.get(ESTUDIANTE_API_URL + rut);
    }*/

    /*createEstudiante(estudiante){
        return axios.post(ESTUDIANTE_API_URL, estudiante);
    }*/
}

export default new PrestamoService()