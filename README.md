<<<<<<< HEAD
# Sistema de Gestión Empresarial (SGE) - ASI

Sistema ERP modular multitenant para consultora medioambiental con arquitectura limpia y documentación completa.

## 🎯 Objetivo

Construir un sistema ERP modular multitenant que permite gestionar múltiples empresas con funcionalidades completas de administración, finanzas, recursos humanos, inventario y gestión documental.

## 🏗️ Arquitectura

El sistema está dividido en dos componentes principales:

- **FRONT**: Aplicación frontend con React + Vite + TailwindCSS
- **API**: Backend RESTful con Node.js + Express + MySQL

## 📁 Estructura del Proyecto

```
SGE_ASI/
├── FRONT/                    # Aplicación Frontend
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas por módulo
│   │   ├── layouts/         # Layouts de la aplicación
│   │   ├── services/        # Servicios API
│   │   └── utils/           # Utilidades
│   ├── public/
│   └── README.md
├── API/                      # Aplicación Backend
│   ├── src/
│   │   ├── routes/          # Rutas de la API
│   │   ├── controllers/     # Controladores
│   │   ├── services/        # Lógica de negocio
│   │   ├── models/          # Modelos de datos
│   │   ├── middleware/      # Middlewares
│   │   └── config/          # Configuración
│   ├── tests/
│   └── README.md
├── docker-compose.yml        # Orquestación de contenedores
├── tareas_copilot.md        # Tareas detalladas de desarrollo
└── README.md                 # Este archivo
```

## 🚀 Módulos del Sistema

1. **Autenticación y Seguridad**: Login, roles, permisos, auditoría
2. **Tenants**: Gestión de empresas, branding, configuración
3. **Centros de Costos**: Gestión de presupuestos y categorías
4. **Inventarios**: Catálogo, movimientos, alertas
5. **Gestión Documental**: Documentos, versiones, metadatos, búsqueda
6. **Clientes**: Registro, contratos, proyectos
7. **Empleados**: Perfil, roles, timesheets, capacitación
8. **Cartera**: Facturas, pagos, aging report
9. **Tesorería**: Órdenes de pago, conciliación, flujo de caja
10. **Proveedores**: Alta, catálogo, órdenes de compra, recepciones

## 🛠️ Tecnologías

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router
- Axios

### Backend
- Node.js
- Express
- MySQL
- Sequelize ORM
- JWT Authentication
- Swagger/OpenAPI

### DevOps
- Docker
- Docker Compose
- MySQL 8.0

## 🚦 Inicio Rápido

### Prerrequisitos

- Node.js >= 18
- Docker y Docker Compose
- MySQL Workbench (opcional, para gestión de base de datos)

### Instalación con Docker

1. Clonar el repositorio:
```bash
git clone https://github.com/piza77/SGE_ASI.git
cd SGE_ASI
```

2. Levantar los servicios:
```bash
docker-compose up -d
```

3. Acceder a la aplicación:
- Frontend: http://localhost:5173
- API: http://localhost:3000
- Documentación API (Swagger): http://localhost:3000/api-docs

### Instalación Manual

#### Backend (API)

```bash
cd API
npm install
cp .env.example .env
# Configurar las variables de entorno
npm run dev
```
=======
# SGE ASI - Sistema de Gestión Empresarial

Sistema ERP modular multitenant para consultora medioambiental, con arquitectura limpia y documentación completa.

## 🏗️ Arquitectura del Proyecto

Este proyecto está organizado en dos carpetas principales:

- **FRONT/**: Aplicación frontend con React + Vite + TailwindCSS
- **API/**: Backend con Node.js + Express + MySQL

## 🚀 Inicio Rápido

### Usando Docker Compose (Recomendado)

```bash
# Levantar todos los servicios (Frontend, API y MySQL)
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

Servicios disponibles:
- Frontend: http://localhost:5173
- API: http://localhost:3000
- MySQL: localhost:3306
- Swagger API Docs: http://localhost:3000/api-docs

### Desarrollo Local
>>>>>>> origin/copilot/create-erp-module-structure

#### Frontend (FRONT)

```bash
cd FRONT
npm install
npm run dev
```

<<<<<<< HEAD
## 📚 Documentación

- [Documentación del Frontend](./FRONT/README.md)
- [Documentación del API](./API/README.md)
- [Tareas de Desarrollo](./tareas_copilot.md)
- [API Documentation (Swagger)](http://localhost:3000/api-docs) (cuando el servidor esté corriendo)

## 🔒 Seguridad

- Autenticación basada en JWT
- Roles y permisos granulares
- Auditoría de acciones
- Validación de datos en frontend y backend
- Protección contra SQL Injection
- Sanitización de entradas

## 🌐 Multitenant

El sistema soporta múltiples empresas (tenants) con:
- Aislamiento de datos por tenant
- Configuración personalizada
- Branding personalizado
- Gestión independiente de usuarios
=======
Ver [FRONT/README.md](./FRONT/README.md) para más detalles.

#### Backend (API)

```bash
cd API
npm install
npm run dev
```

Ver [API/README.md](./API/README.md) para más detalles.

## 📦 Módulos del Sistema

1. **Autenticación y Seguridad** - Login, roles, permisos, auditoría
2. **Tenants** - Gestión de empresas, branding, configuración multitenant
3. **Centros de Costos** - Gestión de centros de costos con categorías predefinidas
4. **Inventarios** - Catálogo, movimientos, alertas de stock
5. **Gestión Documental** - Documentos, versiones, metadatos, búsqueda
6. **Clientes** - Registro, contratos, proyectos
7. **Empleados** - Perfil, roles, timesheets, capacitación
8. **Cartera** - Facturas, pagos, aging report
9. **Tesorería** - Órdenes de pago, conciliación, flujo de caja
10. **Proveedores** - Alta, catálogo, órdenes de compra, recepciones

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework CSS utility-first
- **React Router** - Navegación SPA
- **Axios** - Cliente HTTP
- **Zustand** - Gestión de estado

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MySQL** - Base de datos relacional
- **Sequelize** - ORM para MySQL
- **JWT** - Autenticación basada en tokens
- **Swagger/OpenAPI** - Documentación de API
- **Jest** - Testing framework

### DevOps
- **Docker & Docker Compose** - Containerización
- **ESLint & Prettier** - Linting y formato de código
- **Git** - Control de versiones

## 📖 Documentación

- [Tareas de Desarrollo](./tareas_copilot.md) - Guía paso a paso de implementación
- [Documentación API](./API/README.md) - Endpoints y ejemplos
- [Documentación Frontend](./FRONT/README.md) - Componentes y vistas
- [Documentación Base de Datos](./API/docs/database-schema.md) - Esquemas y relaciones

## 🏢 Arquitectura Multitenant

El sistema está diseñado como multitenant, permitiendo:
- Múltiples empresas/clientes en una misma instalación
- Aislamiento de datos por tenant
- Configuración y branding personalizado por tenant
- Escalabilidad horizontal

## 🔐 Seguridad

- Autenticación JWT
- Control de acceso basado en roles (RBAC)
- Auditoría completa de operaciones
- Validación de entrada en todos los endpoints
- Protección contra CSRF y XSS
- Encriptación de contraseñas con bcrypt
>>>>>>> origin/copilot/create-erp-module-structure

## 🧪 Testing

```bash
<<<<<<< HEAD
# Backend tests
cd API
npm test

# Frontend tests
cd FRONT
npm test
```

## 📝 Convenciones de Código

- ESLint para linting
- Prettier para formateo
- Commits convencionales
- Comentarios en español
- Nomenclatura en inglés para código

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es propiedad de la consultora y está bajo licencia privada.

## 👥 Equipo

- Desarrollado para consultora medioambiental
- Preparado para integración futura con World Office
=======
# Frontend tests
cd FRONT && npm test

# Backend tests
cd API && npm test

# Coverage report
cd API && npm run test:coverage
```

## 📝 Variables de Entorno

### Frontend (.env en FRONT/)
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=SGE ASI
```

### Backend (.env en API/)
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=sge_asi
DB_USER=root
DB_PASSWORD=password
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
```

## 🤝 Contribución

1. Crear una rama desde `main`
2. Hacer cambios y commit
3. Crear Pull Request
4. Esperar revisión y aprobación

## 📄 Licencia

Propietario: Consultora Medioambiental ASI

## 🔮 Roadmap

- [x] Estructura inicial del proyecto
- [ ] Implementación de módulos core
- [ ] Integración con World Office
- [ ] Módulo de reportes avanzados
- [ ] Aplicación móvil
>>>>>>> origin/copilot/create-erp-module-structure

## 📞 Soporte

Para soporte y consultas, contactar al equipo de desarrollo.
