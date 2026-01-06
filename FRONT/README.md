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

### Desarrollo

```bash
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
- `/clients` - Clientes
- `/employees` - Empleados
- `/portfolio` - Cartera
- `/treasury` - Tesorería
- `/suppliers` - Proveedores

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

## 📝 Convenciones de Código

- Componentes en PascalCase
- Archivos de componentes con extensión `.jsx`
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
