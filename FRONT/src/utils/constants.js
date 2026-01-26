/**
 * API error codes and messages
 */
export const ERROR_CODES = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  VALIDATION_ERROR: 400,
  SERVER_ERROR: 500,
};

/**
 * User roles
 */
export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
};

/**
 * Cost center categories
 */
export const COST_CATEGORIES = {
  RRHH: { name: 'Recursos Humanos', color: 'blue' },
  LOGISTICA: { name: 'Logística', color: 'green' },
  REEMBOLSABLES: { name: 'Reembolsables', color: 'yellow' },
  CONTRATOS: { name: 'Contratos', color: 'purple' },
  OTROS: { name: 'Otros', color: 'gray' },
  IMPREVISTOS: { name: 'Imprevistos', color: 'red' },
};

/**
 * Inventory movement types
 */
export const MOVEMENT_TYPES = {
  IN: 'Entrada',
  OUT: 'Salida',
  ADJUSTMENT: 'Ajuste',
};

/**
 * Invoice statuses
 */
export const INVOICE_STATUS = {
  DRAFT: 'Borrador',
  PENDING: 'Pendiente',
  PAID: 'Pagada',
  OVERDUE: 'Vencida',
  CANCELLED: 'Cancelada',
};

/**
 * Date formats
 */
export const DATE_FORMATS = {
  SHORT: 'dd/MM/yyyy',
  LONG: 'dd MMMM yyyy',
  TIME: 'HH:mm',
  DATETIME: 'dd/MM/yyyy HH:mm',
};

/**
 * Pagination defaults
 */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PER_PAGE: 10,
  PER_PAGE_OPTIONS: [10, 25, 50, 100],
};

/**
 * File upload limits
 */
export const UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
};

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  TOKEN: 'token',
  USER: 'user',
  TENANT: 'tenant',
  THEME: 'theme',
  LANGUAGE: 'language',
};

/**
 * Routes
 */
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  
  // Modules
  TENANTS: '/tenants',
  COST_CENTERS: '/cost-centers',
  INVENTORY: '/inventory',
  DOCUMENTS: '/documents',
  CLIENTS: '/clients',
  EMPLOYEES: '/employees',
  PORTFOLIO: '/portfolio',
  TREASURY: '/treasury',
  SUPPLIERS: '/suppliers',
};
