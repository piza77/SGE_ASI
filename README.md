# Sistema de Gestión Empresarial (SGE) - ASI

Sistema ERP modular multitenant para consultora medioambiental con arquitectura limpia y documentación completa.

## 🎯 Objetivo

Construir un sistema ERP modular multitenant que permite gestionar múltiples empresas con funcionalidades completas de administración, finanzas, recursos humanos, inventario y gestión documental.

## 🏗️ Arquitectura

El sistema está dividido en dos componentes principales:

- **FRONT**: Aplicación frontend con React + Vite + TailwindCSS
- **API**: Backend RESTful con Node.js + Express + MySQL

## 📁 Estructura del Proyecto

```
SGE_ASI/
├── FRONT/                    # Aplicación Frontend
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/           # Páginas por módulo
│   │   ├── layouts/         # Layouts de la aplicación
│   │   ├── services/        # Servicios API
│   │   └── utils/           # Utilidades
│   ├── public/
│   └── README.md
├── API/                      # Aplicación Backend
│   ├── src/
│   │   ├── routes/          # Rutas de la API
│   │   ├── controllers/     # Controladores
│   │   ├── services/        # Lógica de negocio
│   │   ├── models/          # Modelos de datos
│   │   ├── middleware/      # Middlewares
│   │   └── config/          # Configuración
│   ├── tests/
│   └── README.md
├── docker-compose.yml        # Orquestación de contenedores
├── tareas_copilot.md        # Tareas detalladas de desarrollo
└── README.md                 # Este archivo
```

## 🚀 Módulos del Sistema

1. **Autenticación y Seguridad**: Login, roles, permisos, auditoría
2. **Tenants**: Gestión de empresas, branding, configuración
3. **Centros de Costos**: Gestión de presupuestos y categorías
4. **Inventarios**: Catálogo, movimientos, alertas
5. **Gestión Documental**: Documentos, versiones, metadatos, búsqueda
6. **Clientes**: Registro, contratos, proyectos
7. **Empleados**: Perfil, roles, timesheets, capacitación
8. **Cartera**: Facturas, pagos, aging report
9. **Tesorería**: Órdenes de pago, conciliación, flujo de caja
10. **Proveedores**: Alta, catálogo, órdenes de compra, recepciones

## 🛠️ Tecnologías

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router
- Axios

### Backend
- Node.js
- Express
- MySQL
- Sequelize ORM
- JWT Authentication
- Swagger/OpenAPI

### DevOps
- Docker
- Docker Compose
- MySQL 8.0

## 🚦 Inicio Rápido

### Prerrequisitos

- Node.js >= 18
- Docker y Docker Compose
- MySQL Workbench (opcional, para gestión de base de datos)

### Instalación con Docker

1. Clonar el repositorio:
```bash
git clone https://github.com/piza77/SGE_ASI.git
cd SGE_ASI
```

2. Levantar los servicios:
```bash
docker-compose up -d
```

3. Acceder a la aplicación:
- Frontend: http://localhost:5173
- API: http://localhost:3000
- Documentación API (Swagger): http://localhost:3000/api-docs

### Instalación Manual

#### Backend (API)

```bash
cd API
npm install
cp .env.example .env
# Configurar las variables de entorno
npm run dev
```

#### Frontend (FRONT)

```bash
cd FRONT
npm install
npm run dev
```

## 📚 Documentación

- [Documentación del Frontend](./FRONT/README.md)
- [Documentación del API](./API/README.md)
- [Tareas de Desarrollo](./tareas_copilot.md)
- [API Documentation (Swagger)](http://localhost:3000/api-docs) (cuando el servidor esté corriendo)

## 🔒 Seguridad

- Autenticación basada en JWT
- Roles y permisos granulares
- Auditoría de acciones
- Validación de datos en frontend y backend
- Protección contra SQL Injection
- Sanitización de entradas

## 🌐 Multitenant

El sistema soporta múltiples empresas (tenants) con:
- Aislamiento de datos por tenant
- Configuración personalizada
- Branding personalizado
- Gestión independiente de usuarios

## 🧪 Testing

```bash
# Backend tests
cd API
npm test

# Frontend tests
cd FRONT
npm test
```

## 📝 Convenciones de Código

- ESLint para linting
- Prettier para formateo
- Commits convencionales
- Comentarios en español
- Nomenclatura en inglés para código

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto es propiedad de la consultora y está bajo licencia privada.

## 👥 Equipo

- Desarrollado para consultora medioambiental
- Preparado para integración futura con World Office

## 📞 Soporte

Para soporte y consultas, contactar al equipo de desarrollo.
