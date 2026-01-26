<<<<<<< HEAD
const { Sequelize } = require('sequelize');
require('dotenv').config();

/**
<<<<<<< HEAD
 * Configuración de Sequelize para conexión a MySQL
 */
const sequelize = new Sequelize(
  process.env.DB_NAME || 'sge_asi',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
=======
 * Database configuration and Sequelize instance
 */
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3307,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: parseInt(process.env.DB_POOL_MAX) || 10,
      min: parseInt(process.env.DB_POOL_MIN) || 0,
      acquire: 30000,
      idle: 10000
>>>>>>> origin/copilot/create-erp-module-structure
    },
    define: {
      timestamps: true,
      underscored: true,
<<<<<<< HEAD
    },
=======
      freezeTableName: true
    }
>>>>>>> origin/copilot/create-erp-module-structure
  }
);

/**
<<<<<<< HEAD
 * Función para probar la conexión a la base de datos
=======
 * Test database connection
>>>>>>> origin/copilot/create-erp-module-structure
 */
const testConnection = async () => {
  try {
    await sequelize.authenticate();
<<<<<<< HEAD
    console.log('✅ Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
    process.exit(1);
=======
    console.log('✅ Database connection established successfully');
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to database:', error.message);
    return false;
>>>>>>> origin/copilot/create-erp-module-structure
  }
};

/**
<<<<<<< HEAD
 * Función para sincronizar modelos con la base de datos
 */
const syncDatabase = async (options = {}) => {
  try {
    await sequelize.sync(options);
    console.log('✅ Modelos sincronizados con la base de datos');
  } catch (error) {
    console.error('❌ Error al sincronizar modelos:', error);
=======
 * Sync database models
 */
const syncDatabase = async (force = false) => {
  try {
    await sequelize.sync({ force });
    console.log('✅ Database synchronized successfully');
  } catch (error) {
    console.error('❌ Error synchronizing database:', error.message);
>>>>>>> origin/copilot/create-erp-module-structure
    throw error;
  }
};

module.exports = {
  sequelize,
  testConnection,
<<<<<<< HEAD
  syncDatabase,
=======
  syncDatabase
>>>>>>> origin/copilot/create-erp-module-structure
};
=======
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sge_asi_erp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connection successful');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
};

module.exports = { pool, testConnection };
>>>>>>> origin/copilot/complete-authentication-and-tenants
