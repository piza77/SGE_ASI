<<<<<<< HEAD
<<<<<<< HEAD
# Sistema de Gestión Empresarial (SGE) - ASI

Sistema ERP modular multitenant para consultora medioambiental con arquitectura limpia y documentación completa.

## 🎯 Objetivo

Construir un sistema ERP modular multitenant que permite gestionar múltiples empresas con funcionalidades completas de administración, finanzas, recursos humanos, inventario y gestión documental.

## 🏗️ Arquitectura

El sistema está dividido en dos componentes principales:

- **FRONT**: Aplicación frontend con React + Vite + TailwindCSS
- **API**: Backend RESTful con Node.js + Express + MySQL
=======
# SGE ASI - Sistema de Gestión Empresarial

Sistema ERP multitenant modular para consultoría medioambiental. Construido con arquitectura moderna usando Node.js, React y MySQL.

## 🚀 Características Principales

- **Multitenant**: Aislamiento completo de datos por empresa
- **Autenticación robusta**: JWT con roles y permisos granulares
- **Auditoría completa**: Registro de todas las operaciones sensibles
- **API RESTful**: Documentada con Swagger/OpenAPI
- **Frontend moderno**: React + Vite + TailwindCSS
- **Docker Ready**: Despliegue completo con docker-compose
>>>>>>> origin/copilot/complete-authentication-and-tenants

## 📁 Estructura del Proyecto

```
SGE_ASI/
<<<<<<< HEAD
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

=======
├── API/                    # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/        # Configuración y esquema DB
│   │   ├── controllers/   # Controladores HTTP
│   │   ├── middleware/    # Middleware (auth, validación)
│   │   ├── routes/        # Definición de rutas
│   │   ├── services/      # Lógica de negocio
│   │   └── index.js       # Punto de entrada
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
│
├── FRONT/                  # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── context/       # Context API
│   │   ├── pages/         # Páginas/Vistas
│   │   ├── services/      # Servicios API
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
│
├── docker-compose.yml      # Orquestación de servicios
└── README.md              # Este archivo
```

## 🛠️ Tecnologías

### Backend
- Node.js 18+
- Express.js
- MySQL 8.0
- JWT (jsonwebtoken)
- Bcrypt
- Swagger/OpenAPI

>>>>>>> origin/copilot/complete-authentication-and-tenants
### Frontend
- React 18
- Vite
- TailwindCSS
- React Router
- Axios

<<<<<<< HEAD
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
=======
### DevOps
- Docker
- Docker Compose
- phpMyAdmin

## 🚦 Inicio Rápido con Docker

### Prerrequisitos
- Docker Desktop instalado
- Docker Compose instalado
- Puertos 3000, 4000, 3306 y 8080 disponibles

### 1. Clonar el repositorio
>>>>>>> origin/copilot/complete-authentication-and-tenants
```bash
git clone https://github.com/piza77/SGE_ASI.git
cd SGE_ASI
```

<<<<<<< HEAD
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
=======
### 2. Configurar variables de entorno

**API (.env):**
```bash
cd API
cp .env.example .env
# Editar .env con tus configuraciones
```

**Frontend (.env):**
```bash
cd FRONT
cp .env.example .env
# Editar .env con tus configuraciones
```

### 3. Levantar los servicios
```bash
# Desde la raíz del proyecto
docker-compose up --build
```

### 4. Acceder a los servicios

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Docs (Swagger)**: http://localhost:4000/api-docs
- **phpMyAdmin**: http://localhost:8080

### 5. Credenciales de prueba

**Usuario Admin:**
- Tenant Slug: `demo-company`
- Email: `admin@demo.com`
- Password: `Admin123!`

**MySQL:**
- Host: `localhost:3306`
- User: `root`
- Password: `rootpassword`
- Database: `sge_asi_erp`

## 📝 Instalación Manual (Sin Docker)

### Backend
>>>>>>> origin/copilot/complete-authentication-and-tenants

```bash
cd API
npm install
<<<<<<< HEAD
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
=======

# Configurar .env
cp .env.example .env

# Crear base de datos
mysql -u root -p < src/config/database-schema.sql

# Iniciar servidor
npm run dev
```

### Frontend

```bash
cd FRONT
npm install

# Configurar .env
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

## 📚 Módulos Implementados

### ✅ Autenticación y Seguridad
- Login con JWT
- Registro de usuarios
- Gestión de roles y permisos
- Auditoría de acciones sensibles
- Bloqueo de cuenta tras intentos fallidos
- Cambio de contraseña

### ✅ Tenants (Gestión de Empresas)
- CRUD completo de empresas
- Personalización de branding (colores, logo)
- Aislamiento total de datos por tenant
- Gestión de status (activo/inactivo/suspendido)

## 🔐 Sistema de Permisos

El sistema implementa un modelo RBAC (Role-Based Access Control):

### Roles por Defecto
1. **Super Admin** - Acceso total
2. **Admin** - Acceso administrativo
3. **User** - Acceso básico

### Permisos por Módulo

**Autenticación:**
- `auth.login`
- `auth.logout`
- `auth.register`

**Tenants:**
- `tenant.view`
- `tenant.create`
- `tenant.update`
- `tenant.delete`
- `tenant.manage_branding`

**Usuarios:**
- `user.view`
- `user.create`
- `user.update`
- `user.delete`

**Roles:**
- `role.view`
- `role.create`
- `role.update`
- `role.delete`
- `role.assign_permissions`

**Auditoría:**
- `audit.view`

## 📊 Base de Datos

### Tablas Principales

- `tenants` - Empresas/Organizaciones
- `users` - Usuarios del sistema
- `roles` - Roles de usuario
- `permissions` - Permisos del sistema
- `role_permissions` - Relación roles-permisos
- `user_roles` - Relación usuarios-roles
- `audit_logs` - Registro de auditoría

### Diagrama ER
El esquema completo está en: `API/src/config/database-schema.sql`

## 🔧 Comandos Útiles

### Docker

```bash
# Levantar servicios
>>>>>>> origin/copilot/complete-authentication-and-tenants
docker-compose up -d

# Ver logs
docker-compose logs -f

<<<<<<< HEAD
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
=======
# Ver logs de un servicio específico
docker-compose logs -f api

# Detener servicios
docker-compose down

# Reconstruir imágenes
docker-compose up --build

# Limpiar todo (incluyendo volúmenes)
docker-compose down -v
```

### Backend

```bash
cd API

# Desarrollo
npm run dev

# Producción
npm start

# Pruebas
npm test
```

### Frontend

```bash
cd FRONT

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🌐 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/me` - Obtener usuario actual
- `POST /api/auth/change-password` - Cambiar contraseña
- `POST /api/auth/validate` - Validar token

### Tenants
- `GET /api/tenants` - Listar tenants
- `GET /api/tenants/:id` - Obtener tenant por ID
- `GET /api/tenants/slug/:slug` - Obtener tenant por slug
- `POST /api/tenants` - Crear tenant
- `PUT /api/tenants/:id` - Actualizar tenant
- `DELETE /api/tenants/:id` - Eliminar tenant
- `PUT /api/tenants/:id/branding` - Actualizar branding

📖 **Documentación completa**: http://localhost:4000/api-docs

## 🧪 Testing

### Backend
```bash
cd API
npm test
```

### Frontend
```bash
cd FRONT
npm run lint
```

## 🔒 Seguridad

### Medidas Implementadas
- ✅ Contraseñas hasheadas con bcrypt (10 rounds)
- ✅ JWT con expiración configurable
- ✅ Validación de entrada con express-validator
- ✅ Headers de seguridad con Helmet
- ✅ CORS configurado
- ✅ Aislamiento de tenants en todas las queries
- ✅ Auditoría de operaciones sensibles
- ✅ Bloqueo de cuenta tras intentos fallidos

### Recomendaciones para Producción
- Usar HTTPS en todos los endpoints
- Cambiar JWT_SECRET a valor aleatorio y seguro
- Implementar rate limiting
- Configurar backups automáticos de BD
- Usar variables de entorno seguras
- Implementar monitoreo y alertas

## 📈 Próximos Módulos

- [ ] Centros de Costos
- [ ] Inventarios
- [ ] Gestión Documental
- [ ] Clientes
- [ ] Empleados
- [ ] Cartera
- [ ] Tesorería
- [ ] Proveedores

## 🐛 Troubleshooting

### Backend no se conecta a la base de datos
```bash
# Verificar que MySQL esté corriendo
docker-compose ps

# Ver logs de MySQL
docker-compose logs mysql

# Verificar credenciales en .env
```

### Frontend no se comunica con el backend
```bash
# Verificar que VITE_API_URL esté correcto en FRONT/.env
# Verificar que el backend esté corriendo
curl http://localhost:4000/health
```

### Error de permisos en Docker
```bash
# Dar permisos a los archivos
sudo chown -R $USER:$USER .

# O ejecutar docker con sudo (no recomendado)
sudo docker-compose up
```

## 📞 Soporte

Para reportar bugs o solicitar features:
1. Crear un issue en GitHub
2. Incluir logs y pasos para reproducir
3. Especificar versión del sistema

## 👥 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

ISC

## 🙏 Agradecimientos

Desarrollado para optimizar la gestión empresarial en consultoría medioambiental.

---

**Versión**: 1.0.0  
**Última actualización**: Enero 2026
>>>>>>> origin/copilot/complete-authentication-and-tenants
