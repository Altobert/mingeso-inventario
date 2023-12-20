import axios from 'axios';

const INGRESO_REPORTE_API_URL = "http://localhost:8085/reportes/";

class ReporteService {

    getReporte(){
        return axios.get(INGRESO_REPORTE_API_URL);
    }

    registrarReporte(reporte){
        return axios.post(INGRESO_REPORTE_API_URL, reporte);
    }
    
}

export default new ReporteService()