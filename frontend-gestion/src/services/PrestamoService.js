import axios from 'axios';

const INGRESO_PRESTAMO_API_URL = "http://localhost:8085/ingreso/";

class PrestamoService {

    getPrestamos(){
        return axios.get(INGRESO_PRESTAMO_API_URL);
    }

    registrarPrestamo(prestamo){
        return axios.post(INGRESO_PRESTAMO_API_URL, prestamo);
    }
    
}

export default new PrestamoService()