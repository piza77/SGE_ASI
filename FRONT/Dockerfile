# Etapa 1: Construcción del Frontend
FROM node:18-slim AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivo package.json y package-lock.json
COPY package*.json ./

# Desactivar dependencias opcionales en npm
ENV NPM_CONFIG_OPTIONAL=false

# Instalar dependencias sin incluir las opcionales
RUN npm ci --only=production

# Copiar el resto del código del proyecto
COPY . .

# Construcción de la aplicación
RUN npm run build

# Etapa 2: Servir la aplicación estática con Nginx
FROM nginx:stable-alpine

# Remover archivos predeterminados de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos construidos del proyecto
COPY --from=build /app/dist /usr/share/nginx/html

# Configurar archivo Nginx (opcional)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Chequeo de salud (opcional)
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget --quiet --spider http://localhost:80 || exit 1

# Comando para iniciar el servicio
CMD ["nginx", "-g", "daemon off;"]