<<<<<<< HEAD
# Tareas Detalladas de Desarrollo - Sistema ERP ASI

Este documento describe los pasos detallados para el desarrollo completo del sistema ERP modular multitenant.

## 📋 Índice

1. [Configuración Inicial](#configuración-inicial)
2. [Frontend (FRONT)](#frontend-front)
3. [Backend (API)](#backend-api)
4. [Módulos del Sistema](#módulos-del-sistema)
5. [Testing](#testing)
6. [Despliegue](#despliegue)
=======
# Tareas de Desarrollo - SGE ASI

Este documento detalla los pasos para el desarrollo completo del sistema ERP ASI.

## 📋 Índice

1. [Configuración Inicial](#1-configuración-inicial)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Frontend (FRONT)](#3-frontend-front)
4. [Backend (API)](#4-backend-api)
5. [Base de Datos](#5-base-de-datos)
6. [Módulos del Sistema](#6-módulos-del-sistema)
7. [Testing](#7-testing)
8. [Documentación](#8-documentación)
9. [Despliegue](#9-despliegue)
>>>>>>> origin/copilot/create-erp-module-structure

---

## 1. Configuración Inicial

<<<<<<< HEAD
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
=======
### 1.1 Requisitos Previos
- [ ] Node.js 18+ instalado
- [ ] MySQL 8.0+ instalado (o Docker)
- [ ] Git configurado
- [ ] Editor de código (VS Code recomendado)
- [ ] MySQL Workbench (opcional, para modelado)

### 1.2 Clonar y Configurar Repositorio
```bash
git clone <repository-url>
cd SGE_ASI
```

### 1.3 Configurar Variables de Entorno
- [ ] Crear `API/.env` basado en `API/.env.example`
- [ ] Crear `FRONT/.env` basado en `FRONT/.env.example`

---

## 2. Estructura del Proyecto

### 2.1 Crear Estructura de Carpetas

```
SGE_ASI/
├── API/                          # Backend Node.js + Express
│   ├── src/
│   │   ├── config/              # Configuraciones
│   │   ├── modules/             # Módulos del sistema
│   │   │   ├── auth/           # Autenticación y seguridad
│   │   │   ├── tenants/        # Gestión de tenants
│   │   │   ├── cost-centers/   # Centros de costos
│   │   │   ├── inventory/      # Inventarios
│   │   │   ├── documents/      # Gestión documental
│   │   │   ├── clients/        # Clientes
│   │   │   ├── employees/      # Empleados
│   │   │   ├── portfolio/      # Cartera
│   │   │   ├── treasury/       # Tesorería
│   │   │   └── suppliers/      # Proveedores
│   │   ├── middleware/          # Middlewares globales
│   │   ├── utils/              # Utilidades
│   │   └── app.js              # Aplicación Express
│   ├── database/               # Scripts SQL
│   ├── tests/                  # Tests
│   ├── docs/                   # Documentación
│   ├── package.json
│   ├── Dockerfile
│   └── README.md
│
├── FRONT/                       # Frontend React + Vite
│   ├── src/
│   │   ├── assets/            # Imágenes, fonts, etc.
│   │   ├── components/        # Componentes reutilizables
│   │   │   ├── common/       # Componentes comunes
│   │   │   └── layout/       # Layout components
│   │   ├── modules/           # Módulos por funcionalidad
│   │   │   ├── auth/
│   │   │   ├── tenants/
│   │   │   ├── cost-centers/
│   │   │   ├── inventory/
│   │   │   ├── documents/
│   │   │   ├── clients/
│   │   │   ├── employees/
│   │   │   ├── portfolio/
│   │   │   ├── treasury/
│   │   │   └── suppliers/
│   │   ├── services/          # Servicios API
│   │   ├── store/             # Estado global (Zustand)
│   │   ├── hooks/             # Custom hooks
│   │   ├── utils/             # Utilidades
│   │   ├── router/            # Configuración de rutas
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── Dockerfile
│   └── README.md
│
├── docker-compose.yml
├── .gitignore
├── README.md
└── tareas_copilot.md
>>>>>>> origin/copilot/create-erp-module-structure
```

---

<<<<<<< HEAD
## 2. Frontend (FRONT)

### 2.1 Scaffold Inicial con Vite + React

=======
## 3. Frontend (FRONT)

### 3.1 Scaffold Inicial de React + Vite
>>>>>>> origin/copilot/create-erp-module-structure
```bash
cd FRONT
npm create vite@latest . -- --template react
npm install
```

<<<<<<< HEAD
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
=======
### 3.2 Instalar Dependencias
```bash
npm install -D tailwindcss postcss autoprefixer
npm install react-router-dom axios zustand
npm install @headlessui/react @heroicons/react
npm install react-hook-form yup
npm install date-fns
```

### 3.3 Configurar TailwindCSS
- [ ] Ejecutar `npx tailwindcss init -p`
- [ ] Configurar `tailwind.config.js`
- [ ] Añadir directivas Tailwind en `src/index.css`

### 3.4 Estructura de Componentes

#### 3.4.1 Componentes Comunes
- [ ] **Button** - Botón reutilizable con variantes
- [ ] **Input** - Input con validación
- [ ] **Select** - Dropdown personalizado
- [ ] **Modal** - Modal genérico
- [ ] **Table** - Tabla con paginación y ordenamiento
- [ ] **Card** - Tarjeta de contenido
- [ ] **Loader** - Indicador de carga
- [ ] **Alert** - Mensajes de alerta/error/éxito
- [ ] **Breadcrumb** - Navegación de ruta

#### 3.4.2 Componentes de Layout
- [ ] **Sidebar** - Menú lateral
- [ ] **Header** - Encabezado con perfil de usuario
- [ ] **Footer** - Pie de página
- [ ] **DashboardLayout** - Layout principal
- [ ] **AuthLayout** - Layout para login/registro

### 3.5 Módulos Frontend

Cada módulo debe tener:
- `pages/` - Vistas principales
- `components/` - Componentes específicos del módulo
- `services/` - Llamadas API del módulo
- `hooks/` - Hooks personalizados del módulo
- `README.md` - Documentación del módulo

#### 3.5.1 Módulo de Autenticación
- [ ] Página de Login
- [ ] Página de Registro
- [ ] Recuperación de contraseña
- [ ] Gestión de perfil de usuario
- [ ] Componente de protección de rutas

#### 3.5.2 Módulo de Tenants
- [ ] Dashboard de tenants
- [ ] Formulario crear/editar tenant
- [ ] Configuración de branding
- [ ] Gestión de configuraciones

#### 3.5.3 Módulo de Centros de Costos
- [ ] Lista de centros de costos
- [ ] Formulario crear centro de costos (IDE, Cliente, Contrato, Identificación)
- [ ] Vista de categorías (Recursos Humanos, Logística, Reembolsables, Contratos, Otros, Imprevistos)
- [ ] Gestión de ítems por categoría con campos:
  - Fecha de implementación
  - Fecha de inicio
  - Fecha estimada de finalización
  - Nombre del ítem
  - Identificación
  - Valor
  - Observaciones
- [ ] Dashboard de costos

#### 3.5.4 Módulo de Inventarios
- [ ] Catálogo de productos
- [ ] Gestión de movimientos
- [ ] Alertas de stock bajo
- [ ] Reportes de inventario

#### 3.5.5 Módulo de Gestión Documental
- [ ] Repositorio de documentos
- [ ] Subida de archivos
- [ ] Versionamiento
- [ ] Búsqueda y filtros
- [ ] Gestión de metadatos

#### 3.5.6 Módulo de Clientes
- [ ] Lista de clientes
- [ ] Formulario crear/editar cliente
- [ ] Gestión de contratos
- [ ] Gestión de proyectos

#### 3.5.7 Módulo de Empleados
- [ ] Directorio de empleados
- [ ] Perfil de empleado
- [ ] Gestión de roles y permisos
- [ ] Timesheets
- [ ] Registro de capacitación

#### 3.5.8 Módulo de Cartera
- [ ] Lista de facturas
- [ ] Gestión de pagos
- [ ] Aging report
- [ ] Dashboard de cartera

#### 3.5.9 Módulo de Tesorería
- [ ] Órdenes de pago
- [ ] Conciliación bancaria
- [ ] Flujo de caja
- [ ] Dashboard financiero

#### 3.5.10 Módulo de Proveedores
- [ ] Lista de proveedores
- [ ] Alta de proveedores
- [ ] Catálogo de productos
- [ ] Órdenes de compra
- [ ] Recepciones

### 3.6 Configurar Rutas
- [ ] Configurar React Router
- [ ] Rutas públicas (login, registro)
- [ ] Rutas privadas (requieren autenticación)
- [ ] Rutas por rol

### 3.7 Configurar Estado Global
- [ ] Store de autenticación
- [ ] Store de tenant actual
- [ ] Store de UI (sidebar, modals, etc.)

### 3.8 Servicios API
- [ ] Configurar axios con interceptores
- [ ] Servicio de autenticación
- [ ] Servicios por módulo

---

## 4. Backend (API)

### 4.1 Scaffold Inicial de Express
```bash
cd API
npm init -y
npm install express cors helmet morgan dotenv
npm install mysql2 sequelize
npm install bcrypt jsonwebtoken
npm install express-validator
npm install swagger-ui-express swagger-jsdoc
npm install -D nodemon eslint prettier
```

### 4.2 Configuración Básica

#### 4.2.1 Configurar Express
- [ ] Crear `src/app.js` con configuración de Express
- [ ] Middleware de CORS
- [ ] Middleware de parsing JSON
- [ ] Middleware de logging (morgan)
- [ ] Middleware de seguridad (helmet)

#### 4.2.2 Configurar MySQL Connection
- [ ] Crear `src/config/database.js` con configuración de Sequelize
- [ ] Pool de conexiones
- [ ] Manejo de errores de conexión

#### 4.2.3 Configurar Variables de Entorno
- [ ] Crear `.env.example`
- [ ] Documentar todas las variables necesarias

### 4.3 Arquitectura en Capas

Cada módulo debe seguir esta estructura:
```
module-name/
├── routes.js        # Rutas del módulo
├── controller.js    # Controladores (lógica de request/response)
├── service.js       # Servicios (lógica de negocio)
├── model.js         # Modelo Sequelize (base de datos)
├── validation.js    # Validaciones de entrada
└── README.md        # Documentación del módulo
```

### 4.4 Middleware Global

#### 4.4.1 Middleware de Autenticación
- [ ] Verificación de JWT
- [ ] Extracción de usuario del token
- [ ] Manejo de tokens expirados

#### 4.4.2 Middleware de Autorización
- [ ] Verificación de roles
- [ ] Verificación de permisos
- [ ] Control de acceso basado en tenant

#### 4.4.3 Middleware de Validación
- [ ] Validación de entrada con express-validator
- [ ] Sanitización de datos

#### 4.4.4 Middleware de Error
- [ ] Manejo centralizado de errores
- [ ] Logging de errores
- [ ] Respuestas de error consistentes

#### 4.4.5 Middleware de Auditoría
- [ ] Logging de todas las operaciones
- [ ] Registro de usuario y timestamp
- [ ] Almacenamiento en base de datos

### 4.5 Módulos Backend

#### 4.5.1 Módulo de Autenticación y Seguridad
**Endpoints:**
- [ ] `POST /api/auth/register` - Registro de usuario
- [ ] `POST /api/auth/login` - Login
- [ ] `POST /api/auth/logout` - Logout
- [ ] `POST /api/auth/refresh` - Refresh token
- [ ] `POST /api/auth/forgot-password` - Recuperar contraseña
- [ ] `POST /api/auth/reset-password` - Resetear contraseña
- [ ] `GET /api/auth/me` - Obtener usuario actual

**Modelos:**
- [ ] User (id, email, password, name, role, tenantId, isActive, createdAt, updatedAt)
- [ ] Role (id, name, permissions, tenantId)
- [ ] Permission (id, name, resource, action)
- [ ] AuditLog (id, userId, action, resource, details, ip, timestamp)

#### 4.5.2 Módulo de Tenants
**Endpoints:**
- [ ] `GET /api/tenants` - Listar tenants
- [ ] `GET /api/tenants/:id` - Obtener tenant
- [ ] `POST /api/tenants` - Crear tenant
- [ ] `PUT /api/tenants/:id` - Actualizar tenant
- [ ] `DELETE /api/tenants/:id` - Eliminar tenant
- [ ] `PUT /api/tenants/:id/branding` - Actualizar branding
- [ ] `PUT /api/tenants/:id/config` - Actualizar configuración

**Modelos:**
- [ ] Tenant (id, name, subdomain, logo, primaryColor, isActive, config, createdAt, updatedAt)
- [ ] TenantConfig (id, tenantId, key, value)

#### 4.5.3 Módulo de Centros de Costos
**Endpoints:**
- [ ] `GET /api/cost-centers` - Listar centros de costos
- [ ] `GET /api/cost-centers/:id` - Obtener centro de costos
- [ ] `POST /api/cost-centers` - Crear centro de costos (IDE, Cliente, Contrato, Identificación)
- [ ] `PUT /api/cost-centers/:id` - Actualizar centro de costos
- [ ] `DELETE /api/cost-centers/:id` - Eliminar centro de costos
- [ ] `GET /api/cost-centers/:id/categories` - Obtener categorías
- [ ] `POST /api/cost-centers/:id/categories/:categoryId/items` - Crear ítem en categoría
- [ ] `PUT /api/cost-centers/items/:itemId` - Actualizar ítem
- [ ] `DELETE /api/cost-centers/items/:itemId` - Eliminar ítem
- [ ] `GET /api/cost-centers/:id/report` - Reporte de costos

**Modelos:**
- [ ] CostCenter (id, ide, clientId, contractNumber, identification, tenantId, createdAt, updatedAt)
- [ ] CostCategory (id, costCenterId, name, type, order) - Tipos: Recursos Humanos, Logística, Reembolsables, Contratos, Otros, Imprevistos
- [ ] CostItem (id, categoryId, implementationDate, startDate, estimatedEndDate, name, identification, value, observations, createdAt, updatedAt)

**Lógica Especial:**
- [ ] Al crear un centro de costos, crear automáticamente las 6 categorías por defecto
- [ ] Validar campos requeridos (IDE, Cliente, Contrato, Identificación)

#### 4.5.4 Módulo de Inventarios
**Endpoints:**
- [ ] `GET /api/inventory/items` - Listar items
- [ ] `GET /api/inventory/items/:id` - Obtener item
- [ ] `POST /api/inventory/items` - Crear item
- [ ] `PUT /api/inventory/items/:id` - Actualizar item
- [ ] `DELETE /api/inventory/items/:id` - Eliminar item
- [ ] `POST /api/inventory/movements` - Registrar movimiento
- [ ] `GET /api/inventory/movements` - Listar movimientos
- [ ] `GET /api/inventory/alerts` - Alertas de stock bajo

**Modelos:**
- [ ] InventoryItem (id, sku, name, description, category, unit, minStock, currentStock, location, tenantId)
- [ ] InventoryMovement (id, itemId, type, quantity, reason, userId, date)

#### 4.5.5 Módulo de Gestión Documental
**Endpoints:**
- [ ] `GET /api/documents` - Listar documentos
- [ ] `GET /api/documents/:id` - Obtener documento
- [ ] `POST /api/documents` - Subir documento
- [ ] `PUT /api/documents/:id` - Actualizar metadatos
- [ ] `DELETE /api/documents/:id` - Eliminar documento
- [ ] `GET /api/documents/:id/versions` - Obtener versiones
- [ ] `POST /api/documents/:id/versions` - Nueva versión
- [ ] `GET /api/documents/search` - Buscar documentos

**Modelos:**
- [ ] Document (id, name, description, type, category, tags, metadata, tenantId, createdBy, createdAt)
- [ ] DocumentVersion (id, documentId, version, filePath, fileSize, uploadedBy, uploadedAt)

#### 4.5.6 Módulo de Clientes
**Endpoints:**
- [ ] `GET /api/clients` - Listar clientes
- [ ] `GET /api/clients/:id` - Obtener cliente
- [ ] `POST /api/clients` - Crear cliente
- [ ] `PUT /api/clients/:id` - Actualizar cliente
- [ ] `DELETE /api/clients/:id` - Eliminar cliente
- [ ] `GET /api/clients/:id/contracts` - Obtener contratos
- [ ] `POST /api/clients/:id/contracts` - Crear contrato
- [ ] `GET /api/clients/:id/projects` - Obtener proyectos
- [ ] `POST /api/clients/:id/projects` - Crear proyecto

**Modelos:**
- [ ] Client (id, name, nit, email, phone, address, contactPerson, tenantId, isActive)
- [ ] Contract (id, clientId, number, startDate, endDate, value, status, terms)
- [ ] Project (id, clientId, contractId, name, description, startDate, endDate, status)

#### 4.5.7 Módulo de Empleados
**Endpoints:**
- [ ] `GET /api/employees` - Listar empleados
- [ ] `GET /api/employees/:id` - Obtener empleado
- [ ] `POST /api/employees` - Crear empleado
- [ ] `PUT /api/employees/:id` - Actualizar empleado
- [ ] `DELETE /api/employees/:id` - Eliminar empleado
- [ ] `GET /api/employees/:id/timesheets` - Obtener timesheets
- [ ] `POST /api/employees/:id/timesheets` - Crear timesheet
- [ ] `GET /api/employees/:id/training` - Obtener capacitaciones
- [ ] `POST /api/employees/:id/training` - Registrar capacitación

**Modelos:**
- [ ] Employee (id, userId, identification, position, department, hireDate, salary, tenantId, isActive)
- [ ] Timesheet (id, employeeId, projectId, date, hours, description, status)
- [ ] Training (id, employeeId, name, provider, date, duration, certificate, expiryDate)

#### 4.5.8 Módulo de Cartera
**Endpoints:**
- [ ] `GET /api/portfolio/invoices` - Listar facturas
- [ ] `GET /api/portfolio/invoices/:id` - Obtener factura
- [ ] `POST /api/portfolio/invoices` - Crear factura
- [ ] `PUT /api/portfolio/invoices/:id` - Actualizar factura
- [ ] `POST /api/portfolio/invoices/:id/payments` - Registrar pago
- [ ] `GET /api/portfolio/aging-report` - Reporte de cartera vencida

**Modelos:**
- [ ] Invoice (id, clientId, number, date, dueDate, subtotal, tax, total, status, tenantId)
- [ ] Payment (id, invoiceId, amount, date, method, reference, notes)

#### 4.5.9 Módulo de Tesorería
**Endpoints:**
- [ ] `GET /api/treasury/payment-orders` - Listar órdenes de pago
- [ ] `POST /api/treasury/payment-orders` - Crear orden de pago
- [ ] `PUT /api/treasury/payment-orders/:id` - Actualizar orden
- [ ] `POST /api/treasury/reconciliation` - Conciliación bancaria
- [ ] `GET /api/treasury/cash-flow` - Reporte de flujo de caja

**Modelos:**
- [ ] PaymentOrder (id, supplierId, amount, dueDate, status, concept, approvedBy, tenantId)
- [ ] BankReconciliation (id, bankAccountId, date, balance, reconciled, differences)
- [ ] CashFlow (id, date, type, category, amount, description, tenantId)

#### 4.5.10 Módulo de Proveedores
**Endpoints:**
- [ ] `GET /api/suppliers` - Listar proveedores
- [ ] `GET /api/suppliers/:id` - Obtener proveedor
- [ ] `POST /api/suppliers` - Crear proveedor
- [ ] `PUT /api/suppliers/:id` - Actualizar proveedor
- [ ] `DELETE /api/suppliers/:id` - Eliminar proveedor
- [ ] `GET /api/suppliers/:id/catalog` - Catálogo de productos
- [ ] `POST /api/suppliers/purchase-orders` - Crear orden de compra
- [ ] `GET /api/suppliers/purchase-orders/:id` - Obtener orden de compra
- [ ] `PUT /api/suppliers/purchase-orders/:id/receive` - Registrar recepción

**Modelos:**
- [ ] Supplier (id, name, nit, email, phone, address, contactPerson, category, tenantId, isActive)
- [ ] SupplierCatalog (id, supplierId, sku, name, description, price, currency)
- [ ] PurchaseOrder (id, supplierId, number, date, expectedDate, status, total, tenantId)
- [ ] PurchaseOrderItem (id, purchaseOrderId, itemId, quantity, price, subtotal)
- [ ] Reception (id, purchaseOrderId, date, receivedBy, notes, status)

### 4.6 Configurar Swagger/OpenAPI

- [ ] Instalar swagger-ui-express y swagger-jsdoc
- [ ] Configurar swagger.js con información de la API
- [ ] Documentar cada endpoint con JSDoc
- [ ] Exponer documentación en `/api-docs`

### 4.7 Implementar Autenticación JWT

- [ ] Generar tokens JWT en login
- [ ] Middleware para verificar tokens
- [ ] Refresh tokens
- [ ] Blacklist de tokens (logout)

### 4.8 Implementar Sistema de Roles y Permisos

- [ ] Definir roles (Super Admin, Admin, Manager, User, etc.)
- [ ] Definir permisos por recurso y acción
- [ ] Middleware de autorización
- [ ] Seed inicial de roles y permisos

---

## 5. Base de Datos

### 5.1 Diseño del Esquema

- [ ] Diseñar esquema en MySQL Workbench
- [ ] Definir todas las tablas
- [ ] Definir relaciones (FK)
- [ ] Definir índices
- [ ] Añadir constraints
- [ ] Documentar esquema

### 5.2 Migra y Seeds

- [ ] Crear script de migración inicial
- [ ] Crear seeds para datos de prueba
- [ ] Crear seeds para roles y permisos
- [ ] Crear seeds para categorías de centros de costos

### 5.3 Tablas Multitenant

Asegurar que todas las tablas principales tengan:
- [ ] Campo `tenantId` como Foreign Key
- [ ] Índice en `tenantId`
- [ ] Validación a nivel de aplicación

### 5.4 Tablas de Auditoría

- [ ] Crear tabla `audit_logs`
- [ ] Trigger para auditar cambios críticos
- [ ] Retention policy para logs

---

## 6. Módulos del Sistema

### 6.1 Orden de Implementación Recomendado

1. **Autenticación y Seguridad** (Base para todo)
2. **Tenants** (Arquitectura multitenant)
3. **Clientes** (Necesario para Centros de Costos)
4. **Centros de Costos** (Funcionalidad específica crítica)
5. **Empleados** (Base para timesheets y auditoría)
6. **Proveedores** (Base para Inventarios y Tesorería)
7. **Inventarios**
8. **Cartera**
9. **Tesorería**
10. **Gestión Documental**

### 6.2 Criterios de Completitud por Módulo

Cada módulo se considera completo cuando:
- [ ] Backend implementado (routes, controllers, services, models)
- [ ] Frontend implementado (pages, components, services)
- [ ] Validaciones implementadas
- [ ] Documentación Swagger completa
- [ ] Tests unitarios > 80% coverage
- [ ] Tests de integración funcionando
- [ ] README del módulo completo
- [ ] Probado end-to-end

---

## 7. Testing

### 7.1 Backend Testing

#### 7.1.1 Tests Unitarios
- [ ] Tests de servicios
- [ ] Tests de modelos
- [ ] Tests de utilidades
- [ ] Coverage > 80%

#### 7.1.2 Tests de Integración
- [ ] Tests de endpoints
- [ ] Tests de autenticación
- [ ] Tests de autorización
- [ ] Tests de base de datos

#### 7.1.3 Configurar Jest
```bash
cd API
npm install -D jest supertest @types/jest
```

### 7.2 Frontend Testing

#### 7.2.1 Tests de Componentes
- [ ] Tests de componentes comunes
- [ ] Tests de componentes de módulos
- [ ] Tests de hooks personalizados

#### 7.2.2 Tests E2E
- [ ] Tests de flujos críticos
- [ ] Tests de autenticación
- [ ] Tests de creación/edición de registros

#### 7.2.3 Configurar Vitest
```bash
cd FRONT
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

---

## 8. Documentación

### 8.1 Documentación de API

- [ ] Swagger/OpenAPI completo
- [ ] Ejemplos de requests/responses
- [ ] Códigos de error documentados
- [ ] Rate limiting documentado

### 8.2 Documentación de Frontend

- [ ] Storybook para componentes (opcional)
- [ ] Guía de estilos
- [ ] Guía de uso de componentes
- [ ] Flujos de usuario documentados

### 8.3 Documentación de Base de Datos

- [ ] Diagrama ER
- [ ] Descripción de tablas
- [ ] Índices y optimizaciones
- [ ] Políticas de backup

### 8.4 Guías de Desarrollo

- [ ] Guía de contribución
- [ ] Guía de estilo de código
- [ ] Guía de commits
- [ ] Guía de PR

### 8.5 Manuales de Usuario

- [ ] Manual de administrador
- [ ] Manual de usuario final
- [ ] FAQs
- [ ] Troubleshooting

---

## 9. Despliegue

### 9.1 Docker

- [ ] Dockerfile para API
- [ ] Dockerfile para FRONT
- [ ] docker-compose.yml completo
- [ ] Scripts de inicialización de DB

### 9.2 CI/CD

- [ ] GitHub Actions para tests
- [ ] GitHub Actions para build
- [ ] GitHub Actions para deploy
- [ ] Linting automático

### 9.3 Ambientes

- [ ] Development
- [ ] Staging
- [ ] Production

### 9.4 Monitoreo

- [ ] Logging centralizado
- [ ] Métricas de performance
- [ ] Alertas de errores
- [ ] Health checks

---

## 10. Seguridad

### 10.1 Checklist de Seguridad

- [ ] Todas las contraseñas hasheadas con bcrypt
- [ ] JWT con expiración y refresh tokens
- [ ] Rate limiting en endpoints
- [ ] Validación de entrada en todos los endpoints
- [ ] Sanitización de datos
- [ ] HTTPS en producción
- [ ] CORS configurado correctamente
- [ ] Headers de seguridad (helmet)
- [ ] SQL injection prevention (ORM)
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Logs de auditoría

---

## 11. Integración Futura con World Office

### 11.1 Preparación

- [ ] API REST bien documentada
- [ ] Webhooks configurables
- [ ] Sistema de eventos
- [ ] Autenticación OAuth2 (futuro)

---

## ✅ Progreso General

- [ ] Configuración inicial (0%)
- [ ] Estructura del proyecto (0%)
- [ ] Frontend base (0%)
- [ ] Backend base (0%)
- [ ] Base de datos (0%)
- [ ] Módulos implementados (0/10)
- [ ] Testing (0%)
- [ ] Documentación (0%)
- [ ] Despliegue (0%)

---

## 📝 Notas

- Mantener este documento actualizado conforme avanza el desarrollo
- Marcar tareas completadas con `[x]`
- Añadir notas de bloqueos o decisiones importantes
- Revisar periódicamente para ajustar prioridades
>>>>>>> origin/copilot/create-erp-module-structure
