const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

/**
 * Create Express application
 */
const app = express();

/**
 * Security middleware
 */
app.use(helmet());

/**
 * CORS configuration
 */
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

/**
 * Body parsing middleware
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Logging middleware
 */
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

/**
 * API Documentation
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'SGE ASI API Documentation'
}));

/**
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

/**
 * Root endpoint
 */
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to SGE ASI API',
    version: '1.0.0',
    documentation: '/api-docs'
  });
});

/**
 * Module routes will be imported here
 * Example:
 * const authRoutes = require('./modules/auth/routes');
 * app.use('/api/auth', authRoutes);
 */

// TODO: Import and use module routes
// app.use('/api/auth', require('./modules/auth/routes'));
// app.use('/api/tenants', require('./modules/tenants/routes'));
// app.use('/api/cost-centers', require('./modules/cost-centers/routes'));
// app.use('/api/inventory', require('./modules/inventory/routes'));
// app.use('/api/documents', require('./modules/documents/routes'));
// app.use('/api/clients', require('./modules/clients/routes'));
// app.use('/api/employees', require('./modules/employees/routes'));
// app.use('/api/portfolio', require('./modules/portfolio/routes'));
// app.use('/api/treasury', require('./modules/treasury/routes'));
// app.use('/api/suppliers', require('./modules/suppliers/routes'));

/**
 * 404 handler
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl
  });
});

/**
 * Global error handler
 */
app.use((err, req, res, _next) => {
  console.error('Error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

module.exports = app;
