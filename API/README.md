<<<<<<< HEAD
<<<<<<< HEAD
# API - Sistema de Gestión Empresarial (SGE) ASI

API RESTful del sistema ERP modular multitenant desarrollado con Node.js, Express y MySQL.

## 🛠️ Tecnologías

- **Node.js 18** - Runtime de JavaScript
- **Express 5** - Framework web
- **MySQL 8** - Base de datos relacional
- **Sequelize 6** - ORM para MySQL
- **JWT** - Autenticación basada en tokens
- **Bcrypt** - Hash de contraseñas
- **Swagger/OpenAPI** - Documentación de API
- **Jest** - Testing framework

## 📁 Estructura de Carpetas
=======
# API Backend - SGE ASI

Backend API para el Sistema de Gestión Empresarial ASI. Construido con Node.js, Express y MySQL.

## 🚀 Tecnologías

- **Node.js 18+** - Runtime JavaScript
- **Express 4** - Framework web
- **MySQL 8** - Base de datos relacional
- **Sequelize** - ORM para MySQL
- **JWT** - Autenticación basada en tokens
- **Swagger/OpenAPI** - Documentación de API
- **Jest** - Framework de testing

## 📁 Estructura del Proyecto
>>>>>>> origin/copilot/create-erp-module-structure

```
API/
├── src/
<<<<<<< HEAD
│   ├── config/              # Configuraciones
│   │   ├── database.js      # Configuración de Sequelize
│   │   └── swagger.js       # Configuración de Swagger
│   ├── middleware/          # Middlewares
│   │   ├── auth.js          # Autenticación JWT
│   │   ├── validateTenant.js # Validación multitenant
│   │   └── errorHandler.js  # Manejo de errores
│   ├── models/              # Modelos Sequelize
│   │   ├── User.js
│   │   ├── Tenant.js
│   │   ├── CostCenter.js
│   │   └── [otros modelos]
│   ├── routes/              # Rutas de la API
│   │   ├── index.js         # Router principal
│   │   └── [módulos].routes.js
│   ├── controllers/         # Controladores
│   │   └── [módulos].controller.js
│   ├── services/            # Lógica de negocio
│   │   └── [módulos].service.js
│   ├── utils/               # Utilidades
│   └── app.js               # Configuración Express
├── tests/                   # Tests
│   ├── unit/               # Tests unitarios
│   └── integration/        # Tests de integración
├── database/               # Scripts de base de datos
│   └── init.sql           # Script de inicialización
├── server.js              # Punto de entrada
├── package.json
├── Dockerfile
├── .env.example
└── README.md
```

## 🚀 Comandos Disponibles

### Desarrollo

```bash
npm run dev
```

Inicia el servidor en modo desarrollo con hot-reload usando nodemon

### Producción

```bash
npm start
```

Inicia el servidor en modo producción

### Tests

```bash
npm test                 # Ejecutar todos los tests
npm run test:watch       # Ejecutar tests en modo watch
npm run test:coverage    # Ejecutar tests con cobertura
```

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env`:
=======
# SGE ASI ERP - Backend API

## Descripción
API RESTful para el sistema ERP multitenant SGE ASI. Construido con Node.js, Express y MySQL.

## Tecnologías
- **Node.js** v18+
- **Express** - Framework web
- **MySQL** - Base de datos relacional
- **JWT** - Autenticación con tokens
- **Bcrypt** - Encriptación de contraseñas
- **Swagger/OpenAPI** - Documentación de API

## Arquitectura
El backend sigue una arquitectura en capas:
- **Routes** - Definición de endpoints y validaciones
- **Controllers** - Manejo de peticiones HTTP
- **Services** - Lógica de negocio
- **Models** - (Uso directo de consultas SQL con mysql2)
- **Middleware** - Autenticación, autorización y validaciones

## Estructura de Carpetas
```
API/
├── src/
│   ├── config/           # Configuración (DB, Swagger, etc.)
│   ├── controllers/      # Controladores HTTP
│   ├── middleware/       # Middleware (auth, validación)
│   ├── routes/           # Definición de rutas
│   ├── services/         # Lógica de negocio
│   └── index.js          # Punto de entrada
├── .env.example          # Ejemplo de variables de entorno
├── package.json
└── README.md
```

## Instalación y Configuración

### 1. Instalar dependencias
```bash
cd API
npm install
```

### 2. Configurar variables de entorno
Copia el archivo `.env.example` a `.env` y configura las variables:

>>>>>>> origin/copilot/complete-authentication-and-tenants
```bash
cp .env.example .env
```

<<<<<<< HEAD
3. Configurar variables de entorno en `.env`:
=======
│   ├── config/              # Configuraciones (DB, Swagger)
│   ├── middleware/          # Middlewares globales
│   ├── modules/            # Módulos del sistema
│   │   ├── auth/          # Autenticación y seguridad
│   │   ├── tenants/       # Gestión de tenants
│   │   ├── cost-centers/  # Centros de costos
│   │   ├── inventory/     # Inventarios
│   │   ├── documents/     # Gestión documental
│   │   ├── clients/       # Clientes
│   │   ├── employees/     # Empleados
│   │   ├── portfolio/     # Cartera
│   │   ├── treasury/      # Tesorería
│   │   └── suppliers/     # Proveedores
│   ├── utils/             # Utilidades compartidas
│   ├── app.js            # Configuración de Express
│   └── server.js         # Punto de entrada
├── database/             # Scripts SQL
│   ├── init/            # Scripts de inicialización
│   ├── migrations/      # Migraciones
│   └── seeds/           # Datos de prueba
├── tests/               # Tests
├── docs/                # Documentación
├── package.json
├── Dockerfile
└── README.md
```

## 🏗️ Arquitectura en Capas

Cada módulo sigue una arquitectura en capas:

```
module-name/
├── routes.js         # Definición de rutas y endpoints
├── controllers/      # Controladores (manejo de request/response)
├── services/         # Servicios (lógica de negocio)
├── models/          # Modelos Sequelize (esquema de BD)
├── validations/     # Validaciones de entrada
└── README.md        # Documentación del módulo
```

### Flujo de Datos

```
Request → Routes → Middleware → Controller → Service → Model → Database
                                                ↓
Response ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←
```

## 🛠️ Instalación y Configuración

### Requisitos Previos

- Node.js 18 o superior
- MySQL 8 o superior
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar archivo de variables de entorno
cp .env.example .env

# Editar .env con tus configuraciones
nano .env
```

### Variables de Entorno

Ver `.env.example` para todas las variables disponibles. Las más importantes son:

>>>>>>> origin/copilot/create-erp-module-structure
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=sge_asi
DB_USER=root
DB_PASSWORD=password
<<<<<<< HEAD
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRE=24h
CORS_ORIGIN=http://localhost:5173
```

4. Crear base de datos MySQL:
```sql
CREATE DATABASE sge_asi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

5. Iniciar servidor:
```bash
npm run dev
```

## 🗄️ Base de Datos

### Conexión

La conexión a MySQL se configura en `src/config/database.js` usando Sequelize.

### Sincronización

En desarrollo, los modelos se sincronizan automáticamente con la base de datos al iniciar el servidor.

En producción, se recomienda usar migraciones.

### Modelos Principales

- **User** - Usuarios del sistema
- **Tenant** - Empresas (multitenant)
- **CostCenter** - Centros de costos
- **Category** - Categorías de centros de costos
- **Item** - Ítems de categorías

## 🔐 Autenticación

### JWT

La API usa JWT (JSON Web Tokens) para autenticación.

### Flujo de Autenticación

1. Usuario hace login en `/api/auth/login`
2. API valida credenciales y retorna token JWT
3. Cliente incluye token en header `Authorization: Bearer <token>`
4. Middleware `auth` valida token en cada petición protegida

### Proteger Rutas

```javascript
const { auth, authorize } = require('./middleware/auth');

// Ruta protegida (requiere autenticación)
router.get('/protected', auth, controller.method);

// Ruta con roles específicos
router.get('/admin', auth, authorize('admin'), controller.method);
```

## 🏢 Multitenant

### Implementación

Todos los modelos incluyen campo `tenantId` para aislar datos por empresa.

### Middleware

El middleware `validateTenant` asegura que cada petición incluya el tenant correcto.

### Header

Incluir header `X-Tenant-ID` en peticiones o usar el tenant del usuario autenticado.

## 📚 Documentación API (Swagger)

La documentación interactiva está disponible en:
=======
JWT_SECRET=your-secret-key
```

## 🚀 Ejecución

### Desarrollo

```bash
# Modo desarrollo con hot-reload
npm run dev
```

### Producción

```bash
# Iniciar servidor
npm start
```

### Docker

```bash
# Construir imagen
docker build -t sge-asi-api .

# Ejecutar contenedor
docker run -p 3000:3000 --env-file .env sge-asi-api
```

## 📚 API Documentation

La documentación interactiva de la API está disponible en:
>>>>>>> origin/copilot/create-erp-module-structure

```
http://localhost:3000/api-docs
```

<<<<<<< HEAD
### Documentar Endpoints

Usar comentarios JSDoc en las rutas:

```javascript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener lista de usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/users', auth, controller.getUsers);
```

## 🎯 Arquitectura en Capas

### 1. Rutas (Routes)

Definen endpoints y aplican middleware.

```javascript
router.post('/users', auth, controller.createUser);
```

### 2. Controladores (Controllers)

Manejan requests y responses.

```javascript
const createUser = async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    res.json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};
```

### 3. Servicios (Services)

Contienen lógica de negocio.

```javascript
const create = async (userData) => {
  // Validaciones
  // Lógica de negocio
  return await User.create(userData);
};
```

### 4. Modelos (Models)

Definen estructura de datos con Sequelize.

```javascript
const User = sequelize.define('User', {
  email: DataTypes.STRING,
  // ...
});
```

## 🔍 Manejo de Errores

Todos los errores son capturados por el middleware `errorHandler`.

### Tipos de Errores

- **ValidationError** - Errores de validación (400)
- **UniqueConstraintError** - Constraint único violado (409)
- **JsonWebTokenError** - Token inválido (401)
- **Custom Errors** - Errores personalizados con statusCode

### Lanzar Errores

```javascript
const error = new Error('Recurso no encontrado');
error.statusCode = 404;
throw error;
```

## 📊 Módulos del Sistema

### 1. Autenticación (Auth)

- Login
- Registro
- Refresh token
- Recuperación de contraseña

### 2. Tenants

- CRUD de empresas
- Configuración por tenant
- Branding personalizado

### 3. Centros de Costos

- CRUD de centros de costos
- Gestión de categorías
- Gestión de ítems por categoría

### 4. Inventario

- Catálogo de productos
- Movimientos
- Alertas de stock

### 5. Gestión Documental

- Subida de archivos
- Versionado
- Búsqueda por metadatos

### 6. Clientes

- CRUD de clientes
- Contratos
- Proyectos

### 7. Empleados

- Perfiles
- Timesheets
- Capacitaciones

### 8. Cartera

=======
Swagger UI permite explorar y probar todos los endpoints de la API.

## 🔐 Autenticación

La API utiliza JWT (JSON Web Tokens) para autenticación.

### Login

```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password"
}
```

### Uso del Token

```bash
GET /api/protected-route
Authorization: Bearer <your-token>
```

## 📋 Módulos Principales

### 1. Autenticación y Seguridad (`/api/auth`)
- Login/Logout
- Registro de usuarios
- Gestión de roles y permisos
- Auditoría de operaciones

### 2. Tenants (`/api/tenants`)
- Gestión multitenant
- Configuración de empresas
- Branding personalizado

### 3. Centros de Costos (`/api/cost-centers`)
- Creación con IDE, Cliente, Contrato, Identificación
- 6 categorías predefinidas
- Gestión de ítems por categoría
- Reportes de costos

### 4. Inventarios (`/api/inventory`)
- Catálogo de productos
- Movimientos de stock
- Alertas de stock bajo

### 5. Gestión Documental (`/api/documents`)
- Repositorio de documentos
- Control de versiones
- Metadatos y búsqueda

### 6. Clientes (`/api/clients`)
- Registro de clientes
- Gestión de contratos
- Proyectos

### 7. Empleados (`/api/employees`)
- Perfiles de empleados
- Timesheets
- Capacitación

### 8. Cartera (`/api/portfolio`)
>>>>>>> origin/copilot/create-erp-module-structure
- Facturas
- Pagos
- Aging report

<<<<<<< HEAD
### 9. Tesorería

=======
### 9. Tesorería (`/api/treasury`)
>>>>>>> origin/copilot/create-erp-module-structure
- Órdenes de pago
- Conciliación bancaria
- Flujo de caja

<<<<<<< HEAD
### 10. Proveedores

- CRUD de proveedores
=======
### 10. Proveedores (`/api/suppliers`)
- Alta de proveedores
>>>>>>> origin/copilot/create-erp-module-structure
- Órdenes de compra
- Recepciones

## 🧪 Testing

<<<<<<< HEAD
### Estructura de Tests

```
tests/
├── unit/                # Tests unitarios de servicios
└── integration/         # Tests de integración de endpoints
```

### Ejemplo de Test

```javascript
describe('User Service', () => {
  test('should create user', async () => {
    const userData = { email: 'test@test.com', password: '123456' };
    const user = await userService.create(userData);
    expect(user.email).toBe(userData.email);
  });
});
```

## 🚀 Despliegue

### Docker

```bash
docker build -t sge-api .
docker run -p 3000:3000 --env-file .env sge-api
```

### Docker Compose

Ver archivo `docker-compose.yml` en la raíz del proyecto.

## 📝 Convenciones de Código

- **Archivos**: camelCase
- **Clases**: PascalCase
- **Funciones/Variables**: camelCase
- **Constantes**: UPPER_SNAKE_CASE
- **Comentarios**: Español
- **Código**: Inglés

## 🔒 Seguridad

### Prácticas Implementadas

- ✅ Helmet para headers de seguridad
- ✅ CORS configurado
- ✅ Bcrypt para hash de contraseñas
- ✅ JWT para autenticación
- ✅ Validación de datos con express-validator
- ✅ Sanitización de entradas
- ✅ Rate limiting (por implementar)
- ✅ SQL Injection protection (Sequelize)

### Variables de Entorno

NUNCA commitear el archivo `.env` con valores sensibles.

## 🐛 Debugging

### Logs

Los logs se imprimen en consola. En producción, considerar usar Winston o similar.

### Inspección

```bash
node --inspect server.js
```

## 📖 Recursos

- [Express Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [JWT Documentation](https://jwt.io/)
- [Swagger Documentation](https://swagger.io/)

## 🤝 Contribución

1. Seguir la arquitectura en capas
2. Documentar endpoints con Swagger
3. Escribir tests para nueva funcionalidad
4. Seguir convenciones de código
5. Actualizar README si es necesario

## 📧 Soporte

Para soporte técnico, contactar al equipo de desarrollo.
=======
```bash
# Ejecutar todos los tests
npm test

# Tests en modo watch
npm run test:watch

# Coverage report
npm run test:coverage
```

## 🔍 Linting

```bash
# Verificar código
npm run lint

# Corregir automáticamente
npm run lint:fix
```

## 🗄️ Base de Datos

### Migraciones

```bash
# Ejecutar migraciones
npm run db:migrate
```

### Seeds

```bash
# Poblar base de datos con datos de prueba
npm run db:seed
```

### Esquema

Ver [docs/database-schema.md](./docs/database-schema.md) para el esquema completo de la base de datos.

## 📊 Logging

La API utiliza Morgan para logging HTTP. Los logs incluyen:
- Timestamp
- Método HTTP
- URL
- Status code
- Tiempo de respuesta

## 🔒 Seguridad

- **Helmet**: Headers de seguridad HTTP
- **CORS**: Configuración de CORS
- **JWT**: Tokens seguros con expiración
- **Bcrypt**: Hash de contraseñas
- **Validación**: Validación de entrada en todos los endpoints
- **Rate Limiting**: Protección contra ataques de fuerza bruta (TODO)

## 📈 Monitoreo

### Health Check

```bash
GET /health
=======
Edita el archivo `.env`:
```env
NODE_ENV=development
PORT=4000

# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=rootpassword
DB_NAME=sge_asi_erp

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h

# CORS
FRONTEND_URL=http://localhost:3000
```

### 3. Inicializar la base de datos
Ejecuta el script SQL para crear el esquema:

```bash
mysql -u root -p < src/config/database-schema.sql
```

O desde MySQL:
```sql
SOURCE src/config/database-schema.sql;
```

### 4. Crear usuario administrador
El script SQL crea un usuario admin por defecto:
- **Email**: admin@demo.com
- **Password**: Admin123! (debes actualizar el hash en el SQL)

Para generar un hash de contraseña:
```javascript
const bcrypt = require('bcryptjs');
const hash = bcrypt.hashSync('Admin123!', 10);
console.log(hash);
```

### 5. Iniciar el servidor

**Modo desarrollo (con recarga automática):**
```bash
npm run dev
```

**Modo producción:**
```bash
npm start
```

El servidor estará disponible en: `http://localhost:4000`

## Endpoints Principales

### Autenticación

#### POST /api/auth/register
Registra un nuevo usuario.
```json
{
  "tenantId": 1,
  "email": "user@example.com",
  "password": "SecurePass123!",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "roleId": 3
}
```

#### POST /api/auth/login
Inicia sesión y obtiene un token JWT.
```json
{
  "email": "admin@demo.com",
  "password": "Admin123!",
  "tenantSlug": "demo-company"
}
>>>>>>> origin/copilot/complete-authentication-and-tenants
```

Respuesta:
```json
{
  "success": true,
<<<<<<< HEAD
  "message": "API is running",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "environment": "development"
}
```

## 🐛 Debugging

Para habilitar logs de debug de Sequelize:

```env
NODE_ENV=development
```

## 🚢 Despliegue

### Docker Compose

Ver `docker-compose.yml` en la raíz del proyecto.

### Producción

1. Configurar variables de entorno
2. Ejecutar migraciones
3. Iniciar aplicación con `npm start`

## 📝 Convenciones de Código

- Usar camelCase para variables y funciones
- Usar PascalCase para clases y modelos
- Usar snake_case para nombres de base de datos
- Documentar funciones con JSDoc
- Validar todas las entradas
- Manejar errores apropiadamente

## 🤝 Contribución

1. Crear rama feature/bugfix
2. Hacer cambios
3. Ejecutar tests y linter
4. Crear Pull Request

## 📞 Soporte

Para soporte técnico, contactar al equipo de desarrollo.

## 📄 Licencia

Propietario: Consultora Medioambiental ASI
>>>>>>> origin/copilot/create-erp-module-structure
=======
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "admin@demo.com",
      "firstName": "Admin",
      "lastName": "User",
      "tenantId": 1,
      "tenantName": "Demo Company",
      "roles": ["Super Admin"],
      "permissions": ["auth.login", "tenant.view", ...]
    }
  }
}
```

#### GET /api/auth/me
Obtiene información del usuario autenticado.
Headers: `Authorization: Bearer <token>`

#### POST /api/auth/change-password
Cambia la contraseña del usuario.
Headers: `Authorization: Bearer <token>`
```json
{
  "oldPassword": "OldPass123!",
  "newPassword": "NewPass123!"
}
```

### Tenants (Empresas)

#### GET /api/tenants
Lista todos los tenants (requiere autenticación y permisos).
Query params: `?page=1&limit=10&status=active`

#### GET /api/tenants/:id
Obtiene un tenant por ID.

#### GET /api/tenants/slug/:slug
Obtiene un tenant por slug (público, para login).

#### POST /api/tenants
Crea un nuevo tenant.
Headers: `Authorization: Bearer <token>`
```json
{
  "name": "My Company",
  "slug": "my-company",
  "email": "contact@mycompany.com",
  "phone": "+1234567890",
  "address": "123 Main St",
  "logoUrl": "https://example.com/logo.png",
  "primaryColor": "#3B82F6",
  "secondaryColor": "#10B981"
}
```

#### PUT /api/tenants/:id
Actualiza un tenant existente.
Headers: `Authorization: Bearer <token>`

#### DELETE /api/tenants/:id
Elimina (desactiva) un tenant.
Headers: `Authorization: Bearer <token>`

#### PUT /api/tenants/:id/branding
Actualiza el branding de un tenant.
Headers: `Authorization: Bearer <token>`
```json
{
  "logoUrl": "https://example.com/new-logo.png",
  "primaryColor": "#1E40AF",
  "secondaryColor": "#059669"
}
```

## Documentación Swagger
La documentación completa de la API está disponible en:
```
http://localhost:4000/api-docs
```

## Autenticación y Autorización

### JWT (JSON Web Tokens)
Todos los endpoints protegidos requieren un token JWT en el header:
```
Authorization: Bearer <token>
```

El token contiene:
- `userId` - ID del usuario
- `tenantId` - ID del tenant
- `email` - Email del usuario
- `roles` - Array de roles del usuario
- `permissions` - Array de permisos del usuario

### Roles por Defecto
1. **Super Admin** - Acceso total al sistema
2. **Admin** - Acceso administrativo limitado
3. **User** - Acceso básico

### Permisos
Los permisos se validan en cada endpoint. Ejemplos:
- `tenant.view` - Ver tenants
- `tenant.create` - Crear tenants
- `tenant.update` - Actualizar tenants
- `tenant.delete` - Eliminar tenants
- `user.view` - Ver usuarios
- `auth.login` - Iniciar sesión

## Aislamiento de Tenants (Multitenancy)

El sistema implementa aislamiento completo de datos por tenant:

1. **A nivel de base de datos**: Cada registro tiene un `tenant_id`
2. **A nivel de middleware**: `tenantIsolation.js` valida el acceso
3. **A nivel de servicio**: Todas las consultas filtran por `tenant_id`

## Auditoría
Todas las operaciones sensibles se registran en la tabla `audit_logs`:
- Cambios en tenants
- Registro de usuarios
- Inicios de sesión
- Cambios de contraseña
- Cambios de permisos

## Pruebas

### Ejecutar pruebas unitarias
```bash
npm test
```

### Ejecutar con cobertura
```bash
npm test -- --coverage
```

## Comandos Útiles

```bash
# Instalar dependencias
npm install

# Desarrollo con recarga automática
npm run dev

# Producción
npm start

# Pruebas
npm test

# Pruebas con seguimiento
npm run test:watch
```

## Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| NODE_ENV | Entorno de ejecución | development |
| PORT | Puerto del servidor | 4000 |
| DB_HOST | Host de MySQL | localhost |
| DB_PORT | Puerto de MySQL | 3306 |
| DB_USER | Usuario de MySQL | root |
| DB_PASSWORD | Contraseña de MySQL | - |
| DB_NAME | Nombre de la base de datos | sge_asi_erp |
| JWT_SECRET | Secreto para JWT | - |
| JWT_EXPIRES_IN | Tiempo de expiración del token | 24h |
| FRONTEND_URL | URL del frontend para CORS | http://localhost:3000 |

## Seguridad

### Mejores Prácticas Implementadas
- ✅ Contraseñas encriptadas con bcrypt (10 rounds)
- ✅ JWT con expiración configurable
- ✅ Validación de entrada con express-validator
- ✅ Headers de seguridad con Helmet
- ✅ CORS configurado
- ✅ Bloqueo de cuenta tras 5 intentos fallidos
- ✅ Auditoría de operaciones sensibles
- ✅ Aislamiento de tenants estricto

### Recomendaciones para Producción
- Usar HTTPS
- Cambiar JWT_SECRET a valor seguro y aleatorio
- Configurar rate limiting
- Implementar logging robusto
- Configurar backups automáticos
- Usar variables de entorno seguras (no committed)

## Troubleshooting

### Error: Cannot connect to database
- Verifica que MySQL esté corriendo
- Verifica las credenciales en `.env`
- Verifica que la base de datos exista

### Error: Invalid token
- Verifica que el token no haya expirado
- Verifica que JWT_SECRET sea el mismo en todas las instancias

### Error: Permission denied
- Verifica que el usuario tenga los permisos necesarios
- Verifica que el rol tenga asignados los permisos correctos

## Contribución
Para contribuir al proyecto:
1. Mantén la estructura de carpetas
2. Documenta todos los endpoints en Swagger
3. Escribe pruebas para nuevas funcionalidades
4. Sigue las convenciones de código establecidas

## Licencia
ISC

## Contacto
Para soporte técnico o consultas, contacta al equipo de desarrollo.
>>>>>>> origin/copilot/complete-authentication-and-tenants
