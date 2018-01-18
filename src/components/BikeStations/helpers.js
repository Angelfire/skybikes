/**
 * 
 * @param {*} o 
 */
export const isEmptyObject = o => (Object.keys(o).length === 0 && o.constructor === Object) === true;

/**
 * 
 * @param {*} session 
 */
export const isPrivilegedAccount = session => (session === 'sysadmin@sb.co' || session === 'sbworker@sb.co') === true;

/**
 * Return true is user has a bike
 * @param {*} session 
 */
export const hasBike = session => session.hasOwnProperty('bike') === true;
