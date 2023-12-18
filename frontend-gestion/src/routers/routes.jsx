// eslint-disable-next-line

import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import {Aprobadas} from "../pages/AAprobadas";
import {HistorialNotas} from  "../pages/AHistorialNotas";
import {Inscritas} from "../pages/AInscritas";
import {PorInscribir} from "../pages/APorInscribir";

export function MyRoutes() {
  return (  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aprobadas" element={<Aprobadas />} />
        <Route path="/historialnotas" element={<HistorialNotas />} />
        <Route path="/inscritas" element={<Inscritas />} />
        <Route path="/porinscribir" element={<PorInscribir />} />
        <Route path="/reportes" element={<PorInscribir />} />
      </Routes>
    
  );
}
