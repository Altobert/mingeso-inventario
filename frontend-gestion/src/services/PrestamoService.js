import axios from 'axios';

const PRESTAMO_API_URL = "http://localhost:8085/prestamo/";

class PrestamoService {

    getPrestamos(){
        return axios.get(PRESTAMO_API_URL);
    }

    registrarPrestamo(prestamo){
        return axios.post(PRESTAMO_API_URL, prestamo);
    }
    
}

export default new PrestamoService()