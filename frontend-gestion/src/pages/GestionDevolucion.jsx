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
                <label htmlFor="proyectorId">ID del Proyector:</label>
                <input
                    type="text"
                    id="proyectorId"
                    value={proyectorId}
                    onChange={handleProyectorIdChange}
                />

                <label htmlFor="devolucionDate">Fecha de Devolución:</label>
                <input
                    type="date"
                    id="devolucionDate"
                    value={devolucionDate}
                    onChange={handleDevolucionDateChange}
                />

                <button type="submit">Registrar Devolución</button>
            </form>
        </div>
    );
};

export default RegistroDevolucionProyector;
