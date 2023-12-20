import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import PrestamoService from '../services/PrestamoService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//const IngresoPrestamo = (props) => {
 function IngresoPrestamo(props){

    const initialState = {
        fecha: '',
        hora: '',
        profesor: '',
        motivoArriendo: '',
        horasArriendo: '',
        proyector: '',
    }

    const [prestamo, setPrestamo] = useState(initialState);

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };

    /*const changeFechaHandler = event => {
        setPrestamo({ ...prestamo, fecha: event.target.value });
    };

    const changeHorasArriendoHandler = event => {
        setPrestamo({ ...prestamo, horasArriendo: event.target.value });
    };*/

    
    const ingresarPrestamo = (prestamo) => {
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
                    profesor: prestamo.profesor,
                    fecha: prestamo.fecha,
                    hora: prestamo.hora,
                    motivoArriendo: prestamo.motivoArriendo,
                    horasArriendo: prestamo.horasArriendo,
                    proyector: prestamo.proyector,
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

                <Form.Group className="mb-3" controlId="profesor" value={prestamo.profesor}>
                    <Form.Label>Profesor</Form.Label>
                    <Form.Control type="text" placeholder="Profesor" />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="fecha" value={prestamo.fecha}>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" placeholder="Fecha" />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="hora" value={prestamo.hora} >
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" placeholder="Hora" />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="usoProyector">Uso proyector</Form.Label>
                    <Form.Select id="usoProyector">
                        <option selected="true">Clase</option>
                        <option value={prestamo.motivoArriendo}>Examen</option>
                        <option value={prestamo.motivoArriendo}>Reunion</option>
                    </Form.Select>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="marcaProyector">Marca Proyector</Form.Label>
                    <Form.Select id="marcaProyector">
                        <option value={prestamo.proyector} selected="true">Viewsonic</option>
                        <option value={prestamo.proyector}>Epson</option>                        
                    </Form.Select>
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <br></br>
                    <Form.Text className="text-muted">
                        No comparta su email con nadie.
                    </Form.Text>
                </Form.Group>
                <br></br>
                <Button className="boton" onClick={ingresarPrestamo}>Registrar Prestamo</Button>
            </Form>

        </div>
    );
};

export default IngresoPrestamo;
