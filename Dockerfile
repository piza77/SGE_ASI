# Etapa 1: Construcción del Frontend
FROM node:20.19.0-slim AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias primero (mejora la cacheabilidad)
COPY package*.json ./

# Desactivar dependencias opcionales
ENV NPM_CONFIG_OPTIONAL=false

# Instalar dependencias para producción asegurando consistencia
RUN npm ci --omit=optional

# Copiar todos los archivos del proyecto
COPY . .

# Construir la aplicación usando Vite
RUN npm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Establecer el directorio de trabajo
WORKDIR /usr/share/nginx/html

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist .

# Copiar archivo de configuración de Nginx (si existe)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Configuración de un chequeo de salud (opcional)
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget --quiet --spider http://localhost:80 || exit 1

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]