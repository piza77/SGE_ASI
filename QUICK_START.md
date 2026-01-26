# Guía de Inicio Rápido - SGE ASI ERP

## 🚀 Opción 1: Usar Docker (Recomendado)

### Prerrequisitos
- Docker Desktop instalado
- 4GB RAM disponible
- Puertos libres: 3000, 4000, 3306, 8080

### Pasos

1. **Clonar el repositorio**
```bash
git clone https://github.com/piza77/SGE_ASI.git
cd SGE_ASI
```

2. **Levantar los servicios**
```bash
docker-compose up --build
```

Espera a que todos los servicios estén listos. Verás mensajes como:
- ✅ MySQL: "ready for connections"
- ✅ API: "SGE ASI ERP API Server"
- ✅ Frontend: "Local: http://localhost:3000"

3. **Acceder al sistema**
- Frontend: http://localhost:3000
- API Docs: http://localhost:4000/api-docs
- phpMyAdmin: http://localhost:8080

4. **Iniciar sesión**
- Tenant: `demo-company`
- Email: `admin@demo.com`
- Password: `Admin123!`

## 🔧 Opción 2: Instalación Manual

### Prerrequisitos
- Node.js 18+
- MySQL 8.0
- npm

### Pasos

1. **Instalar MySQL y crear base de datos**
```bash
# Iniciar MySQL
mysql -u root -p

# Ejecutar el esquema
source API/src/config/database-schema.sql
```

2. **Configurar Backend**
```bash
cd API

# Copiar variables de entorno
cp .env.example .env

# Editar .env con tus credenciales de MySQL
nano .env

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev
```

El backend estará en: http://localhost:4000

3. **Configurar Frontend** (en otra terminal)
```bash
cd FRONT

# Copiar variables de entorno
cp .env.example .env

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev
```

El frontend estará en: http://localhost:3000

## 📱 Usando el Sistema

### 1. Login
- Ve a http://localhost:3000
- Ingresa las credenciales demo
- Serás redirigido al dashboard

### 2. Dashboard
- Muestra información del usuario
- Enlaces a módulos disponibles
- Acceso a gestión de empresas

### 3. Gestión de Empresas (Tenants)
- Click en "Gestión de Empresas"
- Ver listado de empresas
- Crear nueva empresa con el botón "+"
- Editar o eliminar empresas existentes

### 4. Crear Nueva Empresa
Ejemplo de datos:
- Nombre: Mi Empresa
- Slug: mi-empresa (solo minúsculas y guiones)
- Email: contacto@miempresa.com
- Teléfono: +1234567890
- Dirección: Calle Principal 123
- Colores: Selecciona colores de marca

## 🔍 Verificar Instalación

```bash
# Verificar que el backend responde
curl http://localhost:4000/health

# Deberías ver: {"status":"ok",...}
```

## 📚 Documentación API

Visita: http://localhost:4000/api-docs

Allí encontrarás:
- Todos los endpoints disponibles
- Esquemas de datos
- Ejemplos de peticiones
- Códigos de respuesta

## 🐛 Problemas Comunes

### El backend no inicia
**Error**: "Cannot connect to database"

**Solución**:
1. Verificar que MySQL esté corriendo
2. Verificar credenciales en API/.env
3. Verificar que la base de datos existe

### El frontend no carga
**Error**: "Network Error"

**Solución**:
1. Verificar que el backend esté corriendo
2. Verificar VITE_API_URL en FRONT/.env
3. Verificar que el puerto 4000 esté libre

### Error de CORS
**Solución**:
- Verificar FRONTEND_URL en API/.env
- Debe ser: http://localhost:3000

### No puedo crear empresas
**Solución**:
- Verificar que estás logueado como Super Admin
- El usuario demo tiene todos los permisos

## 🔐 Seguridad

### Cambiar Password del Admin
1. Iniciar sesión como admin
2. (Próximamente: Perfil > Cambiar Contraseña)

Por ahora, puedes cambiar el hash en:
`API/src/config/database-schema.sql`

### Crear Nuevo Usuario
```bash
# Via API (requiere autenticación)
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "tenantId": 1,
    "email": "nuevo@demo.com",
    "password": "SecurePass123!",
    "firstName": "Nuevo",
    "lastName": "Usuario",
    "roleId": 3
  }'
```

## 📊 Base de Datos

### Acceder via phpMyAdmin
1. Ve a http://localhost:8080
2. Usuario: root
3. Password: rootpassword
4. Selecciona base de datos: sge_asi_erp

### Tablas principales
- `tenants` - Empresas
- `users` - Usuarios
- `roles` - Roles
- `permissions` - Permisos
- `audit_logs` - Auditoría

## 🎯 Próximos Pasos

1. **Familiarízate con el sistema**
   - Explora el dashboard
   - Crea empresas de prueba
   - Revisa la documentación API

2. **Personaliza tu empresa**
   - Edita colores de marca
   - Actualiza información de contacto

3. **Explora la API**
   - Usa Swagger UI
   - Prueba los endpoints
   - Revisa los códigos de respuesta

## 📞 Ayuda

- **Issues**: https://github.com/piza77/SGE_ASI/issues
- **Documentación API**: README.md en carpeta API
- **Documentación Frontend**: README.md en carpeta FRONT

## ⚡ Comandos Rápidos

```bash
# Docker
docker-compose up -d              # Iniciar en background
docker-compose logs -f api        # Ver logs del API
docker-compose down               # Detener todo
docker-compose restart            # Reiniciar

# Backend
cd API && npm run dev             # Desarrollo
cd API && npm start               # Producción

# Frontend
cd FRONT && npm run dev           # Desarrollo
cd FRONT && npm run build         # Build producción
```

---

**¡Listo para empezar!** 🎉

Si tienes problemas, revisa la sección de Troubleshooting o abre un issue en GitHub.
