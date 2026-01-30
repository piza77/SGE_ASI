const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
/**const errorHandler = require('./middleware/errorHandler');*/

/**
 * Crear instancia de Express
 */
const app = express();

/**
 * Middleware de seguridad
 */
app.use(helmet());

/**
 * Configuración de CORS
 */
const corsOptions = {
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

/**
 * Middleware para parsear JSON y URL-encoded
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Middleware de logging
 */
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

/**
 * Ruta de health check
 */
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API está funcionando correctamente',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
  });
});

/**
 * Documentación Swagger
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  explorer: true,
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'SGE ASI API Documentation',
}));

/**
 * Rutas de la API
 */
const routes = require('./routes');
app.use('/api', routes);

/**
 * Ruta raíz
 */
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Bienvenido a la API de SGE ASI',
    version: '1.0.0',
    documentation: '/api-docs',
  });
});

/**
 * Manejador de rutas no encontradas
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
    path: req.originalUrl,
  });
});

/**
 * Middleware de manejo de errores global
 */
app.use((err, req, res, _next) => {
  console.error('Error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
});

/**
 * Exportar la aplicación
 */
module.exports = app;