import { pool } from '../../database/connection.js'

export const getCustomers = (request, response) => {
    pool.query('SELECT * FROM customers', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


export const searchCustomerByCode = async (req, res) => {
    const { code } = req.query;

    if (!code) {
        return res.status(400).json({ message: 'Debes proporcionar un código para buscar' });
    }

    try {

        const result = await pool.query(
            'SELECT * FROM customers WHERE code = $1',
            [code]
        );

        // Devolvemos las filas encontradas
        res.status(200).json(result.rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno al buscar cliente' });
    }
};