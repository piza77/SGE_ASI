/**
 * Normalize a string to a valid slug format
 * @param {string} text - Text to normalize
 * @returns {string} Normalized slug
 */
export const normalizeSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate hex color format
 * @param {string} color - Color to validate
 * @returns {boolean} True if valid
 */
export const isValidHexColor = (color) => {
  const hexColorRegex = /^#[0-9A-F]{6}$/i;
  return hexColorRegex.test(color);
};

/**
 * Format phone number
 * @param {string} phone - Phone number to format
 * @returns {string} Formatted phone
 */
export const formatPhone = (phone) => {
  return phone.replace(/[^\d+]/g, '');
};
