# SGE ASI ERP - Frontend

## Descripción
Aplicación frontend del sistema ERP multitenant SGE ASI. Construida con React, Vite y TailwindCSS.

## Tecnologías
- **React** v18 - Biblioteca de UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework CSS utilitario
- **React Router** - Navegación
- **Axios** - Cliente HTTP

## Estructura de Carpetas
```
FRONT/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   └── ProtectedRoute.jsx
│   ├── context/          # Context API (AuthContext)
│   │   └── AuthContext.jsx
│   ├── pages/            # Páginas/Vistas
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   └── Tenants.jsx
│   ├── services/         # Servicios API
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── tenantService.js
│   ├── utils/            # Utilidades
│   ├── assets/           # Recursos estáticos
│   ├── App.jsx           # Componente principal
│   ├── main.jsx          # Punto de entrada
│   └── index.css         # Estilos globales
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Instalación y Configuración

### 1. Instalar dependencias
```bash
cd FRONT
npm install
```

### 2. Configurar variables de entorno
Copia el archivo `.env.example` a `.env`:

```bash
cp .env.example .env
```

Edita el archivo `.env`:
```env
VITE_API_URL=http://localhost:4000/api
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000`

## Comandos Disponibles

```bash
# Desarrollo con hot reload
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview

# Linting
npm run lint
```

## Características Implementadas

### Autenticación
- ✅ Login con email, password y tenant slug
- ✅ Gestión de sesión con JWT
- ✅ Persistencia de sesión en localStorage
- ✅ AuthContext para manejo global de autenticación
- ✅ Rutas protegidas con validación de permisos
- ✅ Cierre de sesión

### Gestión de Tenants (Empresas)
- ✅ Listado de empresas con paginación
- ✅ Crear nueva empresa
- ✅ Editar empresa existente
- ✅ Eliminar empresa (soft delete)
- ✅ Personalización de branding (colores)
- ✅ Validación de permisos por operación

### Dashboard
- ✅ Vista general del sistema
- ✅ Información del usuario y tenant
- ✅ Acceso rápido a módulos
- ✅ Estadísticas básicas

## Módulos Principales

### AuthContext
Proporciona funciones y estado de autenticación global:

```jsx
import { useAuth } from './context/AuthContext';

function MyComponent() {
  const { 
    user, 
    token, 
    isAuthenticated, 
    login, 
    logout, 
    hasPermission, 
    hasRole 
  } = useAuth();
  
  // Usar funciones de autenticación
}
```

**Funciones disponibles:**
- `login(email, password, tenantSlug)` - Iniciar sesión
- `logout()` - Cerrar sesión
- `register(userData)` - Registrar usuario
- `hasPermission(permission)` - Verificar permiso
- `hasRole(role)` - Verificar rol
- `hasAnyRole(roles)` - Verificar múltiples roles

### Servicios API

#### authService
```javascript
import authService from './services/authService';

// Login
await authService.login(email, password, tenantSlug);

// Registro
await authService.register(userData);

// Obtener usuario actual
await authService.getCurrentUser();

// Cambiar contraseña
await authService.changePassword(oldPassword, newPassword);
```

#### tenantService
```javascript
import tenantService from './services/tenantService';

// Listar tenants
await tenantService.getAllTenants(page, limit, status);

// Obtener por ID
await tenantService.getTenantById(id);

// Obtener por slug
await tenantService.getTenantBySlug(slug);

// Crear tenant
await tenantService.createTenant(data);

// Actualizar tenant
await tenantService.updateTenant(id, data);

// Eliminar tenant
await tenantService.deleteTenant(id);

// Actualizar branding
await tenantService.updateBranding(id, brandingData);
```

### Rutas Protegidas

```jsx
import ProtectedRoute from './components/ProtectedRoute';

// Ruta protegida simple
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>

// Ruta con permiso requerido
<Route 
  path="/tenants" 
  element={
    <ProtectedRoute requiredPermission="tenant.view">
      <Tenants />
    </ProtectedRoute>
  } 
/>
```

## Páginas

### Login (`/login`)
- Formulario de inicio de sesión
- Campos: email, password, tenant slug
- Redirección automática al dashboard tras login exitoso
- Mensajes de error claros

### Dashboard (`/dashboard`)
- Vista principal tras login
- Información del usuario actual
- Estadísticas básicas
- Acceso rápido a módulos del sistema
- Módulos disponibles según permisos

### Tenants (`/tenants`)
- Listado completo de empresas
- CRUD de tenants con modal
- Personalización de branding
- Validación de permisos
- Filtros y búsqueda (próximamente)

## Permisos del Sistema

El frontend valida los siguientes permisos:

### Autenticación
- `auth.login` - Iniciar sesión
- `auth.logout` - Cerrar sesión

### Tenants
- `tenant.view` - Ver tenants
- `tenant.create` - Crear tenant
- `tenant.update` - Actualizar tenant
- `tenant.delete` - Eliminar tenant
- `tenant.manage_branding` - Gestionar branding

## Flujo de Autenticación

1. Usuario ingresa credenciales en `/login`
2. Frontend envía POST a `/api/auth/login`
3. Backend valida y retorna JWT + datos de usuario
4. Frontend guarda token y user en localStorage
5. AuthContext actualiza estado global
6. Usuario es redirigido a `/dashboard`
7. Todas las peticiones subsecuentes incluyen el token JWT

### Persistencia de Sesión
- Token y usuario se guardan en `localStorage`
- Al recargar la página, AuthContext restaura la sesión
- Si el token expira, el usuario es redirigido a `/login`

## Estilos y Diseño

### TailwindCSS
Utilizamos TailwindCSS para estilos utilitarios:

```jsx
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
  Botón
</button>
```

### Colores Personalizados
Los colores primarios están definidos en `tailwind.config.js`:
- Primary: Azul (#3B82F6)
- Secondary: Verde (#10B981)

### Responsive Design
Todas las páginas son completamente responsive:
- Mobile first
- Breakpoints: sm, md, lg, xl

## Integración con Backend

### Configuración de API
El cliente HTTP está configurado en `src/services/api.js`:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';
```

### Interceptores
- **Request**: Añade token JWT automáticamente
- **Response**: Maneja errores 401 (token inválido/expirado)

### Manejo de Errores
```javascript
try {
  const response = await tenantService.createTenant(data);
  // Éxito
} catch (error) {
  // Error - puede acceder a error.response.data.message
  console.error(error.response?.data?.message);
}
```

## Usuario Demo

Para probar el sistema, usa las siguientes credenciales:

- **Tenant Slug**: `demo-company`
- **Email**: `admin@demo.com`
- **Password**: `Admin123!`
- **Rol**: Super Admin (todos los permisos)

## Desarrollo

### Añadir una Nueva Página

1. Crear el componente en `src/pages/`:
```jsx
// src/pages/NewPage.jsx
const NewPage = () => {
  return <div>Nueva Página</div>;
};
export default NewPage;
```

2. Añadir la ruta en `App.jsx`:
```jsx
<Route 
  path="/new-page" 
  element={
    <ProtectedRoute requiredPermission="permission.name">
      <NewPage />
    </ProtectedRoute>
  } 
/>
```

### Añadir un Nuevo Servicio

1. Crear el servicio en `src/services/`:
```javascript
// src/services/myService.js
import apiClient from './api';

class MyService {
  async getData() {
    return await apiClient.get('/my-endpoint');
  }
}

export default new MyService();
```

2. Usar el servicio en componentes:
```jsx
import myService from '../services/myService';

const data = await myService.getData();
```

## Build para Producción

```bash
# Compilar
npm run build

# Los archivos compilados estarán en dist/
# Puedes servir la carpeta dist con cualquier servidor estático
```

### Servidor de Producción
Puedes usar nginx, Apache o cualquier servidor estático:

```nginx
server {
  listen 80;
  server_name example.com;
  root /path/to/dist;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

## Variables de Entorno

| Variable | Descripción | Valor por defecto |
|----------|-------------|-------------------|
| VITE_API_URL | URL base de la API | http://localhost:4000/api |

**Nota**: Las variables en Vite deben empezar con `VITE_` para ser expuestas al cliente.

## Troubleshooting

### Error: API connection refused
- Verifica que el backend esté corriendo en el puerto 4000
- Verifica la variable `VITE_API_URL` en `.env`

### Error: Token invalid
- El token ha expirado - vuelve a iniciar sesión
- Verifica que JWT_SECRET sea el mismo en frontend y backend

### Estilos no se aplican
- Ejecuta `npm install` para instalar TailwindCSS
- Verifica que `index.css` importe las directivas de Tailwind

### Hot reload no funciona
- Reinicia el servidor de desarrollo: `npm run dev`
- Limpia la caché: `rm -rf node_modules/.vite`

## Próximas Funcionalidades

- [ ] Registro de usuarios desde frontend
- [ ] Perfil de usuario editable
- [ ] Cambio de contraseña desde UI
- [ ] Gestión de roles y permisos
- [ ] Módulo de usuarios
- [ ] Dashboard con gráficos
- [ ] Notificaciones en tiempo real
- [ ] Búsqueda y filtros avanzados
- [ ] Exportación de datos
- [ ] Temas claro/oscuro

## Contribución

Para contribuir al proyecto:
1. Mantén la estructura de carpetas
2. Sigue las convenciones de React y JavaScript
3. Usa TailwindCSS para estilos
4. Documenta componentes complejos
5. Prueba en diferentes navegadores

## Licencia
ISC

## Contacto
Para soporte técnico o consultas, contacta al equipo de desarrollo.
