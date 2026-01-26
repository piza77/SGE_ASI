const { CostCenter, Category, Item } = require('../models/CostCenter');

/**
 * Servicio de Centros de Costos
 */
class CostCenterService {
  /**
   * Crear centro de costos con categorías por defecto
   */
  async create(data, tenantId) {
    const { ide, client, contractNumber, identificationNumber, description } = data;

    // Verificar que el IDE no exista para este tenant
    const existing = await CostCenter.findOne({
      where: { ide, tenantId },
    });

    if (existing) {
      const error = new Error('Ya existe un centro de costos con este IDE');
      error.statusCode = 409;
      throw error;
    }

    // Crear centro de costos
    const costCenter = await CostCenter.create({
      ide,
      client,
      contractNumber,
      identificationNumber,
      description,
      tenantId,
    });

    // Crear categorías por defecto
    const defaultCategories = [
      'Recursos Humanos',
      'Logística',
      'Reembolsables',
      'Contratos',
      'Otros',
      'Imprevistos',
    ];

    const categories = await Promise.all(
      defaultCategories.map((type, index) =>
        Category.create({
          costCenterId: costCenter.id,
          name: type,
          type: type,
          order: index + 1,
        })
      )
    );

    return {
      ...costCenter.toJSON(),
      categories,
    };
  }

  /**
   * Obtener centro de costos con categorías e ítems
   */
  async getById(id, tenantId) {
    const costCenter = await CostCenter.findOne({
      where: { id, tenantId },
      include: [
        {
          model: Category,
          as: 'categories',
          include: [
            {
              model: Item,
              as: 'items',
            },
          ],
        },
      ],
    });

    if (!costCenter) {
      const error = new Error('Centro de costos no encontrado');
      error.statusCode = 404;
      throw error;
    }

    return costCenter;
  }

  /**
   * Listar centros de costos
   */
  async list(tenantId, filters = {}) {
    const where = { tenantId };

    if (filters.client) {
      where.client = { [Op.like]: `%${filters.client}%` };
    }

    if (filters.isActive !== undefined) {
      where.isActive = filters.isActive;
    }

    const costCenters = await CostCenter.findAll({
      where,
      include: [
        {
          model: Category,
          as: 'categories',
          include: [
            {
              model: Item,
              as: 'items',
            },
          ],
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    return costCenters;
  }

  /**
   * Crear ítem en categoría
   */
  async createItem(categoryId, itemData, tenantId) {
    // Verificar que la categoría existe y pertenece al tenant
    const category = await Category.findOne({
      where: { id: categoryId },
      include: [
        {
          model: CostCenter,
          as: 'costCenter',
          where: { tenantId },
        },
      ],
    });

    if (!category) {
      const error = new Error('Categoría no encontrada');
      error.statusCode = 404;
      throw error;
    }

    const item = await Item.create({
      categoryId,
      ...itemData,
    });

    return item;
  }
}

module.exports = new CostCenterService();
