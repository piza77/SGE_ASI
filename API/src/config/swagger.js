const swaggerJsdoc = require('swagger-jsdoc');

/**
 * Configuración de Swagger/OpenAPI
 */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SGE ASI ERP API',
      version: '1.0.0',
      description: 'API para el Sistema de Gestión Empresarial ASI - ERP Modular Multi-Tenant',
      contact: {
        name: 'Equipo de Soporte API',
        email: 'support@sgeasi.com',
      },
      license: {
        name: 'Proprietary',
        url: 'https://asi.com/license',
      },
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Servidor de desarrollo',
      },
      {
        url: 'https://api.sge-asi.com',
        description: 'Servidor de producción',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Token JWT para la autorización con el esquema Bearer',
        },
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'string',
              example: 'Mensaje de error',
            },
            errors: {
              type: 'array',
              items: {
                type: 'object',
              },
            },
          },
        },
        Success: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'Operación exitosa',
            },
            data: {
              type: 'object',
              example: { key: 'value' },
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    tags: [
      {
        name: 'Auth',
        description: 'Endpoints para autenticación y seguridad',
      },
      {
        name: 'Tenants',
        description: 'Gestión de empresas multitenant',
      },
      {
        name: 'Cost Centers',
        description: 'Gestión de centros de costos',
      },
      {
        name: 'Inventory',
        description: 'Gestión de inventario',
      },
      {
        name: 'Documents',
        description: 'Gestión de documentos',
      },
      {
        name: 'Clients',
        description: 'Gestión de clientes',
      },
      {
        name: 'Employees',
        description: 'Gestión de empleados',
      },
      {
        name: 'Portfolio',
        description: 'Gestión de cartera y facturación',
      },
      {
        name: 'Treasury',
        description: 'Gestión de tesorería y flujo de caja',
      },
      {
        name: 'Suppliers',
        description: 'Gestión de proveedores',
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/models/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;