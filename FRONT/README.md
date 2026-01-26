<<<<<<< HEAD
<<<<<<< HEAD
# Frontend - Sistema de Gestión Empresarial (SGE) ASI

Frontend del sistema ERP modular multitenant desarrollado con React, Vite y TailwindCSS.

## 🛠️ Tecnologías

- **React 19** - Biblioteca de UI
- **Vite 7** - Build tool y dev server
- **TailwindCSS 3** - Framework de CSS utility-first
- **React Router DOM** - Enrutamiento
- **Axios** - Cliente HTTP
- **ESLint** - Linter de código

## 📁 Estructura de Carpetas

```
src/
├── components/          # Componentes reutilizables
│   ├── common/         # Componentes genéricos (Button, Input, Card, etc.)
│   ├── layout/         # Componentes de layout (Header, Sidebar, Footer)
│   └── modules/        # Componentes específicos por módulo
│       ├── auth/
│       ├── tenants/
│       ├── costCenters/
│       ├── inventory/
│       ├── documents/
│       ├── clients/
│       ├── employees/
│       ├── portfolio/
│       ├── treasury/
│       └── suppliers/
├── pages/              # Páginas principales
│   ├── auth/          # Login, Register
│   ├── dashboard/     # Dashboard principal
│   └── [módulos]/     # Páginas por módulo
├── layouts/            # Layouts de la aplicación
│   ├── MainLayout.jsx
│   └── AuthLayout.jsx
├── services/           # Servicios para llamadas API
│   ├── api.js         # Configuración de Axios
│   └── [módulos]Service.js
├── context/            # Context API para estado global
│   └── AuthContext.jsx
├── hooks/              # Custom hooks
├── utils/              # Utilidades y helpers
├── assets/             # Imágenes, iconos, etc.
├── App.jsx             # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🚀 Comandos Disponibles
=======
# Frontend React + Vite - SGE ASI

Frontend del Sistema de Gestión Empresarial ASI. Construido con React, Vite y TailwindCSS.

## 🚀 Tecnologías

- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework CSS utility-first
- **React Router** - Navegación SPA
- **Axios** - Cliente HTTP
- **Zustand** - Gestión de estado
- **Headless UI** - Componentes accesibles
- **Heroicons** - Iconos
- **React Hook Form** - Formularios
- **Yup** - Validación de esquemas

## 📁 Estructura del Proyecto

```
FRONT/
├── src/
│   ├── assets/           # Imágenes, fonts, etc.
│   ├── components/       # Componentes reutilizables
│   │   ├── common/      # Botones, inputs, modals, etc.
│   │   └── layout/      # Layouts (Dashboard, Auth)
│   ├── modules/         # Módulos por funcionalidad
│   │   ├── auth/       # Autenticación
│   │   ├── tenants/    # Gestión de tenants
│   │   ├── cost-centers/ # Centros de costos
│   │   ├── inventory/  # Inventarios
│   │   ├── documents/  # Gestión documental
│   │   ├── clients/    # Clientes
│   │   ├── employees/  # Empleados
│   │   ├── portfolio/  # Cartera
│   │   ├── treasury/   # Tesorería
│   │   └── suppliers/  # Proveedores
│   ├── services/        # Servicios API
│   ├── store/          # Estado global (Zustand)
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utilidades
│   ├── router/         # Configuración de rutas
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── Dockerfile
└── README.md
```

## 🏗️ Arquitectura de Módulos

Cada módulo sigue esta estructura:

```
module-name/
├── pages/          # Páginas/vistas del módulo
├── components/     # Componentes específicos del módulo
├── services/       # Llamadas API del módulo
├── hooks/         # Hooks personalizados del módulo
└── README.md      # Documentación del módulo
```

## 🛠️ Instalación y Configuración

### Requisitos Previos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar archivo de variables de entorno
cp .env.example .env

# Editar .env con tu configuración
nano .env
```

### Variables de Entorno

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=SGE ASI
VITE_APP_VERSION=1.0.0
```

## 🚀 Ejecución
>>>>>>> origin/copilot/create-erp-module-structure

### Desarrollo

```bash
<<<<<<< HEAD
npm run dev
```

Inicia el servidor de desarrollo en http://localhost:5173

### Build

```bash
npm run build
```

Genera los archivos optimizados para producción en la carpeta `dist/`

### Preview

```bash
npm run preview
```

Previsualiza la build de producción localmente

### Lint

```bash
npm run lint
```

Ejecuta ESLint para verificar el código

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo `.env`:
```bash
cp .env.example .env
```

3. Configurar variables de entorno:
```env
VITE_API_URL=http://localhost:3000/api
```

4. Iniciar servidor de desarrollo:
```bash
npm run dev
```

## 🎨 Componentes Comunes

### Button

```jsx
import Button from './components/common/Button';

<Button variant="primary" size="md" onClick={handleClick}>
  Guardar
</Button>
```

Variantes: `primary`, `secondary`, `danger`, `success`, `outline`
Tamaños: `sm`, `md`, `lg`

### Input

```jsx
import Input from './components/common/Input';

<Input
  label="Email"
  type="email"
  name="email"
  value={email}
  onChange={handleChange}
  required
/>
```

### Card

```jsx
import Card from './components/common/Card';

<Card title="Título de la tarjeta">
  Contenido de la tarjeta
</Card>
```

### Loading

```jsx
import Loading from './components/common/Loading';

<Loading size="md" />
```

## 🔐 Autenticación

El sistema utiliza Context API para gestionar el estado de autenticación:
=======
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
>>>>>>> origin/copilot/complete-authentication-and-tenants

```jsx
import { useAuth } from './context/AuthContext';

<<<<<<< HEAD
const { user, login, logout, isAuthenticated } = useAuth();
```

Las rutas protegidas requieren autenticación y redirigen a `/login` si el usuario no está autenticado.

## 🌐 Servicios API

Todos los servicios utilizan la instancia configurada de Axios que incluye:
- Base URL desde variables de entorno
- Interceptores para agregar token JWT automáticamente
- Interceptores para manejar errores de autenticación
- Header `X-Tenant-ID` para soporte multitenant

Ejemplo de uso:

```jsx
import api from './services/api';

const fetchData = async () => {
  try {
    const response = await api.get('/endpoint');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
```

## 📱 Rutas de la Aplicación

### Rutas Públicas
- `/login` - Inicio de sesión
- `/register` - Registro de usuario
- `/forgot-password` - Recuperación de contraseña

### Rutas Protegidas
- `/dashboard` - Dashboard principal
- `/tenants` - Gestión de tenants
- `/cost-centers` - Centros de costos
- `/inventory` - Inventario
- `/documents` - Gestión documental
=======
# Iniciar servidor de desarrollo
npm run dev

# Disponible en http://localhost:5173
```

### Producción

```bash
# Construir para producción
npm run build

# Vista previa de build
npm run preview
```

### Docker

```bash
# Construir imagen
docker build -t sge-asi-front .

# Ejecutar contenedor
docker run -p 5173:5173 sge-asi-front
```

## 🎨 Sistema de Diseño

### Colores

- **Primary**: Azul (usado para acciones principales)
- **Secondary**: Gris (usado para contenido secundario)
- **Success**: Verde
- **Warning**: Amarillo
- **Error**: Rojo

### Componentes Base

Los componentes comunes están en `src/components/common/`:

- **Button** - Botones con variantes (primary, secondary, danger, outline)
- **Input** - Campos de entrada con validación
- **Select** - Dropdowns personalizados
- **Modal** - Ventanas modales
- **Table** - Tablas con paginación
- **Card** - Tarjetas de contenido
- **Alert** - Mensajes de alerta
- **Loader** - Indicadores de carga

### Layouts

Dos layouts principales:

1. **AuthLayout** - Para login y registro
2. **DashboardLayout** - Para la aplicación principal (sidebar + header + contenido)

## 🔌 Integración con API

### Configuración de Axios

El servicio API está configurado en `src/services/api.js`:

```javascript
import api from '@services/api';

// Ejemplo de uso
const getUsers = async () => {
  const response = await api.get('/api/users');
  return response.data;
};
```

### Interceptores

- **Request**: Añade automáticamente el token JWT
- **Response**: Maneja errores globalmente y redirige al login si el token expira

## 🗺️ Rutas

### Rutas Públicas
- `/login` - Página de login
- `/register` - Página de registro

### Rutas Protegidas (requieren autenticación)
- `/dashboard` - Dashboard principal
- `/tenants` - Gestión de tenants
- `/cost-centers` - Centros de costos
- `/inventory` - Inventarios
- `/documents` - Documentos
>>>>>>> origin/copilot/create-erp-module-structure
- `/clients` - Clientes
- `/employees` - Empleados
- `/portfolio` - Cartera
- `/treasury` - Tesorería
- `/suppliers` - Proveedores

<<<<<<< HEAD
## 🎨 Personalización de Estilos

Los colores principales se pueden personalizar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Personalizar colores aquí
      },
    },
  },
}
```

## 🔄 Estado Global

El estado global se maneja con Context API. Para agregar nuevo contexto:

1. Crear archivo en `src/context/`
2. Definir Provider y hook personalizado
3. Envolver la aplicación con el Provider en `App.jsx`
=======
## 📦 Gestión de Estado

### Zustand Stores

- **authStore** - Estado de autenticación (usuario, token)
- **uiStore** - Estado de UI (sidebar, loading, notificaciones)

Ejemplo de uso:

```javascript
import useAuthStore from '@store/authStore';

function MyComponent() {
  const { user, isAuthenticated } = useAuthStore();
  
  return (
    <div>
      {isAuthenticated ? `Hola ${user.name}` : 'No autenticado'}
    </div>
  );
}
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests con UI
npm run test:ui

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

## 📱 Responsive Design

La aplicación es completamente responsive y funciona en:
- Desktop (1920px+)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (< 768px)

## ♿ Accesibilidad

- Uso de componentes accesibles de Headless UI
- Soporte de navegación por teclado
- Labels apropiados en formularios
- Contraste de colores WCAG AA

## 🎯 Módulos Principales

### 1. Dashboard
Vista principal con resumen de métricas y accesos rápidos.

### 2. Autenticación
- Login
- Registro
- Recuperación de contraseña
- Perfil de usuario

### 3. Tenants
Gestión multitenant con configuración de branding.

### 4. Centros de Costos
Gestión de centros con categorías y seguimiento de costos.

### 5. Inventarios
Catálogo de productos, movimientos y alertas.

### 6. Gestión Documental
Repositorio de documentos con versionamiento.

### 7. Clientes
Gestión de clientes, contratos y proyectos.

### 8. Empleados
Directorio, timesheets y capacitación.

### 9. Cartera
Facturas, pagos y reportes.

### 10. Tesorería
Órdenes de pago y flujo de caja.

### 11. Proveedores
Alta de proveedores y órdenes de compra.

## 🔐 Autenticación

La autenticación se maneja con JWT:

1. Usuario hace login
2. API devuelve token JWT
3. Token se guarda en localStorage
4. Todas las peticiones incluyen el token
5. Si token expira, usuario es redirigido a login

## 📊 Performance

- Code splitting por rutas
- Lazy loading de componentes
- Optimización de imágenes
- Caching de assets estáticos

## 🐛 Debugging

### React DevTools

Instalar extensión de React DevTools para debugging.

### Vite DevTools

El servidor de desarrollo incluye HMR (Hot Module Replacement).

## 🚢 Despliegue

### Build para Producción

```bash
npm run build
```

Genera archivos optimizados en `dist/`.

### Deployment

El frontend puede desplegarse en:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Nginx
- Docker
>>>>>>> origin/copilot/create-erp-module-structure

## 📝 Convenciones de Código

- Componentes en PascalCase
- Archivos de componentes con extensión `.jsx`
<<<<<<< HEAD
- Funciones y variables en camelCase
- Constantes en UPPER_SNAKE_CASE
- Comentarios en español
- Código en inglés

## 🐛 Debugging

Para debugging en desarrollo:
1. Usar React Developer Tools
2. Verificar Network tab en DevTools
3. Revisar console para errores
4. Usar breakpoints en el código

## 🚀 Despliegue

### Docker

```bash
docker build -t sge-frontend .
docker run -p 5173:5173 sge-frontend
```

### Build Manual

```bash
npm run build
# Los archivos están en dist/
# Servir con cualquier servidor estático
```

## 📖 Recursos

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [React Router Documentation](https://reactrouter.com/)

## 🤝 Contribución

1. Seguir las convenciones de código establecidas
2. Crear componentes reutilizables cuando sea posible
3. Documentar componentes complejos
4. Mantener la estructura de carpetas
5. Usar TailwindCSS para estilos

## 📧 Soporte

Para soporte técnico, contactar al equipo de desarrollo.
=======
- Hooks con prefijo `use`
- Servicios con sufijo `.service.js`
- Stores con sufijo `Store.js`
- Usar destructuring de props
- Evitar prop drilling (usar context o state management)

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
>>>>>>> origin/copilot/complete-authentication-and-tenants
