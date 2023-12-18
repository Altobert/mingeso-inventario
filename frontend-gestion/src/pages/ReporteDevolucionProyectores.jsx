import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReporteDevolucionProyectores = () => {
    const [loanData, setLoanData] = useState([]);

    useEffect(() => {
        fetchLoanData();
    }, []);

    const fetchLoanData = async () => {
        try {
            const response = await axios.get('/api/loans');
            setLoanData(response.data);
        } catch (error) {
            console.error('Error fetching loan data:', error);
        }
    };

    return (
        <div>
            <h1>Reporte de Préstamos Realizados</h1>
            <table>
                <thead>
                    <tr>
                        <th>Proyector</th>
                        <th>Fecha de Préstamo</th>
                        <th>Fecha de Devolución</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {loanData.map((loan) => (
                        <tr key={loan.id}>
                            <td>{loan.proyector}</td>
                            <td>{loan.fechaPrestamo}</td>
                            <td>{loan.fechaDevolucion}</td>
                            <td>{loan.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReporteDevolucionProyectores;
