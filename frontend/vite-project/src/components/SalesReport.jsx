import React, { useState, useEffect } from 'react';
import '../styles/salesReport.css';

const SalesReport = () => {
    const [reportData, setReportData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/sales/report')
            .then(res => res.json())
            .then(data => {
                setReportData(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    const formatCurrency = (amount) => {
        const value = Number(amount);
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    };

    if (loading) return <div className="loading-container">Generando reporte...</div>;

    return (
        <div className="page-wrapper">
            <div className="content-card">
                <div className="card-header">
                    <h2>Reporte de Ventas por Cliente</h2>
                    <span className="subtitle">Total acumulado por comprador</span>
                </div>

                <div className="table-responsive">
                    <table className="modern-table">
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th style={{ textAlign: 'right' }}>Total Comprado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reportData.length > 0 ? (
                                reportData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="name-col">
                                            <span className="client-avatar">{row.name.charAt(0)}</span>
                                            {row.name}
                                        </td>
                                        <td className="amount-col total-highlight">
                                            {formatCurrency(row.total_sales)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="no-data">No hay datos de ventas disponibles</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalesReport;