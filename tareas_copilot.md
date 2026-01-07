# Tareas Detalladas de Desarrollo - Sistema ERP ASI

Este documento describe los pasos detallados para el desarrollo completo del sistema ERP modular multitenant.

## 📋 Índice

1. [Configuración Inicial](#configuración-inicial)
2. [Frontend (FRONT)](#frontend-front)
3. [Backend (API)](#backend-api)
4. [Módulos del Sistema](#módulos-del-sistema)
5. [Testing](#testing)
6. [Despliegue](#despliegue)

---

## 1. Configuración Inicial

### 1.1 Scaffold Inicial del Proyecto

- [x] Crear estructura de carpetas raíz (FRONT y API)
- [x] Crear README.md principal
- [x] Crear .gitignore
- [x] Crear docker-compose.yml
- [x] Crear este archivo de tareas

### 1.2 Configuración de Git

```bash
git init
git add .
git commit -m "Initial project structure"
```

---

## 2. Frontend (FRONT)

### 2.1 Scaffold Inicial con Vite + React

```bash
cd FRONT
npm create vite@latest . -- --template react
npm install
```

**Dependencias necesarias:**
```bash
npm install react-router-dom axios
npm install -D @types/react @types/react-dom
```

### 2.2 Configuración de TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configurar tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**Agregar directivas en src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2.3 Estructura de Carpetas del Frontend

```
FRONT/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── common/         # Botones, inputs, modals, etc.
│   │   ├── layout/         # Header, Sidebar, Footer
│   │   └── modules/        # Componentes específicos por módulo
│   ├── pages/              # Páginas principales
│   │   ├── auth/          # Login, Register
│   │   ├── dashboard/     # Dashboard principal
│   │   ├── tenants/       # Gestión de tenants
│   │   ├── costCenters/   # Centros de costos
│   │   ├── inventory/     # Inventario
│   │   ├── documents/     # Gestión documental
│   │   ├── clients/       # Clientes
│   │   ├── employees/     # Empleados
│   │   ├── portfolio/     # Cartera
│   │   ├── treasury/      # Tesorería
│   │   └── suppliers/     # Proveedores
│   ├── layouts/            # Layouts de la app
│   │   ├── MainLayout.jsx
│   │   ├── AuthLayout.jsx
│   │   └── DashboardLayout.jsx
│   ├── services/           # Servicios para llamadas API
│   │   ├── api.js         # Configuración axios
│   │   ├── authService.js
│   │   ├── tenantService.js
│   │   └── [otros servicios]
│   ├── hooks/              # Custom hooks
│   ├── utils/              # Utilidades y helpers
│   ├── context/            # Context API para estado global
│   ├── assets/             # Imágenes, iconos, etc.
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

### 2.4 Componentes Comunes a Crear

- [ ] Button component
- [ ] Input component
- [ ] Modal component
- [ ] Table component
- [ ] Pagination component
- [ ] Loading spinner
- [ ] Alert/Notification component
- [ ] Card component
- [ ] Form components

### 2.5 Configuración de Rutas

```javascript
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
// ... importar páginas
```

### 2.6 README.md del Frontend

Crear documentación específica explicando:
- Estructura de carpetas
- Componentes disponibles
- Cómo agregar nuevas páginas
- Convenciones de estilo
- Comandos disponibles

---

## 3. Backend (API)

### 3.1 Scaffold Inicial con Node.js + Express

```bash
cd API
npm init -y
npm install express mysql2 sequelize dotenv cors helmet
npm install -D nodemon
```

**Dependencias adicionales:**
```bash
npm install bcrypt jsonwebtoken express-validator
npm install swagger-jsdoc swagger-ui-express
npm install -D jest supertest
```

### 3.2 Estructura de Carpetas del Backend

```
API/
├── src/
│   ├── config/
│   │   ├── database.js        # Configuración Sequelize
│   │   ├── swagger.js         # Configuración Swagger
│   │   └── constants.js       # Constantes de la app
│   ├── middleware/
│   │   ├── auth.js           # Middleware de autenticación
│   │   ├── validateTenant.js # Middleware multitenant
│   │   ├── errorHandler.js   # Manejo de errores
│   │   └── validation.js     # Validaciones
│   ├── models/               # Modelos Sequelize
│   │   ├── index.js          # Inicialización de modelos
│   │   ├── User.js
│   │   ├── Tenant.js
│   │   ├── CostCenter.js
│   │   ├── Category.js
│   │   ├── Item.js
│   │   └── [otros modelos]
│   ├── routes/               # Rutas de la API
│   │   ├── index.js          # Router principal
│   │   ├── auth.routes.js
│   │   ├── tenant.routes.js
│   │   ├── costCenter.routes.js
│   │   └── [otras rutas]
│   ├── controllers/          # Controladores
│   │   ├── auth.controller.js
│   │   ├── tenant.controller.js
│   │   ├── costCenter.controller.js
│   │   └── [otros controladores]
│   ├── services/             # Lógica de negocio
│   │   ├── auth.service.js
│   │   ├── tenant.service.js
│   │   ├── costCenter.service.js
│   │   └── [otros servicios]
│   ├── utils/
│   │   ├── logger.js
│   │   └── helpers.js
│   └── app.js                # Configuración Express
├── tests/
│   ├── unit/
│   └── integration/
├── .env.example
├── .env
├── server.js                 # Punto de entrada
├── package.json
└── README.md
```

### 3.3 Configuración de Base de Datos MySQL

**Crear archivo .env.example:**
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=sge_asi
DB_USER=root
DB_PASSWORD=password
JWT_SECRET=your-secret-key-here
JWT_EXPIRE=24h
```

**Configuración de Sequelize (src/config/database.js):**
```javascript
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
  }
);

module.exports = sequelize;
```

### 3.4 Configuración de Express (src/app.js)

```javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

module.exports = app;
```

### 3.5 Configuración de Swagger/OpenAPI

**Crear src/config/swagger.js:**
```javascript
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'SGE ASI API',
      version: '1.0.0',
      description: 'API del Sistema de Gestión Empresarial ASI',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.js', './src/models/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
```

### 3.6 Package.json Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "migrate": "node src/migrations/run.js",
    "seed": "node src/seeders/run.js"
  }
}
```

---

## 4. Módulos del Sistema

### 4.1 Módulo de Autenticación y Seguridad

**Endpoints:**
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/logout` - Cierre de sesión
- `POST /api/auth/refresh` - Refresh token
- `GET /api/auth/me` - Obtener usuario actual
- `POST /api/auth/forgot-password` - Recuperar contraseña
- `POST /api/auth/reset-password` - Resetear contraseña

**Modelos:**
- User (id, email, password, role, tenantId, createdAt, updatedAt)
- Role (id, name, permissions, tenantId)
- Permission (id, resource, action)
- AuditLog (id, userId, action, resource, details, timestamp)

**Tareas:**
- [ ] Crear modelos de User, Role, Permission, AuditLog
- [ ] Implementar hash de contraseñas con bcrypt
- [ ] Implementar JWT authentication
- [ ] Crear middleware de autenticación
- [ ] Crear middleware de autorización por roles
- [ ] Implementar auditoría de acciones
- [ ] Documentar endpoints en Swagger
- [ ] Crear componentes de login/registro en frontend
- [ ] Implementar context de autenticación en frontend

### 4.2 Módulo de Tenants

**Endpoints:**
- `GET /api/tenants` - Listar tenants
- `GET /api/tenants/:id` - Obtener tenant
- `POST /api/tenants` - Crear tenant
- `PUT /api/tenants/:id` - Actualizar tenant
- `DELETE /api/tenants/:id` - Eliminar tenant
- `GET /api/tenants/:id/config` - Obtener configuración
- `PUT /api/tenants/:id/config` - Actualizar configuración

**Modelos:**
- Tenant (id, name, subdomain, logo, primaryColor, secondaryColor, createdAt)
- TenantConfig (id, tenantId, key, value)

**Tareas:**
- [ ] Crear modelo de Tenant y TenantConfig
- [ ] Implementar middleware de validación de tenant
- [ ] Crear sistema de aislamiento de datos por tenant
- [ ] Implementar endpoints CRUD
- [ ] Documentar en Swagger
- [ ] Crear páginas de gestión en frontend
- [ ] Implementar selector de tenant

### 4.3 Módulo de Centros de Costos

**Endpoints:**
- `GET /api/cost-centers` - Listar centros de costos
- `GET /api/cost-centers/:id` - Obtener centro de costos
- `POST /api/cost-centers` - Crear centro de costos
- `PUT /api/cost-centers/:id` - Actualizar centro de costos
- `DELETE /api/cost-centers/:id` - Eliminar centro de costos
- `GET /api/cost-centers/:id/categories` - Listar categorías
- `POST /api/cost-centers/:id/categories` - Crear categoría
- `GET /api/cost-centers/:id/categories/:categoryId/items` - Listar ítems
- `POST /api/cost-centers/:id/categories/:categoryId/items` - Crear ítem
- `PUT /api/cost-centers/:id/categories/:categoryId/items/:itemId` - Actualizar ítem
- `DELETE /api/cost-centers/:id/categories/:categoryId/items/:itemId` - Eliminar ítem

**Modelos:**
- CostCenter (id, ide, client, contractNumber, identificationNumber, tenantId, createdAt)
- Category (id, costCenterId, name, type, order)
  - Tipos por defecto: Recursos Humanos, Logística, Reembolsables, Contratos, Otros, Imprevistos
- Item (id, categoryId, implementationDate, startDate, estimatedEndDate, name, identification, value, observations)

**Tareas:**
- [ ] Crear modelos de CostCenter, Category, Item
- [ ] Implementar validación de IDE único
- [ ] Crear seed para categorías por defecto
- [ ] Implementar endpoints CRUD completos
- [ ] Agregar filtros y búsqueda
- [ ] Documentar en Swagger
- [ ] Crear páginas de gestión en frontend
- [ ] Implementar formularios con validación
- [ ] Crear vista de categorías e ítems

### 4.4 Módulo de Inventarios

**Endpoints:**
- `GET /api/inventory/items` - Listar productos
- `GET /api/inventory/items/:id` - Obtener producto
- `POST /api/inventory/items` - Crear producto
- `PUT /api/inventory/items/:id` - Actualizar producto
- `DELETE /api/inventory/items/:id` - Eliminar producto
- `GET /api/inventory/movements` - Listar movimientos
- `POST /api/inventory/movements` - Registrar movimiento
- `GET /api/inventory/alerts` - Obtener alertas de stock

**Modelos:**
- InventoryItem (id, sku, name, description, category, currentStock, minStock, maxStock, unitPrice, tenantId)
- InventoryMovement (id, itemId, type, quantity, reason, userId, date)
- StockAlert (id, itemId, alertType, threshold, active)

**Tareas:**
- [ ] Crear modelos
- [ ] Implementar sistema de alertas automáticas
- [ ] Crear endpoints CRUD
- [ ] Documentar en Swagger
- [ ] Crear interfaz de catálogo
- [ ] Implementar registro de movimientos

### 4.5 Módulo de Gestión Documental

**Endpoints:**
- `GET /api/documents` - Listar documentos
- `GET /api/documents/:id` - Obtener documento
- `POST /api/documents` - Subir documento
- `PUT /api/documents/:id` - Actualizar metadatos
- `DELETE /api/documents/:id` - Eliminar documento
- `GET /api/documents/:id/versions` - Listar versiones
- `GET /api/documents/search` - Búsqueda avanzada

**Modelos:**
- Document (id, name, description, category, tags, fileUrl, version, tenantId, createdBy, createdAt)
- DocumentVersion (id, documentId, version, fileUrl, uploadedBy, uploadedAt)
- DocumentMetadata (id, documentId, key, value)

**Tareas:**
- [ ] Crear modelos
- [ ] Implementar sistema de versiones
- [ ] Configurar almacenamiento de archivos
- [ ] Crear endpoints CRUD
- [ ] Implementar búsqueda por metadatos
- [ ] Documentar en Swagger
- [ ] Crear interfaz de gestión

### 4.6 Módulo de Clientes

**Endpoints:**
- `GET /api/clients` - Listar clientes
- `GET /api/clients/:id` - Obtener cliente
- `POST /api/clients` - Crear cliente
- `PUT /api/clients/:id` - Actualizar cliente
- `DELETE /api/clients/:id` - Eliminar cliente
- `GET /api/clients/:id/contracts` - Listar contratos
- `GET /api/clients/:id/projects` - Listar proyectos

**Modelos:**
- Client (id, name, nit, email, phone, address, contactPerson, tenantId, createdAt)
- Contract (id, clientId, number, startDate, endDate, value, status)
- Project (id, clientId, contractId, name, description, status, startDate, endDate)

**Tareas:**
- [ ] Crear modelos
- [ ] Implementar endpoints CRUD
- [ ] Documentar en Swagger
- [ ] Crear interfaz de gestión

### 4.7 Módulo de Empleados

**Endpoints:**
- `GET /api/employees` - Listar empleados
- `GET /api/employees/:id` - Obtener empleado
- `POST /api/employees` - Crear empleado
- `PUT /api/employees/:id` - Actualizar empleado
- `DELETE /api/employees/:id` - Eliminar empleado
- `GET /api/employees/:id/timesheets` - Obtener timesheets
- `POST /api/employees/:id/timesheets` - Crear timesheet
- `GET /api/employees/:id/training` - Obtener capacitaciones

**Modelos:**
- Employee (id, userId, firstName, lastName, identification, position, department, salary, hireDate, tenantId)
- Timesheet (id, employeeId, date, hours, projectId, description)
- Training (id, employeeId, courseName, startDate, endDate, status)

**Tareas:**
- [ ] Crear modelos
- [ ] Implementar endpoints CRUD
- [ ] Documentar en Swagger
- [ ] Crear interfaz de gestión

### 4.8 Módulo de Cartera

**Endpoints:**
- `GET /api/portfolio/invoices` - Listar facturas
- `GET /api/portfolio/invoices/:id` - Obtener factura
- `POST /api/portfolio/invoices` - Crear factura
- `PUT /api/portfolio/invoices/:id` - Actualizar factura
- `GET /api/portfolio/payments` - Listar pagos
- `POST /api/portfolio/payments` - Registrar pago
- `GET /api/portfolio/aging-report` - Reporte de antigüedad

**Modelos:**
- Invoice (id, clientId, number, date, dueDate, amount, status, tenantId)
- Payment (id, invoiceId, amount, date, method, reference)
- AgingBucket (id, tenantId, daysFrom, daysTo, amount)

**Tareas:**
- [ ] Crear modelos
- [ ] Implementar cálculo de aging
- [ ] Crear endpoints CRUD
- [ ] Documentar en Swagger
- [ ] Crear interfaz de gestión

### 4.9 Módulo de Tesorería

**Endpoints:**
- `GET /api/treasury/payment-orders` - Listar órdenes de pago
- `POST /api/treasury/payment-orders` - Crear orden de pago
- `PUT /api/treasury/payment-orders/:id` - Actualizar orden
- `GET /api/treasury/reconciliation` - Conciliación bancaria
- `POST /api/treasury/reconciliation` - Registrar conciliación
- `GET /api/treasury/cash-flow` - Flujo de caja

**Modelos:**
- PaymentOrder (id, supplierId, amount, dueDate, status, approvedBy, tenantId)
- BankReconciliation (id, bankAccount, date, balance, reconciledBy)
- CashFlow (id, date, type, amount, description, tenantId)

**Tareas:**
- [ ] Crear modelos
- [ ] Implementar flujo de aprobaciones
- [ ] Crear endpoints CRUD
- [ ] Documentar en Swagger
- [ ] Crear interfaz de gestión

### 4.10 Módulo de Proveedores

**Endpoints:**
- `GET /api/suppliers` - Listar proveedores
- `GET /api/suppliers/:id` - Obtener proveedor
- `POST /api/suppliers` - Crear proveedor
- `PUT /api/suppliers/:id` - Actualizar proveedor
- `DELETE /api/suppliers/:id` - Eliminar proveedor
- `GET /api/suppliers/:id/purchase-orders` - Listar órdenes de compra
- `POST /api/suppliers/:id/purchase-orders` - Crear orden
- `GET /api/suppliers/:id/receptions` - Listar recepciones

**Modelos:**
- Supplier (id, name, nit, email, phone, address, contactPerson, tenantId)
- PurchaseOrder (id, supplierId, number, date, status, total)
- Reception (id, purchaseOrderId, date, receivedBy, notes)

**Tareas:**
- [ ] Crear modelos
- [ ] Implementar endpoints CRUD
- [ ] Documentar en Swagger
- [ ] Crear interfaz de gestión

---

## 5. Testing

### 5.1 Backend Tests

**Configurar Jest:**
```json
{
  "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": ["/node_modules/"]
  }
}
```

**Tests a crear:**
- [ ] Tests unitarios de servicios
- [ ] Tests de integración de endpoints
- [ ] Tests de middleware
- [ ] Tests de modelos
- [ ] Tests de utilidades

### 5.2 Frontend Tests

```bash
npm install -D @testing-library/react @testing-library/jest-dom vitest
```

**Tests a crear:**
- [ ] Tests de componentes
- [ ] Tests de hooks
- [ ] Tests de servicios
- [ ] Tests de utilidades

---

## 6. Despliegue

### 6.1 Docker Configuration

**Crear Dockerfile para API:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

**Crear Dockerfile para FRONT:**
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 6.2 Docker Compose

- [x] Configurar servicios (frontend, backend, mysql)
- [x] Configurar volúmenes para persistencia
- [x] Configurar networks
- [x] Configurar variables de entorno

### 6.3 Documentación Final

- [ ] Verificar todos los README.md
- [ ] Documentar endpoints en Swagger
- [ ] Crear guía de despliegue
- [ ] Crear guía de contribución
- [ ] Documentar arquitectura

---

## 📝 Notas Importantes

1. **Multitenant**: Todos los modelos deben incluir `tenantId` para aislamiento de datos
2. **Seguridad**: Siempre validar permisos y tenant en middleware
3. **Auditoría**: Registrar acciones críticas en AuditLog
4. **Documentación**: Cada endpoint debe estar documentado con Swagger
5. **Testing**: Mantener cobertura de tests > 80%
6. **Comentarios**: Código en inglés, comentarios en español
7. **Convenciones**: Seguir convenciones de ESLint y Prettier

---

## 🎯 Próximos Pasos

1. Completar scaffold de FRONT y API
2. Implementar módulo de autenticación (base para todo)
3. Implementar módulo de tenants
4. Desarrollar módulos restantes uno por uno
5. Agregar tests conforme se desarrolla
6. Documentar endpoints en Swagger
7. Preparar despliegue con Docker

---

**Fecha de creación**: 2026-01-07
**Última actualización**: 2026-01-07
