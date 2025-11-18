import React, { useState, useEffect } from 'react';
import '../styles/customerList.css';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/customers')
            .then((response) => {
                if (!response.ok) throw new Error('Error al obtener los datos');
                return response.json();
            })
            .then((data) => {
                setCustomers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="loading-container">Cargando clientes...</div>;
    if (error) return <div className="error-container">Error: {error}</div>;

    return (
        <div className="page-wrapper">
            <div className="content-card">
                <div className="card-header">
                    <h2>Customers List</h2>
                </div>

                <div className="table-responsive">
                    <table className="modern-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Dirección</th>
                                <th>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.length > 0 ? (
                                customers.map((customer) => (
                                    <tr key={customer.id}>
                                        <td className="id-col">#{customer.id}</td>
                                        <td><span className="status-badge">{customer.code}</span></td>
                                        <td className="name-col">{customer.name}</td>
                                        <td className="text-muted">{customer.address}</td>
                                        <td className="phone-col">{customer.phone}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="no-data">No se encontraron registros</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomerList;