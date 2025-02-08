import { Pool } from 'pg';

// Create a new pool instance to manage PostgreSQL connections
const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Ensure this is set in .env.local
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false, // Optional for production
});

export const query = async (text, params) => {
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        return result;
    } finally {
        client.release();
    }
};