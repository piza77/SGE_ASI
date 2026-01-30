# Etapa de Construcción
FROM node:18-alpine AS build
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
COPY package-lock.json ./

# Instalar dependencias excluyendo opcionales
RUN npm install --omit=optional

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de Producción
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=build /app/dist .

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto del contenedor
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]