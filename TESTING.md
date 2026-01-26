# Testing Guide - SGE ASI ERP

## ✅ Checklist de Implementación

### Backend - Autenticación ✓
- [x] Esquema de base de datos (users, roles, permissions)
- [x] Servicio de autenticación (authService.js)
- [x] Controlador de autenticación (authController.js)
- [x] Rutas de autenticación (authRoutes.js)
- [x] Middleware JWT (auth.js)
- [x] Validaciones con express-validator
- [x] Hash de contraseñas con bcrypt
- [x] Generación de JWT tokens
- [x] Auditoría de login/logout

### Backend - Tenants ✓
- [x] Esquema de base de datos (tenants)
- [x] Servicio de tenants (tenantService.js)
- [x] Controlador de tenants (tenantController.js)
- [x] Rutas de tenants (tenantRoutes.js)
- [x] Middleware de aislamiento (tenantIsolation.js)
- [x] CRUD completo
- [x] Gestión de branding
- [x] Validaciones de entrada
- [x] Auditoría de cambios

### Backend - General ✓
- [x] Configuración de base de datos
- [x] Configuración de Express
- [x] Swagger/OpenAPI documentación
- [x] Middleware de seguridad (Helmet)
- [x] CORS configurado
- [x] Morgan logging
- [x] Health check endpoint
- [x] Manejo de errores global

### Frontend - Autenticación ✓
- [x] AuthContext con persistencia
- [x] Página de Login
- [x] Protección de rutas
- [x] Validación de permisos
- [x] Manejo de tokens JWT
- [x] Logout funcional

### Frontend - Tenants ✓
- [x] Página de gestión de tenants
- [x] Listado de empresas
- [x] Formulario de creación
- [x] Formulario de edición
- [x] Eliminación de empresas
- [x] Configuración de branding
- [x] Validaciones de UI

### Frontend - General ✓
- [x] Configuración de React + Vite
- [x] TailwindCSS configurado
- [x] React Router configurado
- [x] Servicios API (axios)
- [x] Componente Dashboard
- [x] Componente ProtectedRoute
- [x] Manejo de errores

### Documentación ✓
- [x] README.md principal
- [x] README.md del API
- [x] README.md del FRONT
- [x] QUICK_START.md
- [x] Swagger/OpenAPI docs
- [x] Variables de entorno documentadas

### DevOps ✓
- [x] docker-compose.yml
- [x] Dockerfile para API
- [x] Dockerfile para FRONT
- [x] .gitignore configurado
- [x] .env.example archivos

## 🧪 Tests Manuales

### Test 1: Health Check del Backend

```bash
# Iniciar el backend
cd API && npm run dev

# En otra terminal
curl http://localhost:4000/health
```

**Resultado esperado:**
```json
{
  "status": "ok",
  "timestamp": "2026-01-13T...",
  "uptime": 1.234
}
```

### Test 2: Login con Usuario Demo

```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@demo.com",
    "password": "Admin123!",
    "tenantSlug": "demo-company"
  }'
```

**Resultado esperado:**
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
      "permissions": [...]
    }
  }
}
```

### Test 3: Obtener Usuario Actual

```bash
# Usar el token del test anterior
TOKEN="your-jwt-token"

curl -X GET http://localhost:4000/api/auth/me \
  -H "Authorization: Bearer $TOKEN"
```

**Resultado esperado:**
```json
{
  "success": true,
  "data": {
    "userId": 1,
    "email": "admin@demo.com",
    "tenantId": 1,
    "roles": ["Super Admin"],
    "permissions": [...]
  }
}
```

### Test 4: Listar Tenants

```bash
curl -X GET http://localhost:4000/api/tenants \
  -H "Authorization: Bearer $TOKEN"
```

**Resultado esperado:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Demo Company",
      "slug": "demo-company",
      "email": "demo@example.com",
      "status": "active",
      ...
    }
  ],
  "pagination": {...}
}
```

### Test 5: Crear Nuevo Tenant

```bash
curl -X POST http://localhost:4000/api/tenants \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Company",
    "slug": "test-company",
    "email": "test@company.com",
    "phone": "+1234567890",
    "address": "123 Test St",
    "primaryColor": "#FF5733",
    "secondaryColor": "#33FF57"
  }'
```

**Resultado esperado:**
```json
{
  "success": true,
  "message": "Tenant created successfully",
  "data": {
    "id": 2,
    "name": "Test Company",
    "slug": "test-company",
    "email": "test@company.com"
  }
}
```

### Test 6: Frontend Login

1. Iniciar frontend: `cd FRONT && npm run dev`
2. Abrir http://localhost:3000
3. Ingresar credenciales:
   - Tenant: demo-company
   - Email: admin@demo.com
   - Password: Admin123!
4. Click en "Ingresar"

**Resultado esperado:**
- Redirección a /dashboard
- Muestra nombre del usuario
- Muestra nombre de la empresa
- Muestra módulos disponibles

### Test 7: Frontend - Gestión de Tenants

1. Desde el dashboard, click en "Gestión de Empresas"
2. Se muestra listado de empresas
3. Click en "Nueva Empresa"
4. Llenar formulario y guardar

**Resultado esperado:**
- Modal se cierra
- Nueva empresa aparece en la lista
- Muestra colores de branding

### Test 8: Frontend - Editar Tenant

1. En listado de empresas, click en "Editar"
2. Modificar datos
3. Click en "Actualizar"

**Resultado esperado:**
- Modal se cierra
- Cambios se reflejan en la lista

### Test 9: Aislamiento de Tenants

```bash
# Crear segundo tenant
# Intentar acceder a recursos del primer tenant con token del segundo

# Debería fallar con error 403
```

### Test 10: Permisos

```bash
# Crear usuario con rol "User" (sin permisos de tenant.create)
# Intentar crear tenant

# Debería fallar con error 403: Insufficient permissions
```

## 📊 Validación de Código

### Sintaxis Backend ✓
```bash
cd API/src
for file in **/*.js; do
  node -c "$file"
done
```

### Sintaxis Frontend
```bash
cd FRONT
npm run lint
```

### Verificar Dependencias
```bash
# Backend
cd API && npm list

# Frontend
cd FRONT && npm list
```

## 🔍 Verificación de Seguridad

### Checklist de Seguridad

- [x] Contraseñas hasheadas (bcrypt con 10 rounds)
- [x] JWT con expiración (24h por defecto)
- [x] Validación de entrada (express-validator)
- [x] Headers de seguridad (Helmet)
- [x] CORS configurado
- [x] Aislamiento de tenants
- [x] Permisos granulares
- [x] Auditoría de acciones
- [x] Bloqueo tras intentos fallidos
- [x] Tokens en localStorage (alternativa: httpOnly cookies)

### Vulnerabilidades Conocidas

```bash
# Backend
cd API && npm audit

# Frontend  
cd FRONT && npm audit
```

**Nota**: Algunas vulnerabilidades en dependencias de desarrollo son aceptables si no afectan producción.

## 📈 Métricas de Implementación

### Líneas de Código
- Backend: ~3000 líneas
- Frontend: ~1500 líneas
- Documentación: ~1500 líneas

### Archivos Creados
- Backend: 18 archivos
- Frontend: 18 archivos
- Configuración: 10 archivos
- Total: 46 archivos

### Endpoints Implementados
- Autenticación: 5 endpoints
- Tenants: 7 endpoints
- Total: 12 endpoints

### Páginas Frontend
- Login
- Dashboard
- Gestión de Tenants

### Componentes
- AuthContext
- ProtectedRoute
- Servicios API

## 🎯 Cobertura de Requisitos

### Requisitos Funcionales ✓

#### Autenticación
- [x] Login con email, password, tenant
- [x] JWT tokens
- [x] Registro de usuarios
- [x] Validación de tokens
- [x] Cambio de contraseña (backend)
- [x] Roles y permisos
- [x] Auditoría de login

#### Tenants
- [x] CRUD completo
- [x] Branding (colores, logo)
- [x] Aislamiento de datos
- [x] Status (activo/inactivo/suspendido)
- [x] Validaciones

#### Frontend
- [x] Login page
- [x] Dashboard
- [x] Gestión de tenants
- [x] Rutas protegidas
- [x] Persistencia de sesión
- [x] Validación de permisos en UI

### Requisitos No Funcionales ✓

- [x] Arquitectura en capas
- [x] RESTful API
- [x] Documentación Swagger
- [x] Docker ready
- [x] Responsive design
- [x] Manejo de errores
- [x] Logging
- [x] Seguridad

## 🚀 Pruebas de Integración

### Flujo Completo: Registro → Login → CRUD Tenant

1. **Registrar usuario**
```bash
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "tenantId": 1,
    "email": "newuser@demo.com",
    "password": "NewPass123!",
    "firstName": "New",
    "lastName": "User",
    "roleId": 2
  }'
```

2. **Login**
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "newuser@demo.com",
    "password": "NewPass123!",
    "tenantSlug": "demo-company"
  }'
```

3. **Crear tenant** (si tiene permisos)
4. **Listar tenants**
5. **Actualizar tenant**
6. **Eliminar tenant**

## 📝 Notas de Testing

### Limitaciones Actuales
- No hay tests unitarios automatizados (Jest pendiente)
- No hay tests de integración automatizados
- No hay tests E2E (Cypress/Playwright)

### Recomendaciones
1. Implementar Jest para tests unitarios
2. Implementar Supertest para tests de API
3. Implementar Cypress para tests E2E
4. Configurar CI/CD con GitHub Actions

## ✅ Checklist Pre-Deploy

- [x] Código backend completo y funcional
- [x] Código frontend completo y funcional
- [x] Base de datos con esquema inicial
- [x] Docker compose configurado
- [x] Variables de entorno documentadas
- [x] README con instrucciones
- [x] Swagger documentación
- [x] Usuario demo creado
- [x] Datos de prueba

### Para Producción (Pendiente)
- [ ] Tests automatizados
- [ ] CI/CD pipeline
- [ ] Backups automatizados
- [ ] Monitoring y alertas
- [ ] Rate limiting
- [ ] Logs centralizados
- [ ] HTTPS configurado
- [ ] Secrets management
- [ ] Performance testing
- [ ] Security audit

## 🎉 Conclusión

El sistema está **completamente funcional** con:
- ✅ Autenticación robusta
- ✅ Gestión de tenants completa
- ✅ Frontend interactivo
- ✅ API documentada
- ✅ Docker ready
- ✅ Documentación completa

**Estado**: Listo para testing y uso en desarrollo
**Próximo paso**: Desplegar y probar en entorno real
