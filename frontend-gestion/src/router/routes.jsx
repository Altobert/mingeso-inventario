// eslint-disable-next-line

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import {IngresoPrestamo} from "../pages/IngresoPrestamo";
import {GestionDevolucion} from  "../pages/GestionDevolucion";
import {ReporteDevolucionProyectores} from "../pages/ReporteDevolucionProyectores";


export function MyRoutes() {
  return (  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingresoprestamo" element={<IngresoPrestamo />} />
        <Route path="/gestiondevolucion" element={<GestionDevolucion />} />
        <Route path="/reportedevolucion" element={<ReporteDevolucionProyectores />} />                
      </Routes>
    
  );
}