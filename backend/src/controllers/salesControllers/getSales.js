// controllers/salesController.js
import { pool } from '../../database/connection.js';

export const getSales = (request, response) => {
    pool.query('SELECT * FROM sales', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


export const getSalesByCustomer = async (req, res) => {
    try {
        const response = await pool.query(`
            SELECT s.id, s.amount, s.created_at, c.name 
            FROM sales s 
            JOIN customers c ON s.id_customer = c.id
            ORDER BY s.created_at DESC
        `);

        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener las ventas' });
    }
};

export const getSalesReport = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT c.name, SUM(s.amount) AS total_sales
            FROM sales s
            JOIN customers c ON s.id_customer = c.id
            GROUP BY c.name
            ORDER BY total_sales DESC
        `);

        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al generar el reporte' });
    }
};