# SGE ASI - Sistema de Gestión Empresarial

Sistema ERP modular multitenant para consultora medioambiental, con arquitectura limpia y documentación completa.

## 🏗️ Arquitectura del Proyecto

Este proyecto está organizado en dos carpetas principales:

- **FRONT/**: Aplicación frontend con React + Vite + TailwindCSS
- **API/**: Backend con Node.js + Express + MySQL

## 🚀 Inicio Rápido

### Usando Docker Compose (Recomendado)

```bash
# Levantar todos los servicios (Frontend, API y MySQL)
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

Servicios disponibles:
- Frontend: http://localhost:5173
- API: http://localhost:3000
- MySQL: localhost:3306
- Swagger API Docs: http://localhost:3000/api-docs

### Desarrollo Local

#### Frontend (FRONT)

```bash
cd FRONT
npm install
npm run dev
```

Ver [FRONT/README.md](./FRONT/README.md) para más detalles.

#### Backend (API)

```bash
cd API
npm install
npm run dev
```

Ver [API/README.md](./API/README.md) para más detalles.

## 📦 Módulos del Sistema

1. **Autenticación y Seguridad** - Login, roles, permisos, auditoría
2. **Tenants** - Gestión de empresas, branding, configuración multitenant
3. **Centros de Costos** - Gestión de centros de costos con categorías predefinidas
4. **Inventarios** - Catálogo, movimientos, alertas de stock
5. **Gestión Documental** - Documentos, versiones, metadatos, búsqueda
6. **Clientes** - Registro, contratos, proyectos
7. **Empleados** - Perfil, roles, timesheets, capacitación
8. **Cartera** - Facturas, pagos, aging report
9. **Tesorería** - Órdenes de pago, conciliación, flujo de caja
10. **Proveedores** - Alta, catálogo, órdenes de compra, recepciones

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **TailwindCSS** - Framework CSS utility-first
- **React Router** - Navegación SPA
- **Axios** - Cliente HTTP
- **Zustand** - Gestión de estado

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MySQL** - Base de datos relacional
- **Sequelize** - ORM para MySQL
- **JWT** - Autenticación basada en tokens
- **Swagger/OpenAPI** - Documentación de API
- **Jest** - Testing framework

### DevOps
- **Docker & Docker Compose** - Containerización
- **ESLint & Prettier** - Linting y formato de código
- **Git** - Control de versiones

## 📖 Documentación

- [Tareas de Desarrollo](./tareas_copilot.md) - Guía paso a paso de implementación
- [Documentación API](./API/README.md) - Endpoints y ejemplos
- [Documentación Frontend](./FRONT/README.md) - Componentes y vistas
- [Documentación Base de Datos](./API/docs/database-schema.md) - Esquemas y relaciones

## 🏢 Arquitectura Multitenant

El sistema está diseñado como multitenant, permitiendo:
- Múltiples empresas/clientes en una misma instalación
- Aislamiento de datos por tenant
- Configuración y branding personalizado por tenant
- Escalabilidad horizontal

## 🔐 Seguridad

- Autenticación JWT
- Control de acceso basado en roles (RBAC)
- Auditoría completa de operaciones
- Validación de entrada en todos los endpoints
- Protección contra CSRF y XSS
- Encriptación de contraseñas con bcrypt

## 🧪 Testing

```bash
# Frontend tests
cd FRONT && npm test

# Backend tests
cd API && npm test

# Coverage report
cd API && npm run test:coverage
```

## 📝 Variables de Entorno

### Frontend (.env en FRONT/)
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=SGE ASI
```

### Backend (.env en API/)
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=sge_asi
DB_USER=root
DB_PASSWORD=password
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
```

## 🤝 Contribución

1. Crear una rama desde `main`
2. Hacer cambios y commit
3. Crear Pull Request
4. Esperar revisión y aprobación

## 📄 Licencia

Propietario: Consultora Medioambiental ASI

## 🔮 Roadmap

- [x] Estructura inicial del proyecto
- [ ] Implementación de módulos core
- [ ] Integración con World Office
- [ ] Módulo de reportes avanzados
- [ ] Aplicación móvil

## 📞 Soporte

Para soporte y consultas, contactar al equipo de desarrollo.
