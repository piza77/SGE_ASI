const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

/**
 * Modelo de Centro de Costos
 */
const CostCenter = sequelize.define('CostCenter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  ide: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: 'Identificador único del centro de costos',
  },
  client: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contractNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identificationNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tenantId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'cost_centers',
  timestamps: true,
  indexes: [
    {
      unique: true,
      fields: ['ide', 'tenant_id'],
    },
  ],
});

/**
 * Modelo de Categoría de Centro de Costos
 */
const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  costCenterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM(
      'Recursos Humanos',
      'Logística',
      'Reembolsables',
      'Contratos',
      'Otros',
      'Imprevistos'
    ),
    allowNull: false,
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  tableName: 'categories',
  timestamps: true,
});

/**
 * Modelo de Ítem de Categoría
 */
const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  implementationDate: {
    type: DataTypes.DATE,
  },
  startDate: {
    type: DataTypes.DATE,
  },
  estimatedEndDate: {
    type: DataTypes.DATE,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identification: {
    type: DataTypes.STRING,
  },
  value: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
    defaultValue: 0,
  },
  observations: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'items',
  timestamps: true,
});

// Definir relaciones
CostCenter.hasMany(Category, {
  foreignKey: 'costCenterId',
  as: 'categories',
  onDelete: 'CASCADE',
});
Category.belongsTo(CostCenter, {
  foreignKey: 'costCenterId',
  as: 'costCenter',
});

Category.hasMany(Item, {
  foreignKey: 'categoryId',
  as: 'items',
  onDelete: 'CASCADE',
});
Item.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category',
});

module.exports = {
  CostCenter,
  Category,
  Item,
};
