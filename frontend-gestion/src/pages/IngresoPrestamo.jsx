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
                <label htmlFor="proyector">Proyector:</label>
                <input
                    type="text"
                    id="proyector"
                    value={proyector}
                    onChange={handleProyectorChange}
                />
                <button type="submit">Registrar Préstamo</button>
            </form>
        </div>
    );
};

export default IngresoPrestamo;
