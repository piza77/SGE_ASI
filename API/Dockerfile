<<<<<<< HEAD
<<<<<<< HEAD
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto de la aplicación
COPY . .

# Exponer puerto
EXPOSE 3000

# Variables de entorno por defecto
ENV NODE_ENV=production

# Crear directorio para uploads
RUN mkdir -p uploads

# Usuario no root por seguridad
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
RUN chown -R nodejs:nodejs /app
USER nodejs

# Comando de inicio
CMD ["node", "server.js"]
=======
# Build stage
FROM node:18-alpine AS build

=======
FROM node:18-alpine

>>>>>>> origin/copilot/complete-authentication-and-tenants
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
<<<<<<< HEAD
RUN npm ci --only=production

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy dependencies from build stage
COPY --from=build /app/node_modules ./node_modules

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start application
CMD ["npm", "start"]
>>>>>>> origin/copilot/create-erp-module-structure
=======
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 4000

# Start application
CMD ["npm", "start"]
>>>>>>> origin/copilot/complete-authentication-and-tenants
