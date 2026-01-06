/**
 * Swagger/OpenAPI configuration
 */
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SGE ASI API',
      version: '1.0.0',
      description: 'API documentation for SGE ASI - Sistema de Gestión Empresarial',
      contact: {
        name: 'ASI Consultora',
        email: 'support@asi.com'
      },
      license: {
        name: 'Proprietary',
        url: 'https://asi.com/license'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      },
      {
        url: 'https://api.asi.com',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT Authorization header using the Bearer scheme'
        }
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            message: {
              type: 'string',
              example: 'Error message'
            },
            errors: {
              type: 'array',
              items: {
                type: 'object'
              }
            }
          }
        },
        Success: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            message: {
              type: 'string',
              example: 'Operation successful'
            },
            data: {
              type: 'object'
            }
          }
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ],
    tags: [
      {
        name: 'Auth',
        description: 'Authentication and security endpoints'
      },
      {
        name: 'Tenants',
        description: 'Multi-tenant management'
      },
      {
        name: 'Cost Centers',
        description: 'Cost center management with categories and items'
      },
      {
        name: 'Inventory',
        description: 'Inventory management'
      },
      {
        name: 'Documents',
        description: 'Document management system'
      },
      {
        name: 'Clients',
        description: 'Client management'
      },
      {
        name: 'Employees',
        description: 'Employee management'
      },
      {
        name: 'Portfolio',
        description: 'Portfolio and invoicing management'
      },
      {
        name: 'Treasury',
        description: 'Treasury and cash flow management'
      },
      {
        name: 'Suppliers',
        description: 'Supplier management'
      }
    ]
  },
  apis: [
    './src/modules/**/routes/*.js',
    './src/modules/**/*.routes.js',
    './src/modules/**/routes.js'
  ]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
