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

```
API/
├── src/
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
```bash
cp .env.example .env
```

3. Configurar variables de entorno en `.env`:
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=sge_asi
DB_USER=root
DB_PASSWORD=password
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

```
http://localhost:3000/api-docs
```

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

- Facturas
- Pagos
- Aging report

### 9. Tesorería

- Órdenes de pago
- Conciliación bancaria
- Flujo de caja

### 10. Proveedores

- CRUD de proveedores
- Órdenes de compra
- Recepciones

## 🧪 Testing

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
