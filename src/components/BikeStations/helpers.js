export const isEmptyObject = o => (Object.keys(o).length === 0 && o.constructor === Object) === true;

export const isPrivilegedAccount = session => (session === 'sysadmin@sb.co' || session === 'sbworker@sb.co') === true;

export const hasBike = session => session.hasOwnProperty('bike') === true;
