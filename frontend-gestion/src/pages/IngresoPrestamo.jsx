import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import PrestamoService from '../services/PrestamoService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//const IngresoPrestamo = (props) => {
 function IngresoPrestamo(props){

    const initialState = {
        
        id:'1',
        cantidadHoras:'',
        descripcionUso:'',
        fechaPrestamo:'',
        horaPrestamo:'',        
        marcaProyector:'',
        profesor:''

    }

    const [prestamo, setPrestamo] = useState(initialState);

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };

    const changeHorasHandler = event => {
        setPrestamo({ ...prestamo, cantidadHoras: event.target.value });
        alert(prestamo.cantidadHoras);
    };

    const changeUsoHandler = event => {
        setPrestamo({ ...prestamo, descripcionUso: event.target.value });
        alert(prestamo.descripcionUso);
    };

    const changefechaPrestamoHandler = event => {
        setPrestamo({ ...prestamo, fechaPrestamo: event.target.value });
        alert(prestamo.fechaPrestamo);
    };

    const changehoraPrestamoHandler = event => {
        setPrestamo({ ...prestamo, horaPrestamo: event.target.value });

    };

    const changeMarcaHandler = event => {
        setPrestamo({ ...prestamo, marcaProyector: event.target.value });
        alert(prestamo.marcaProyector);
    };

    const changeProfesorHandler = event => {
        setPrestamo({ ...prestamo, profesor: event.target.value });
        alert(prestamo.profesor);
    };
    
    
    const ingresarPrestamo = (event) => {
        Swal.fire({
            title: "¿Desea registrar un prestamo?",
            text: "No podra cambiarse en caso de equivocación",
            icon: "question",
            showDenyButton: true,
            confirmButtonText: "Confirmar",
            confirmButtonColor: "rgb(68, 194, 68)",
            denyButtonText: "Cancelar",
            denyButtonColor: "rgb(190, 54, 54)",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(prestamo);
                let nuevoPrestamo = {
                    //id: prestamo.id,
                    profesor: prestamo.profesor,
                    fechaPrestamo: prestamo.fechaPrestamo,
                    cantidadHoras: prestamo.cantidadHoras,
                    descripcionUso: prestamo.descripcionUso,                    
                    marcaProyector: prestamo.marcaProyector,
                    horaPrestamo: prestamo.horaPrestamo                                                        
                };
                console.log(nuevoPrestamo);
                PrestamoService.registrarPrestamo(nuevoPrestamo);
                Swal.fire({
                    title: "Enviado",
                    timer: 2000,
                    icon: "success",
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                })
                navigateHome();
            }

        });
    };

    return (
        <div align="center">
            <h1>Registrar Préstamo de Proyector</h1>
            <Form>
                    <Form.Group className="mb-3" controlId="profesor" value = {prestamo.profesor} onChange={changeProfesorHandler}>
                        <Form.Label className="agregar">Profesor:</Form.Label>
                        <Form.Control className="agregar" type="text" name="profesor" placeholder='Nombre profesor'/>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="fechaPrestamo" value = {prestamo.fechaPrestamo} onChange={changefechaPrestamoHandler}>
                        <Form.Label className="agregar">Fecha Prestamo:</Form.Label>
                        <Form.Control className="agregar" type="date" name="fechaPrestamo" placeholder='fecha prestamo'/>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="horaPrestamo" value = {prestamo.horaPrestamo} onChange={changeHorasHandler}>
                        <Form.Label className="agregar">Hora Prestamo:</Form.Label>
                        <Form.Control className="agregar" type="time" name="horaPrestamo"/>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="descripcionUso">
                        <Form.Label className="agregar"> Uso Proyector: </Form.Label>
                        <select className="agregar" name="descripcionUso" required value = {prestamo.descripcionUso} onChange={changeUsoHandler} placeholder='Descripcion uso'>
                            <option value="no seleccionado" disabled>Seleccione</option>
                            <option value="clase">clases</option>
                            <option value="examen">examen titulo</option>
                            <option value="reunion">reunion</option>
                        </select>
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="marcaProyector">
                        <Form.Label className="agregar"> Marca Proyector: </Form.Label>
                        <select className="agregar" name="marcaProyector" required value = {prestamo.marcaProyector} onChange={changeMarcaHandler}>
                            <option value="0" disabled>Marca</option>
                            <option value="1">Epson</option>
                            <option value="2">ViewSonic</option>                            
                        </select>
                    </Form.Group>
                    <br></br>                   
                    <Button className="boton" onClick={ingresarPrestamo}>Registrar Proveedor</Button>
                </Form>

        </div>
    );
};

export default IngresoPrestamo;
