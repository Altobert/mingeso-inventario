import React, { useState } from 'react';

const RegistroDevolucionProyector = () => {
    const [proyectorId, setProyectorId] = useState('');
    const [devolucionDate, setDevolucionDate] = useState('');

    const handleProyectorIdChange = (e) => {
        setProyectorId(e.target.value);
    };

    const handleDevolucionDateChange = (e) => {
        setDevolucionDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform the registration logic here
        // You can use the proyectorId and devolucionDate values to register the return

        // Reset the form
        setProyectorId('');
        setDevolucionDate('');
    };

    return (
        <div>
            <h2>Registrar Devolución de Proyector</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="fecha">Fecha devolucion:</label>
                <input
                    type="date"
                    id="fecha"
                    value={devolucionDate}
                    onChange={handleDevolucionDateChange}   
                />
                <br />

                <label htmlFor="hora">Hora devolucion:</label>
                <input
                    type="time"
                    id="hora"
                    value={devolucionDate}
                    onChange={handleDevolucionDateChange}
                />
                <br />

                <label htmlFor="estadoDevolucion">Estado Devolucion:</label>
                <select id="estadoDevolucion" name="estadoDevolucion">
                    <option value="bueno" selected="true">Bueno</option>
                    <option value="malo">Malo</option>
                    <option value="regular">Regular</option>
                </select>
                <br />

                <label htmlFor="proyectorId">ID del Proyector:</label>
                <input
                    type="text"
                    id="proyectorId"
                    value={proyectorId}
                    onChange={handleProyectorIdChange}
                />
                <br />

                <label htmlFor="devolucionDate">Fecha de Devolución:</label>
                <input
                    type="date"
                    id="devolucionDate"
                    value={devolucionDate}
                    onChange={handleDevolucionDateChange}
                />
                <br />
                
                <button type="submit">Registrar Devolución</button>
            </form>
        </div>
    );
};

export default RegistroDevolucionProyector;
