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

/**
 * 
 * @param {*} mail 
 * @param {*} users 
 */
export const validateLogin = (mail, users) => {
  let errors = ''
  errors += !isValidEmail(mail) ? 'Please enter a valid email address (e.g., john@doe.com). <br>'
    : !isUser(mail, users) ? 'You are not registered yet, please register. <br>'
      : isBanned(mail, users) ? 'You are not allowed to access the service, please contact support@sb.co <br>'
        : ''

  console.log(errors);
  return errors;
}
