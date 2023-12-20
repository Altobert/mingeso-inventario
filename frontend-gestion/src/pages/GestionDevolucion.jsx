import '../App.css';
import React, { useEffect, useState } from 'react';
import DevolucionService from '../services/DevolucionService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function RegistroDevolucionProyector(props){

    const initialState = {
        
        id:'0',
        estadoDevolucion:'',
        fechaDevolucion:'',
        horaDevolucion:'',
        contadorDanos:'',
        proyector:''
    }

    const [devolucion, setDevolucion] = useState(initialState);


    const changeFechaPrestamoHandler = event => {
        setDevolucion({ ...devolucion, fechaDevolucion: event.target.value });        
    };

    const changeHoraPrestamoHandler = event => {
        setDevolucion({ ...devolucion, horaDevolucion: event.target.value });
    };

    const changeEstadoDevolucionHandler = event => {
        setDevolucion({ ...devolucion, estadoDevolucion: event.target.value });
    };

    const changeContadorDanosHandler = event => {
        setDevolucion({ ...devolucion, contadorDanos: event.target.value });
    };

    const changeProyectorHandler = event => {
        setDevolucion({ ...devolucion, proyector: event.target.value });
    };

    

    const ingresarDevolucion = (event) => {
        Swal.fire({
            title: "¿Desea registrar una devolucion?",
            text: "No podra cambiarse en caso de equivocación",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(devolucion);
                let nuevaDevolucion = {
                    id: devolucion.id,
                    fechaPrestamo: devolucion.fechaDevolucion,
                    horaPrestamo: devolucion.horaDevolucion,
                    estadoDevolucion: devolucion.estadoDevolucion,
                    contadorDanos: devolucion.contadorDanos,
                    proyector:devolucion.proyector
                };
                console.log(nuevaDevolucion);
                DevolucionService.registrarDevolucion(nuevaDevolucion);
                Swal.fire({
                    title: "Enviado",
                    text: "Devolucion registrada",
                    icon: "success",
                    confirmButtonColor: "rgb(68, 194, 68)",
                }).then((result) => {
                    if (result.isConfirmed) {                        
                        Swal.fire({
                            title: "¿Desea registrar otra devolucion?",                            
                            icon: "success",
                            showDenyButton: true,
                            confirmButtonText: "Confirmar",
                            confirmButtonColor: "rgb(68, 194, 68)",
                            denyButtonText: "Cancelar",
                            denyButtonColor: "rgb(190, 54, 54)",
                        });
                    }
                });
            }
        });
    }

    
    return (
        <div align="center">
            <h1>Reporte de Devolución</h1>
            <Form>
                <Form.Group className="mb-3" controlId="fechaDevolucion" value={devolucion.fechaDevolucion} onChange={changeFechaPrestamoHandler}>
                    <Form.Label>Fecha Devolucion</Form.Label>
                    <Form.Control type="date" placeholder="Fecha" />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="horaDevolucion" value={devolucion.horaDevolucion} onChange={changeHoraPrestamoHandler} >
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" placeholder="Hora" />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="estadoDevolucion">Estado Devolucion</Form.Label>
                    <Form.Select value={devolucion.estadoDevolucion} id="estadoDevolucion" onChange={changeEstadoDevolucionHandler}>
                        <option value="0">Buen estado</option>                        
                        <option value="1" selected="true">Con daños</option>                        
                    </Form.Select>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="contadorDanos" value = {devolucion.contadorDanos} onChange={changeContadorDanosHandler}>
                        <Form.Label className="agregar">Cantidad Daños:</Form.Label>
                        <Form.Control className="agregar" type="text" name="contadorDanos" placeholder='Contados Daños'/>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Proyector">Epson</Form.Label>
                    <Form.Select value={devolucion.proyector} id="proyector" onChange={changeProyectorHandler}>
                        <option value="1"selected="true">Epson</option>
                        <option value="2">ViewSonic</option>                        
                    </Form.Select>
                </Form.Group>
                
                <Button className="boton" onClick={ingresarDevolucion}>Registrar Prestamo</Button>
            </Form>
        </div>
    );

};

export default RegistroDevolucionProyector;
