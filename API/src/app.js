const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const errorHandler = require('./middleware/errorHandler');

/**
 * Crear instancia de Express
 */
const app = express();

/**
 * Middleware de seguridad
 */
app.use(helmet());

/**
 * Middleware CORS
 */
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
}));

/**
 * Middleware para parsear JSON y URL-encoded
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Ruta de health check
 */
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API está funcionando correctamente',
    timestamp: new Date().toISOString(),
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
 * Ruta 404
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada',
  });
});

/**
 * Middleware de manejo de errores (debe ir al final)
 */
app.use(errorHandler);

module.exports = app;
