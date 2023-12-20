import axios from 'axios';

const INGRESO_DEVOLUCION_API_URL = "http://localhost:8085/gestion/";

class DevolucionService {

    getDevoluciones(){
        return axios.get(INGRESO_DEVOLUCION_API_URL);
    }

    registrarDevolucion(devolucion){
        return axios.post(INGRESO_DEVOLUCION_API_URL, devolucion);
    }
    
}

export default new DevolucionService()