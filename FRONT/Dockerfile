# Stage 1: Development
FROM node:18-slim AS development

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias necesarias para el desarrollo
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto para desarrollo
EXPOSE 5173

# Comando para iniciar el entorno de desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Stage 2: Build
FROM node:18-slim AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar únicamente dependencias de producción
COPY package*.json ./
COPY package-lock.json ./
RUN npm ci

# Copiar el resto de los archivos
COPY . .

# Construir el proyecto para producción
RUN npm run build

# Stage 3: Production
FROM nginx:stable
WORKDIR /usr/share/nginx/html

# Copiar los archivos estáticos generados en el build
COPY --from=build /app/dist .

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto de producción
EXPOSE 80

# Configurar un chequeo de salud para la imagen
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:80 || exit 1

# Comando final para correr Nginx
CMD ["nginx", "-g", "daemon off;"]