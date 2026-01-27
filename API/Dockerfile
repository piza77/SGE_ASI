# Stage 1: Build
FROM node:18-alpine AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios para dependencias
COPY package*.json ./

# Copiar el archivo package-lock.json (si existe)
COPY package-lock.json ./

# Instalar dependencias de producción
RUN npm ci --only=production

# Copiar el resto de la aplicación
COPY . .

# Crear directorio para uploads
RUN mkdir -p uploads

# Stage 2: Production
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar dependencias instaladas y código fuente desde la etapa de construcción
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app .

# Crear un usuario no root por seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

# Cambiar al usuario no root
USER nodejs

# Exponer puerto
EXPOSE 3000

# Variables de entorno por defecto
ENV NODE_ENV=production

# Health check para asegurar que el contenedor está funcionando correctamente
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Comando para iniciar la aplicación
CMD ["npm", "start"]