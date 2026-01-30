const express = require('express');
const router = express.Router();

/**
 * Router principal de la API
 */

// Ruta de bienvenida
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API de SGE ASI disponible',
    version: '1.0.0',
    modules: [
      'auth',
      'tenants',
      'cost-centers',
      'inventory',
      'documents',
      'clients',
      'employees',
      'portfolio',
      'treasury',
      'suppliers',
    ],
  });
});

/**
 * Importar y usar routers de módulos
 * Descomentar según se implementen los módulos
 */

// const authRoutes = require('./auth.routes');
// const tenantRoutes = require('./tenant.routes');
// const costCenterRoutes = require('./costCenter.routes');
// const inventoryRoutes = require('./inventory.routes');
// const documentRoutes = require('./document.routes');
// const clientRoutes = require('./client.routes');
// const employeeRoutes = require('./employee.routes');
// const portfolioRoutes = require('./portfolio.routes');
// const treasuryRoutes = require('./treasury.routes');
// const supplierRoutes = require('./supplier.routes');

// router.use('/auth', authRoutes);
// router.use('/tenants', tenantRoutes);
// router.use('/cost-centers', costCenterRoutes);
// router.use('/inventory', inventoryRoutes);
// router.use('/documents', documentRoutes);
// router.use('/clients', clientRoutes);
// router.use('/employees', employeeRoutes);
// router.use('/portfolio', portfolioRoutes);
// router.use('/treasury', treasuryRoutes);
// router.use('/suppliers', supplierRoutes);

module.exports = router;
