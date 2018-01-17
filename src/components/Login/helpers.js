import { isUser, isValidEmail } from '../../lib/helpers';

/**
 * 
 * @param {*} mail 
 * @param {*} users 
 */
export const isBanned = (mail, users) => {
  const user = users.find((m) => m.mail === mail);

  return user.banned === true;
}
