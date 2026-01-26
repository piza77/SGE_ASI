<<<<<<< HEAD
<<<<<<< HEAD
const swaggerJsdoc = require('swagger-jsdoc');

/**
 * Configuración de Swagger/OpenAPI
 */
=======
/**
 * Swagger/OpenAPI configuration
 */
const swaggerJsdoc = require('swagger-jsdoc');

>>>>>>> origin/copilot/create-erp-module-structure
=======
const swaggerJsdoc = require('swagger-jsdoc');

>>>>>>> origin/copilot/complete-authentication-and-tenants
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
<<<<<<< HEAD
      title: 'SGE ASI API',
      version: '1.0.0',
<<<<<<< HEAD
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
=======
      description: 'API documentation for SGE ASI - Sistema de Gestión Empresarial',
      contact: {
        name: 'ASI Consultora',
        email: 'support@asi.com'
      },
      license: {
        name: 'Proprietary',
        url: 'https://asi.com/license'
=======
      title: 'SGE ASI ERP API',
      version: '1.0.0',
      description: 'API Documentation for SGE ASI Multitenant ERP System',
      contact: {
        name: 'API Support',
        email: 'support@sgeasi.com'
>>>>>>> origin/copilot/complete-authentication-and-tenants
      }
    },
    servers: [
      {
<<<<<<< HEAD
        url: 'http://localhost:3000',
        description: 'Development server'
      },
      {
        url: 'https://api.asi.com',
        description: 'Production server'
      }
>>>>>>> origin/copilot/create-erp-module-structure
=======
        url: 'http://localhost:4000',
        description: 'Development server'
      }
>>>>>>> origin/copilot/complete-authentication-and-tenants
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
<<<<<<< HEAD
          bearerFormat: 'JWT',
<<<<<<< HEAD
          description: 'Token JWT para autenticación',
        },
=======
          description: 'JWT Authorization header using the Bearer scheme'
        }
>>>>>>> origin/copilot/create-erp-module-structure
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
<<<<<<< HEAD
              example: false,
            },
            message: {
              type: 'string',
              example: 'Error message',
=======
              example: false
            },
            message: {
              type: 'string',
              example: 'Error message'
>>>>>>> origin/copilot/create-erp-module-structure
            },
            errors: {
              type: 'array',
              items: {
<<<<<<< HEAD
                type: 'object',
              },
            },
          },
=======
                type: 'object'
              }
            }
          }
>>>>>>> origin/copilot/create-erp-module-structure
        },
        Success: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
<<<<<<< HEAD
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
=======
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
=======
          bearerFormat: 'JWT'
>>>>>>> origin/copilot/complete-authentication-and-tenants
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
<<<<<<< HEAD
>>>>>>> origin/copilot/create-erp-module-structure
    ],
    tags: [
      {
        name: 'Auth',
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/copilot/create-erp-module-structure
=======
    ]
  },
  apis: ['./src/routes/*.js']
>>>>>>> origin/copilot/complete-authentication-and-tenants
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
