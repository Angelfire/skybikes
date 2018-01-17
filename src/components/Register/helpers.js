
/**
 * Validate Name
 * @param {string} n 
 */
export const isValidName = n => (n.length >= 3 && n.length < 20) === true;

/**
 * Validates Phone number
 * @param {string} p 
 */
export const isValidPhone = p => /^\d{7}/.test(p);