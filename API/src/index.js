const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const config = require('./config/config');
const { testConnection } = require('./config/database');
const swaggerSpec = require('./config/swagger');

// Import routes
const authRoutes = require('./routes/authRoutes');
const tenantRoutes = require('./routes/tenantRoutes');

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors({
  origin: config.frontendUrl,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); // Logging

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/tenants', tenantRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

// Start server
const startServer = async () => {
  try {
    // Test database connection
    const dbConnected = await testConnection();
    
    if (!dbConnected) {
      console.error('Failed to connect to database. Server not started.');
      process.exit(1);
    }

    app.listen(config.port, () => {
      console.log(`
╔════════════════════════════════════════════════════════════════╗
║                   SGE ASI ERP API Server                       ║
╠════════════════════════════════════════════════════════════════╣
║  Environment: ${config.nodeEnv.padEnd(48)} ║
║  Port:        ${config.port.toString().padEnd(48)} ║
║  API Docs:    http://localhost:${config.port}/api-docs${' '.repeat(22)} ║
║  Health:      http://localhost:${config.port}/health${' '.repeat(25)} ║
╚════════════════════════════════════════════════════════════════╝
      `);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
