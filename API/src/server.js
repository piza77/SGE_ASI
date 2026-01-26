require('dotenv').config();
const app = require('./app');
const { testConnection } = require('./config/database');

const PORT = process.env.PORT || 3000;

/**
 * Start server
 */
const startServer = async () => {
  try {
    // Test database connection
    const dbConnected = await testConnection();
    if (!dbConnected) {
      console.error('Failed to connect to database. Exiting...');
      process.exit(1);
    }

    // Start Express server
    app.listen(PORT, () => {
      console.log(`
╔═══════════════════════════════════════════╗
║   🚀 SGE ASI API Server Running           ║
╠═══════════════════════════════════════════╣
║   Environment: ${process.env.NODE_ENV?.padEnd(25) || 'development'.padEnd(25)}║
║   Port: ${PORT.toString().padEnd(32)}║
║   API Docs: http://localhost:${PORT}/api-docs    ║
╚═══════════════════════════════════════════╝
      `);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

/**
 * Handle unhandled promise rejections
 */
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

/**
 * Handle uncaught exceptions
 */
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

// Start the server
startServer();
