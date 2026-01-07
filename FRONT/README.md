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

### Desarrollo

```bash
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

```jsx
import { useAuth } from './context/AuthContext';

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
- `/clients` - Clientes
- `/employees` - Empleados
- `/portfolio` - Cartera
- `/treasury` - Tesorería
- `/suppliers` - Proveedores

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

## 📝 Convenciones de Código

- Componentes en PascalCase
- Archivos de componentes con extensión `.jsx`
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
