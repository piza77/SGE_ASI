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

```bash
cp .env.example .env
```

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
```

Respuesta:
```json
{
  "success": true,
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
