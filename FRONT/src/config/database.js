const mysql = require('mysql2/promise');
require('dotenv').config();

/**
 * Configuración de conexión con MySQL utilizando `mysql2/promise`
 */
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'piza77',
  database: process.env.DB_NAME || 'sge_asi',
  waitForConnections: true,
  connectionLimit: parseInt(process.env.DB_POOL_MAX) || 10,
  queueLimit: 0,
});

/**
 * Probar conexión a la base de datos
 */
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión a la base de datos exitosa');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Error en la conexión a la base de datos:', error.message);
    return false;
  }
};

module.exports = { pool, testConnection };