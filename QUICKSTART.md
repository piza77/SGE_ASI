# Guía de Inicio Rápido - SGE ASI

Esta guía te ayudará a tener el sistema funcionando en minutos.

## 📦 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js 18+** ([Descargar](https://nodejs.org/))
- **MySQL 8.0+** ([Descargar](https://dev.mysql.com/downloads/))
- **Git** ([Descargar](https://git-scm.com/))
- **Docker** (Opcional) ([Descargar](https://www.docker.com/))

## 🚀 Opción 1: Inicio Rápido con Docker

La forma más rápida de comenzar:

```bash
# 1. Clonar el repositorio
git clone https://github.com/piza77/SGE_ASI.git
cd SGE_ASI

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env si es necesario

# 3. Levantar servicios
docker-compose up -d

# 4. Esperar a que los servicios estén listos (1-2 minutos)
# Verificar logs
docker-compose logs -f

# 5. Acceder a la aplicación
# Frontend: http://localhost:5173
# API: http://localhost:3000
# API Docs: http://localhost:3000/api-docs
# phpMyAdmin: http://localhost:8080
```

## 💻 Opción 2: Instalación Manual

### Paso 1: Configurar Base de Datos

```bash
# Conectar a MySQL
mysql -u root -p

# Crear base de datos
CREATE DATABASE sge_asi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit;
```

### Paso 2: Configurar Backend (API)

```bash
# Navegar a carpeta API
cd API

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# Editar .env con tus configuraciones
nano .env  # o vim .env, o usa tu editor preferido
```

Configuración mínima en `.env`:
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=sge_asi
DB_USER=root
DB_PASSWORD=tu_password_mysql
JWT_SECRET=genera_un_string_aleatorio_seguro
JWT_EXPIRE=24h
CORS_ORIGIN=http://localhost:5173
```

```bash
# Iniciar servidor
npm run dev
```

El servidor estará corriendo en http://localhost:3000

### Paso 3: Configurar Frontend (FRONT)

En una nueva terminal:

```bash
# Navegar a carpeta FRONT
cd FRONT

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env

# El .env debería contener:
# VITE_API_URL=http://localhost:3000/api

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estará corriendo en http://localhost:5173

## ✅ Verificar Instalación

### 1. API funcionando

Visita: http://localhost:3000/health

Deberías ver:
```json
{
  "success": true,
  "message": "API está funcionando correctamente",
  "timestamp": "2026-01-07T..."
}
```

### 2. Documentación Swagger

Visita: http://localhost:3000/api-docs

Deberías ver la documentación interactiva de la API.

### 3. Frontend funcionando

Visita: http://localhost:5173

Deberías ver la página de login del sistema.

## 🔑 Primer Usuario (Por Implementar)

El sistema viene con datos de semilla que crearán el primer usuario automáticamente:

```
Email: admin@asi.com
Password: admin123
```

> **Nota**: En producción, asegúrate de cambiar estas credenciales inmediatamente.

## 📚 Próximos Pasos

1. **Explorar la Documentación**
   - [README Principal](./README.md)
   - [Documentación API](./API/README.md)
   - [Documentación Frontend](./FRONT/README.md)
   - [Tareas de Desarrollo](./tareas_copilot.md)

2. **Revisar la Arquitectura**
   - Familiarízate con la estructura de carpetas
   - Revisa los modelos existentes
   - Explora los componentes del frontend

3. **Comenzar a Desarrollar**
   - Implementa los módulos siguiendo [tareas_copilot.md](./tareas_copilot.md)
   - Sigue las [Guías de Contribución](./CONTRIBUTING.md)
   - Documenta nuevos endpoints en Swagger

## 🐛 Problemas Comunes

### Error: "Cannot connect to MySQL"

**Solución:**
- Verifica que MySQL esté corriendo: `mysql -u root -p`
- Verifica credenciales en `.env`
- Verifica que la base de datos existe

### Error: "Port 3000 already in use"

**Solución:**
```bash
# Encontrar proceso usando el puerto
lsof -i :3000

# Matar el proceso
kill -9 <PID>

# O cambiar el puerto en .env
PORT=3001
```

### Error: "Module not found"

**Solución:**
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Frontend no conecta con API

**Solución:**
- Verifica que la API esté corriendo en http://localhost:3000
- Verifica `VITE_API_URL` en `FRONT/.env`
- Revisa la consola del navegador para errores CORS

## 🔧 Comandos Útiles

### Backend (API)

```bash
npm run dev        # Iniciar en modo desarrollo
npm start          # Iniciar en modo producción
npm test           # Ejecutar tests
npm run test:watch # Tests en modo watch
```

### Frontend (FRONT)

```bash
npm run dev     # Iniciar servidor de desarrollo
npm run build   # Crear build de producción
npm run preview # Previsualizar build
npm run lint    # Ejecutar linter
```

### Docker

```bash
docker-compose up -d        # Iniciar servicios
docker-compose down         # Detener servicios
docker-compose logs -f      # Ver logs
docker-compose restart      # Reiniciar servicios
docker-compose ps           # Ver estado de servicios
```

## 📊 Monitoreo

### Logs del Backend

```bash
# En modo desarrollo, los logs aparecen en la consola
# Los errores importantes se muestran en rojo
```

### Logs del Frontend

- Abre las DevTools del navegador (F12)
- Revisa la pestaña Console para mensajes
- Revisa la pestaña Network para peticiones API

## 🎯 Accesos Rápidos

Una vez todo esté corriendo:

| Servicio | URL | Descripción |
|----------|-----|-------------|
| Frontend | http://localhost:5173 | Aplicación web |
| API | http://localhost:3000 | Backend API |
| API Docs | http://localhost:3000/api-docs | Documentación Swagger |
| Health Check | http://localhost:3000/health | Estado del API |
| phpMyAdmin | http://localhost:8080 | Gestión de BD (solo Docker) |

## 💡 Consejos

1. **Usa nodemon**: Los cambios en el backend se recargan automáticamente
2. **Hot Reload**: Los cambios en el frontend se reflejan inmediatamente
3. **DevTools**: Mantén las DevTools abiertas para depuración
4. **Swagger**: Usa la documentación Swagger para probar endpoints
5. **Git**: Haz commits frecuentes con mensajes descriptivos

## 🆘 Ayuda

Si tienes problemas:

1. Revisa esta guía completamente
2. Consulta la [documentación completa](./README.md)
3. Busca en los [issues del repositorio](https://github.com/piza77/SGE_ASI/issues)
4. Crea un nuevo issue con detalles del problema

## 🎉 ¡Listo!

Ahora tienes el sistema SGE ASI funcionando localmente. 

Próximos pasos recomendados:
1. Familiarízate con la estructura del proyecto
2. Revisa el archivo [tareas_copilot.md](./tareas_copilot.md)
3. Comienza a implementar los módulos
4. Lee las [guías de contribución](./CONTRIBUTING.md)

¡Feliz desarrollo! 🚀
