const tenantService = require('../services/tenantService');
const { validationResult } = require('express-validator');

class TenantController {
  /**
   * Get all tenants
   */
  async getAllTenants(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const status = req.query.status;

      const result = await tenantService.getAllTenants(page, limit, status);

      res.status(200).json({
        success: true,
        data: result.tenants,
        pagination: result.pagination
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Get tenant by ID
   */
  async getTenantById(req, res) {
    try {
      const tenantId = parseInt(req.params.id);
      const tenant = await tenantService.getTenantById(tenantId);

      res.status(200).json({
        success: true,
        data: tenant
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Get tenant by slug
   */
  async getTenantBySlug(req, res) {
    try {
      const slug = req.params.slug;
      const tenant = await tenantService.getTenantBySlug(slug);

      res.status(200).json({
        success: true,
        data: tenant
      });
    } catch (error) {
      res.status(404).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Create new tenant
   */
  async createTenant(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const userId = req.user.userId;
      const ipAddress = req.ip || req.connection.remoteAddress;
      const userAgent = req.headers['user-agent'];

      const tenant = await tenantService.createTenant(req.body, userId, ipAddress, userAgent);

      res.status(201).json({
        success: true,
        message: 'Tenant created successfully',
        data: tenant
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Update tenant
   */
  async updateTenant(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const tenantId = parseInt(req.params.id);
      const userId = req.user.userId;
      const ipAddress = req.ip || req.connection.remoteAddress;
      const userAgent = req.headers['user-agent'];

      const tenant = await tenantService.updateTenant(tenantId, req.body, userId, ipAddress, userAgent);

      res.status(200).json({
        success: true,
        message: 'Tenant updated successfully',
        data: tenant
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Delete tenant
   */
  async deleteTenant(req, res) {
    try {
      const tenantId = parseInt(req.params.id);
      const userId = req.user.userId;
      const ipAddress = req.ip || req.connection.remoteAddress;
      const userAgent = req.headers['user-agent'];

      await tenantService.deleteTenant(tenantId, userId, ipAddress, userAgent);

      res.status(200).json({
        success: true,
        message: 'Tenant deleted successfully'
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }

  /**
   * Update tenant branding
   */
  async updateBranding(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          errors: errors.array()
        });
      }

      const tenantId = parseInt(req.params.id);
      const userId = req.user.userId;
      const ipAddress = req.ip || req.connection.remoteAddress;
      const userAgent = req.headers['user-agent'];

      const tenant = await tenantService.updateBranding(tenantId, req.body, userId, ipAddress, userAgent);

      res.status(200).json({
        success: true,
        message: 'Tenant branding updated successfully',
        data: tenant
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  }
}

module.exports = new TenantController();
