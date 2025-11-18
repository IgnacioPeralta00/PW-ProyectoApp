// components/CreateSale.jsx
import React, { useState } from 'react';
import '../styles/salesForm.css'; 

const CreateSale = () => {
    const [formData, setFormData] = useState({
        amount: '',
        id_customer: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Procesando...' });

        try {
            const response = await fetch('http://localhost:5000/api/sales', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Venta guardada con exito' });
                setFormData({ amount: '', id_customer: '' }); // Limpiar form
            } else {
                setStatus({ type: 'error', message: data.message || 'Error al guardar' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Error de conexión con el servidor' });
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content-card form-card">
                <div className="card-header">
                    <h2>Registrar Venta</h2>
                    <span className="subtitle">Ingresa los detalles de la transacción</span>
                </div>

                <form onSubmit={handleSubmit} className="sale-form">
                    <div className="form-group">
                        <label htmlFor="id_customer">ID del Cliente</label>
                        <input
                            type="number"
                            id="id_customer"
                            name="id_customer"
                            value={formData.id_customer}
                            onChange={handleChange}
                            placeholder="Ej: 1"
                            required
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="amount">Monto ($)</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            placeholder="0.00"
                            step="0.01"
                            required
                            className="form-input"
                        />
                    </div>

                    {status.message && (
                        <div className={`status-message ${status.type}`}>
                            {status.message}
                        </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={status.type === 'loading'}>
                        {status.type === 'loading' ? 'Guardando...' : 'Registrar Venta'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateSale;