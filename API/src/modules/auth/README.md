# Módulo de Autenticación - API

Sistema de autenticación basado en JWT con roles y permisos.

## 📋 Funcionalidades

- ✅ Login con email y contraseña
- ✅ Registro de usuarios
- ✅ Tokens JWT con expiración
- ✅ Refresh tokens
- ✅ Recuperación de contraseña
- ✅ Control de acceso basado en roles (RBAC)
- ✅ Auditoría de sesiones

## 🔌 Endpoints

### POST /api/auth/register
Registrar nuevo usuario.

**Request:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "password123",
  "name": "Juan Pérez",
  "tenantId": 1
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "email": "usuario@ejemplo.com",
      "name": "Juan Pérez",
      "role": "user"
    }
  }
}
```

### POST /api/auth/login
Iniciar sesión.

**Request:**
```json
{
  "email": "usuario@ejemplo.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "usuario@ejemplo.com",
      "name": "Juan Pérez",
      "role": "user",
      "tenantId": 1
    }
  }
}
```

### POST /api/auth/logout
Cerrar sesión (invalida token).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Logout successful"
}
```

### POST /api/auth/refresh
Renovar token de acceso.

**Request:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### GET /api/auth/me
Obtener información del usuario actual.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "usuario@ejemplo.com",
    "name": "Juan Pérez",
    "role": "user",
    "tenantId": 1,
    "lastLogin": "2024-01-15T10:30:00Z"
  }
}
```

### POST /api/auth/forgot-password
Solicitar recuperación de contraseña.

**Request:**
```json
{
  "email": "usuario@ejemplo.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password reset email sent"
}
```

### POST /api/auth/reset-password
Resetear contraseña con token.

**Request:**
```json
{
  "token": "reset-token-here",
  "newPassword": "newpassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Password reset successful"
}
```

## 🔐 Roles y Permisos

### Roles Predefinidos

1. **super_admin** - Acceso completo al sistema
2. **admin** - Administrador del tenant
3. **manager** - Gestor con permisos limitados
4. **user** - Usuario básico

### Estructura de Permisos

Los permisos siguen el formato: `resource:action`

Ejemplos:
- `users:read` - Ver usuarios
- `users:create` - Crear usuarios
- `users:update` - Actualizar usuarios
- `users:delete` - Eliminar usuarios
- `cost-centers:manage` - Gestión completa de centros de costos

## 🛡️ Middleware de Autenticación

### authenticateToken

Verifica que el usuario esté autenticado.

```javascript
const { authenticateToken } = require('@middleware/auth.middleware');

router.get('/protected', authenticateToken, (req, res) => {
  // req.user contiene información del usuario
  res.json({ user: req.user });
});
```

### authorize

Verifica que el usuario tenga el rol requerido.

```javascript
const { authenticateToken, authorize } = require('@middleware/auth.middleware');

router.delete('/users/:id', 
  authenticateToken, 
  authorize('admin', 'super_admin'),
  deleteUser
);
```

## 📝 Modelo de Usuario

```javascript
{
  id: 1,
  tenantId: 1,
  email: "usuario@ejemplo.com",
  password: "$2b$10$...", // Hashed with bcrypt
  name: "Juan Pérez",
  role: "user",
  isActive: true,
  lastLogin: "2024-01-15T10:30:00Z",
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-15T10:30:00Z"
}
```

## 🔒 Seguridad

### Hash de Contraseñas

Todas las contraseñas se hashean con bcrypt (cost factor 10):

```javascript
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
```

### JWT

Los tokens JWT contienen:
- `userId` - ID del usuario
- `email` - Email del usuario
- `role` - Rol del usuario
- `tenantId` - ID del tenant
- `iat` - Timestamp de emisión
- `exp` - Timestamp de expiración

**Duración de tokens:**
- Access token: 24 horas
- Refresh token: 7 días

### Validaciones

- Email debe ser válido
- Contraseña mínimo 8 caracteres
- Email único por tenant
- Tokens verificados en cada request

## 📊 Auditoría

Todas las operaciones de autenticación se registran en `audit_logs`:

- Login exitoso
- Login fallido
- Logout
- Registro de usuario
- Cambio de contraseña
- Recuperación de contraseña

## 🧪 Testing

```bash
# Ejecutar tests del módulo
npm test -- auth

# Coverage
npm run test:coverage -- auth
```

## 🔄 Flujo de Autenticación

1. Usuario envía credenciales al endpoint `/api/auth/login`
2. Sistema valida credenciales contra la base de datos
3. Si son válidas, genera token JWT y refresh token
4. Token se envía al cliente
5. Cliente incluye token en header `Authorization: Bearer <token>`
6. Middleware verifica token en cada request
7. Si token expira, cliente usa refresh token para obtener nuevo token

## 📖 Ejemplos de Uso

### Login desde Frontend

```javascript
import authService from '@services/auth.service';

async function login(email, password) {
  try {
    const response = await authService.login({ email, password });
    // Token automáticamente guardado en localStorage
    return response.data.user;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
}
```

### Proteger Rutas

```javascript
// Backend
router.get('/api/admin/users', 
  authenticateToken,
  authorize('admin', 'super_admin'),
  getUsers
);

// Frontend
function ProtectedRoute({ children, allowedRoles }) {
  const { user, isAuthenticated } = useAuthStore();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }
  
  return children;
}
```

## ⚠️ Notas Importantes

1. **Cambiar Secret en Producción**: El JWT_SECRET debe ser una cadena aleatoria segura.
2. **HTTPS Obligatorio**: En producción, usar siempre HTTPS.
3. **Rate Limiting**: Implementar rate limiting en endpoints de login para prevenir ataques de fuerza bruta.
4. **Contraseñas Seguras**: Forzar contraseñas seguras con políticas apropiadas.
5. **2FA**: Considerar implementar autenticación de dos factores para mayor seguridad.
