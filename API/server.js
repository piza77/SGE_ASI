require('dotenv').config();
const app = require('./src/app');
const { testConnection, syncDatabase } = require('./src/config/database');

const PORT = process.env.PORT || 3000;

/**
 * Función para iniciar el servidor
 */
const startServer = async () => {
  try {
    // Probar conexión a la base de datos
    await testConnection();

    // Sincronizar modelos con la base de datos (solo en desarrollo)
    if (process.env.NODE_ENV === 'development') {
      await syncDatabase({ alter: true });
    }

    // Iniciar servidor
    app.listen(PORT, () => {
      console.log(`
🚀 Servidor iniciado exitosamente
📡 Puerto: ${PORT}
🌍 Entorno: ${process.env.NODE_ENV || 'development'}
📚 Documentación: http://localhost:${PORT}/api-docs
💚 Health check: http://localhost:${PORT}/health
      `);
    });
  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

// Manejar errores no capturados
process.on('unhandledRejection', (error) => {
  console.error('❌ Error no manejado:', error);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM recibido, cerrando servidor...');
  process.exit(0);
});

// Iniciar servidor
startServer();
