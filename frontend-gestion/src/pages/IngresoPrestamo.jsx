import React, { useState } from 'react';

const IngresoPrestamo = () => {
    const [proyector, setProyector] = useState('');

    const handleProyectorChange = (event) => {
        setProyector(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the logic to register the loan for the projector
        // You can use the 'proyector' state variable to access the selected projector
    };

    return (
        <div>
            <h1>Registrar Préstamo de Proyector</h1>
            <form onSubmit={handleSubmit}>
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
