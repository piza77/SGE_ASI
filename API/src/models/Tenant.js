const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

/**
 * Modelo de Tenant (Empresa)
 */
const Tenant = sequelize.define('Tenant', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subdomain: {
    type: DataTypes.STRING,
    unique: true,
  },
  logo: {
    type: DataTypes.STRING,
  },
  primaryColor: {
    type: DataTypes.STRING,
    defaultValue: '#0ea5e9',
  },
  secondaryColor: {
    type: DataTypes.STRING,
    defaultValue: '#3b82f6',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  settings: {
    type: DataTypes.JSON,
    defaultValue: {},
  },
}, {
  tableName: 'tenants',
  timestamps: true,
});

module.exports = Tenant;
