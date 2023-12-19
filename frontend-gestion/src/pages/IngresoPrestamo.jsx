import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import PrestamoService from '../services/PrestamoService';

const IngresoPrestamo = () => {

    const initialState = {
        profesor: '',
        fecha: '',
        hora: '',
        motivoArriendo: '',
        horasArriendo: '',
        proyector: '',
    }

    const [proyector, setProyector] = useState('');

    const handleProyectorChange = (event) => {
        setProyector(event.target.value);
    };

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate("/");
    };

    const ingresarPrestamo = (prestamo) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Se ingresará un nuevo préstamo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33', 
            confirmButtonText: 'Si, ingresar'
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
                    icon: 'success',
                    title: 'Prestamo ingresado correctamente',
                    showConfirmButton: false,
                    timer: 1500,
                    didOpen: () => {
                        setTimeout(() => {
                            navigateHome();
                        }, 1500);
                    }

                })
            }

            });
    };

    return (
        <div>
            <h1>Registrar Préstamo de Proyector</h1>
            <form onSubmit={ingresarPrestamo}>
                <label htmlFor="profesor">Nombre Profesor:</label>
                <input type="text" id="profesor" />

                <label htmlFor="fecha">Fecha:</label>   
                <input type="date" id="fecha" />
                <br />

                <label htmlFor="hora">Hora:</label>
                <input type="time" id="hora" />
                <br />

                <label htmlFor="motivoArriendo">Motivos Prestamo:</label>
                <select id="motivoArriendo" name="motivoArriendo">
                    <option value="clases" selected="true">Clases</option>
                    <option value="reunion">Reunion</option>
                    <option value="examen">Examen</option>    
                </select>
                <br />

                <label htmlFor="horasArriendo">Horas de arriendo:</label>
                <input type="number" id="horasArriendo" />
                <br />
                
                <label htmlFor="proyector">Elegir Proyector:</label>
                <select id="proyector" name="proyector">
                    <option value="epson" selected="true">Epson</option>
                    <option value="viewsonic">ViewSonic</option>
                    <option value="benq">BenQ</option>    
                </select>
                <br />

                <button type="submit">Registrar Préstamo</button>
            </form>
        </div>
    );
};

export default IngresoPrestamo;
