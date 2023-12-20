// eslint-disable-next-line

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import IngresoPrestamo from "../pages/IngresoPrestamo";
import GestionDevolucion from "../pages/GestionDevolucion";
import Reportes from "../pages/ReporteDevolucionProyectores";

export function MyRoutes() {
  return (  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prestamo" element={<IngresoPrestamo />} />
        <Route path="/devolucion" element={<GestionDevolucion />} />
        <Route path="/reporte" element={<Reportes />} />
      </Routes>
    
  );
}
