import '../App.css';
import React, { useEffect, useState } from 'react';
import DevolucionService from '../services/DevolucionService';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

function RegistroDevolucionProyector(props){

    const initialState = {
        fecha: '',
        hora: '',
        estadoDevolucion: ''        
    }

    const [devolucion, setLoanData] = useState(initialState);

    /*useEffect(() => {
        fetchLoanData();
    }, []);*/

    /*const fetchLoanData = async () => {
        try {
            const response = await axios.get('/api/loans');
            setLoanData(response.data);
        } catch (error) {
            console.error('Error fetching loan data:', error);
        }
    };*/

    const ingresarDevolucion = (devolucion) => {
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
                    fecha: devolucion.fecha,
                    hora: devolucion.hora,
                    estadoDevolucion: devolucion.estadoDevolucion
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
                        //navigateHome();
                        //
                    }
                });
            }
        });
    }

    
    return (
        <div>
            <h1>Reporte de Préstamos Realizados</h1>
            <Form>
                <Form.Group className="mb-3" controlId="fecha" value={devolucion.fecha}>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" placeholder="Fecha" />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3" controlId="hora" value={devolucion.hora} >
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="time" placeholder="Hora" />
                </Form.Group>
                <br></br>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="estadoDevolucion">Estado Devolucion</Form.Label>
                    <Form.Select value={devolucion.estadoDevolucion} id="estadoDevolucion">
                        <option selected="true">Con daños</option>
                        <option>Buen estado</option>                        
                    </Form.Select>
                </Form.Group>
                <Button className="boton" onClick={ingresarDevolucion}>Registrar Prestamo</Button>
            </Form>
        </div>
    );

};

export default RegistroDevolucionProyector;
