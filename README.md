# SGE ASI - Sistema de Gestión Empresarial

Sistema ERP multitenant modular para consultoría medioambiental. Construido con arquitectura moderna usando Node.js, React y MySQL.

## 🚀 Características Principales

- **Multitenant**: Aislamiento completo de datos por empresa
- **Autenticación robusta**: JWT con roles y permisos granulares
- **Auditoría completa**: Registro de todas las operaciones sensibles
- **API RESTful**: Documentada con Swagger/OpenAPI
- **Frontend moderno**: React + Vite + TailwindCSS
- **Docker Ready**: Despliegue completo con docker-compose

## 📁 Estructura del Proyecto

```
SGE_ASI/
├── API/                    # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/        # Configuración y esquema DB
│   │   ├── controllers/   # Controladores HTTP
│   │   ├── middleware/    # Middleware (auth, validación)
│   │   ├── routes/        # Definición de rutas
│   │   ├── services/      # Lógica de negocio
│   │   └── index.js       # Punto de entrada
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
│
├── FRONT/                  # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── context/       # Context API
│   │   ├── pages/         # Páginas/Vistas
│   │   ├── services/      # Servicios API
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
│
├── docker-compose.yml      # Orquestación de servicios
└── README.md              # Este archivo
```

## 🛠️ Tecnologías

### Backend
- Node.js 18+
- Express.js
- MySQL 8.0
- JWT (jsonwebtoken)
- Bcrypt
- Swagger/OpenAPI

### Frontend
- React 18
- Vite
- TailwindCSS
- React Router
- Axios

### DevOps
- Docker
- Docker Compose
- phpMyAdmin

## 🚦 Inicio Rápido con Docker

### Prerrequisitos
- Docker Desktop instalado
- Docker Compose instalado
- Puertos 3000, 4000, 3306 y 8080 disponibles

### 1. Clonar el repositorio
```bash
git clone https://github.com/piza77/SGE_ASI.git
cd SGE_ASI
```

### 2. Configurar variables de entorno

**API (.env):**
```bash
cd API
cp .env.example .env
# Editar .env con tus configuraciones
```

**Frontend (.env):**
```bash
cd FRONT
cp .env.example .env
# Editar .env con tus configuraciones
```

### 3. Levantar los servicios
```bash
# Desde la raíz del proyecto
docker-compose up --build
```

### 4. Acceder a los servicios

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000
- **API Docs (Swagger)**: http://localhost:4000/api-docs
- **phpMyAdmin**: http://localhost:8080

### 5. Credenciales de prueba

**Usuario Admin:**
- Tenant Slug: `demo-company`
- Email: `admin@demo.com`
- Password: `Admin123!`

**MySQL:**
- Host: `localhost:3306`
- User: `root`
- Password: `rootpassword`
- Database: `sge_asi_erp`

## 📝 Instalación Manual (Sin Docker)

### Backend

```bash
cd API
npm install

# Configurar .env
cp .env.example .env

# Crear base de datos
mysql -u root -p < src/config/database-schema.sql

# Iniciar servidor
npm run dev
```

### Frontend

```bash
cd FRONT
npm install

# Configurar .env
cp .env.example .env

# Iniciar servidor de desarrollo
npm run dev
```

## 📚 Módulos Implementados

### ✅ Autenticación y Seguridad
- Login con JWT
- Registro de usuarios
- Gestión de roles y permisos
- Auditoría de acciones sensibles
- Bloqueo de cuenta tras intentos fallidos
- Cambio de contraseña

### ✅ Tenants (Gestión de Empresas)
- CRUD completo de empresas
- Personalización de branding (colores, logo)
- Aislamiento total de datos por tenant
- Gestión de status (activo/inactivo/suspendido)

## 🔐 Sistema de Permisos

El sistema implementa un modelo RBAC (Role-Based Access Control):

### Roles por Defecto
1. **Super Admin** - Acceso total
2. **Admin** - Acceso administrativo
3. **User** - Acceso básico

### Permisos por Módulo

**Autenticación:**
- `auth.login`
- `auth.logout`
- `auth.register`

**Tenants:**
- `tenant.view`
- `tenant.create`
- `tenant.update`
- `tenant.delete`
- `tenant.manage_branding`

**Usuarios:**
- `user.view`
- `user.create`
- `user.update`
- `user.delete`

**Roles:**
- `role.view`
- `role.create`
- `role.update`
- `role.delete`
- `role.assign_permissions`

**Auditoría:**
- `audit.view`

## 📊 Base de Datos

### Tablas Principales

- `tenants` - Empresas/Organizaciones
- `users` - Usuarios del sistema
- `roles` - Roles de usuario
- `permissions` - Permisos del sistema
- `role_permissions` - Relación roles-permisos
- `user_roles` - Relación usuarios-roles
- `audit_logs` - Registro de auditoría

### Diagrama ER
El esquema completo está en: `API/src/config/database-schema.sql`

## 🔧 Comandos Útiles

### Docker

```bash
# Levantar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f api

# Detener servicios
docker-compose down

# Reconstruir imágenes
docker-compose up --build

# Limpiar todo (incluyendo volúmenes)
docker-compose down -v
```

### Backend

```bash
cd API

# Desarrollo
npm run dev

# Producción
npm start

# Pruebas
npm test
```

### Frontend

```bash
cd FRONT

# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🌐 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/me` - Obtener usuario actual
- `POST /api/auth/change-password` - Cambiar contraseña
- `POST /api/auth/validate` - Validar token

### Tenants
- `GET /api/tenants` - Listar tenants
- `GET /api/tenants/:id` - Obtener tenant por ID
- `GET /api/tenants/slug/:slug` - Obtener tenant por slug
- `POST /api/tenants` - Crear tenant
- `PUT /api/tenants/:id` - Actualizar tenant
- `DELETE /api/tenants/:id` - Eliminar tenant
- `PUT /api/tenants/:id/branding` - Actualizar branding

📖 **Documentación completa**: http://localhost:4000/api-docs

## 🧪 Testing

### Backend
```bash
cd API
npm test
```

### Frontend
```bash
cd FRONT
npm run lint
```

## 🔒 Seguridad

### Medidas Implementadas
- ✅ Contraseñas hasheadas con bcrypt (10 rounds)
- ✅ JWT con expiración configurable
- ✅ Validación de entrada con express-validator
- ✅ Headers de seguridad con Helmet
- ✅ CORS configurado
- ✅ Aislamiento de tenants en todas las queries
- ✅ Auditoría de operaciones sensibles
- ✅ Bloqueo de cuenta tras intentos fallidos

### Recomendaciones para Producción
- Usar HTTPS en todos los endpoints
- Cambiar JWT_SECRET a valor aleatorio y seguro
- Implementar rate limiting
- Configurar backups automáticos de BD
- Usar variables de entorno seguras
- Implementar monitoreo y alertas

## 📈 Próximos Módulos

- [ ] Centros de Costos
- [ ] Inventarios
- [ ] Gestión Documental
- [ ] Clientes
- [ ] Empleados
- [ ] Cartera
- [ ] Tesorería
- [ ] Proveedores

## 🐛 Troubleshooting

### Backend no se conecta a la base de datos
```bash
# Verificar que MySQL esté corriendo
docker-compose ps

# Ver logs de MySQL
docker-compose logs mysql

# Verificar credenciales en .env
```

### Frontend no se comunica con el backend
```bash
# Verificar que VITE_API_URL esté correcto en FRONT/.env
# Verificar que el backend esté corriendo
curl http://localhost:4000/health
```

### Error de permisos en Docker
```bash
# Dar permisos a los archivos
sudo chown -R $USER:$USER .

# O ejecutar docker con sudo (no recomendado)
sudo docker-compose up
```

## 📞 Soporte

Para reportar bugs o solicitar features:
1. Crear un issue en GitHub
2. Incluir logs y pasos para reproducir
3. Especificar versión del sistema

## 👥 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

ISC

## 🙏 Agradecimientos

Desarrollado para optimizar la gestión empresarial en consultoría medioambiental.

---

**Versión**: 1.0.0  
**Última actualización**: Enero 2026
