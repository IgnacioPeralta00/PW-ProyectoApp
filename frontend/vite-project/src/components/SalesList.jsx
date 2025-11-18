import React, { useState, useEffect } from 'react';
import '../styles/salesList.css';

const SalesList = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/sales-customers')
            .then(res => res.json())
            .then(data => {
                setSales(data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);
    
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    if (loading) return <div className="loading-container">Cargando ventas...</div>;

    return (
        <div className="page-wrapper">
            <div className="content-card">
                <div className="card-header">
                    <h2>Registro de Ventas</h2>
                    <span className="subtitle">Historial de transacciones</span>
                </div>

                <div className="table-responsive">
                    <table className="modern-table">
                        <thead>
                            <tr>
                                <th>ID Venta</th>
                                <th>Cliente</th>
                                <th>Fecha</th>
                                <th>Monto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sales.length > 0 ? (
                                sales.map((sale) => (
                                    <tr key={sale.id}>
                                        <td className="id-col">#{sale.id}</td>
                                        <td className="name-col">{sale.name}</td>
                                        <td className="text-muted">{formatDate(sale.created_at)}</td>
                                        <td className="amount-col">{formatCurrency(sale.amount)}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="no-data">No hay ventas registradas</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SalesList;