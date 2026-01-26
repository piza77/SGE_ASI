const express = require('express');
const router = express.Router();
const tenantController = require('../controllers/tenantController');
const { authenticateToken, checkPermission } = require('../middleware/auth');
const { body } = require('express-validator');

/**
 * @swagger
 * /api/tenants:
 *   get:
 *     summary: Get all tenants
 *     tags: [Tenants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Items per page
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [active, inactive, suspended]
 *     responses:
 *       200:
 *         description: List of tenants
 *       401:
 *         description: Unauthorized
 */
router.get(
  '/',
  authenticateToken,
  checkPermission('tenant.view'),
  tenantController.getAllTenants
);

/**
 * @swagger
 * /api/tenants/{id}:
 *   get:
 *     summary: Get tenant by ID
 *     tags: [Tenants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tenant details
 *       404:
 *         description: Tenant not found
 */
router.get(
  '/:id',
  authenticateToken,
  checkPermission('tenant.view'),
  tenantController.getTenantById
);

/**
 * @swagger
 * /api/tenants/slug/{slug}:
 *   get:
 *     summary: Get tenant by slug
 *     tags: [Tenants]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tenant details
 *       404:
 *         description: Tenant not found
 */
router.get('/slug/:slug', tenantController.getTenantBySlug);

/**
 * @swagger
 * /api/tenants:
 *   post:
 *     summary: Create new tenant
 *     tags: [Tenants]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - slug
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               slug:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               logoUrl:
 *                 type: string
 *               primaryColor:
 *                 type: string
 *               secondaryColor:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tenant created successfully
 *       400:
 *         description: Invalid input
 */
router.post(
  '/',
  authenticateToken,
  checkPermission('tenant.create'),
  [
    body('name').notEmpty().withMessage('Tenant name is required'),
    body('slug')
      .notEmpty()
      .withMessage('Slug is required')
      .matches(/^[a-z0-9-]+$/)
      .withMessage('Slug must contain only lowercase letters, numbers and hyphens'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').optional().isMobilePhone().withMessage('Valid phone number required'),
    body('primaryColor').optional().matches(/^#[0-9A-F]{6}$/i).withMessage('Valid hex color required'),
    body('secondaryColor').optional().matches(/^#[0-9A-F]{6}$/i).withMessage('Valid hex color required')
  ],
  tenantController.createTenant
);

/**
 * @swagger
 * /api/tenants/{id}:
 *   put:
 *     summary: Update tenant
 *     tags: [Tenants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive, suspended]
 *     responses:
 *       200:
 *         description: Tenant updated successfully
 *       400:
 *         description: Invalid input
 */
router.put(
  '/:id',
  authenticateToken,
  checkPermission('tenant.update'),
  [
    body('name').optional().notEmpty().withMessage('Tenant name cannot be empty'),
    body('email').optional().isEmail().withMessage('Valid email is required'),
    body('phone').optional().isMobilePhone().withMessage('Valid phone number required'),
    body('status').optional().isIn(['active', 'inactive', 'suspended']).withMessage('Invalid status')
  ],
  tenantController.updateTenant
);

/**
 * @swagger
 * /api/tenants/{id}:
 *   delete:
 *     summary: Delete tenant
 *     tags: [Tenants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tenant deleted successfully
 */
router.delete(
  '/:id',
  authenticateToken,
  checkPermission('tenant.delete'),
  tenantController.deleteTenant
);

/**
 * @swagger
 * /api/tenants/{id}/branding:
 *   put:
 *     summary: Update tenant branding
 *     tags: [Tenants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               logoUrl:
 *                 type: string
 *               primaryColor:
 *                 type: string
 *               secondaryColor:
 *                 type: string
 *     responses:
 *       200:
 *         description: Branding updated successfully
 */
router.put(
  '/:id/branding',
  authenticateToken,
  checkPermission('tenant.manage_branding'),
  [
    body('logoUrl').optional().isURL().withMessage('Valid URL required for logo'),
    body('primaryColor').optional().matches(/^#[0-9A-F]{6}$/i).withMessage('Valid hex color required'),
    body('secondaryColor').optional().matches(/^#[0-9A-F]{6}$/i).withMessage('Valid hex color required')
  ],
  tenantController.updateBranding
);

module.exports = router;
