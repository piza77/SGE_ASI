const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/auth');
const { body } = require('express-validator');
const { PASSWORD_REGEX, PASSWORD_MIN_LENGTH } = require('../utils/constants');

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - tenantId
 *               - email
 *               - password
 *               - firstName
 *               - lastName
 *             properties:
 *               tenantId:
 *                 type: integer
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 minLength: 8
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               roleId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input
 */
router.post(
  '/register',
  [
    body('tenantId').isInt().withMessage('Tenant ID must be an integer'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password')
      .isLength({ min: PASSWORD_MIN_LENGTH })
      .withMessage(`Password must be at least ${PASSWORD_MIN_LENGTH} characters long`)
      .matches(PASSWORD_REGEX)
      .withMessage('Password must contain uppercase, lowercase, number and special character'),
    body('firstName').notEmpty().withMessage('First name is required'),
    body('lastName').notEmpty().withMessage('Last name is required'),
    body('phone').optional().isMobilePhone().withMessage('Valid phone number required')
  ],
  authController.register
);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - tenantSlug
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               tenantSlug:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('tenantSlug').notEmpty().withMessage('Tenant slug is required')
  ],
  authController.login
);

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current user info
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User information retrieved
 *       401:
 *         description: Unauthorized
 */
router.get('/me', authenticateToken, authController.me);

/**
 * @swagger
 * /api/auth/change-password:
 *   post:
 *     summary: Change user password
 *     tags: [Authentication]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - oldPassword
 *               - newPassword
 *             properties:
 *               oldPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *                 minLength: 8
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post(
  '/change-password',
  authenticateToken,
  [
    body('oldPassword').notEmpty().withMessage('Current password is required'),
    body('newPassword')
      .isLength({ min: PASSWORD_MIN_LENGTH })
      .withMessage(`New password must be at least ${PASSWORD_MIN_LENGTH} characters long`)
      .matches(PASSWORD_REGEX)
      .withMessage('Password must contain uppercase, lowercase, number and special character')
  ],
  authController.changePassword
);

/**
 * @swagger
 * /api/auth/validate:
 *   post:
 *     summary: Validate JWT token
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token is valid
 *       401:
 *         description: Invalid token
 */
router.post('/validate', authController.validateToken);

module.exports = router;
