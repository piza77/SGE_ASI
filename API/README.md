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

```
API/
├── src/
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

```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=sge_asi
DB_USER=root
DB_PASSWORD=password
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

```
http://localhost:3000/api-docs
```

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
- Facturas
- Pagos
- Aging report

### 9. Tesorería (`/api/treasury`)
- Órdenes de pago
- Conciliación bancaria
- Flujo de caja

### 10. Proveedores (`/api/suppliers`)
- Alta de proveedores
- Órdenes de compra
- Recepciones

## 🧪 Testing

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
```

Respuesta:
```json
{
  "success": true,
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
