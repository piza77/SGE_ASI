const swaggerJsdoc = require('swagger-jsdoc');

/**
 * Configuración de Swagger/OpenAPI
 */
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SGE ASI API',
      version: '1.0.0',
      description: 'API del Sistema de Gestión Empresarial ASI - ERP Modular Multitenant',
      contact: {
        name: 'Equipo de Desarrollo',
        email: 'dev@asi.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Servidor de desarrollo',
      },
      {
        url: 'https://api.sge-asi.com/api',
        description: 'Servidor de producción',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Token JWT para autenticación',
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
              example: 'Error message',
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
            data: {
              type: 'object',
            },
            message: {
              type: 'string',
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
        description: 'Endpoints de autenticación y seguridad',
      },
      {
        name: 'Tenants',
        description: 'Gestión de empresas multitenant',
      },
      {
        name: 'CostCenters',
        description: 'Centros de costos y presupuestos',
      },
      {
        name: 'Inventory',
        description: 'Gestión de inventario',
      },
      {
        name: 'Documents',
        description: 'Gestión documental',
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
        description: 'Cartera y facturas',
      },
      {
        name: 'Treasury',
        description: 'Tesorería y flujo de caja',
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
