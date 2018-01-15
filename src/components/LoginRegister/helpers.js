import {
  getItem,
  pageReload,
  sanitize,
  setItem,
  setSession
} from '../../lib/helpers';

/**
 * Create/add new user to users in localstorage
 * @param {*} user 
 * @param {*} users 
 */
export const createUser = (user, users) => {
  const newUser = Object.assign(users, user);
  setItem('sb-users', JSON.stringify(newUser));
  startSession(user);
}

/**
 * Creates a new input inside a div
 * @param {string} type 
 * @param {string} name 
 * @param {string} placeholder 
 */
export const createDivInput = (type, name, placeholder) => {
  const input = document.createElement('input');
  const div = document.createElement('div');
  div.setAttribute('class', 'form-group');
  input.setAttribute('class', 'form-control');

  input.type = type;
  input.name = name;
  input.placeholder = placeholder;

  div.appendChild(input);

  return div;
}
/**
 * Creates a new input of type submit
 * @param {string} type 
 * @param {string} name 
 * @param {string} value 
 */
export const createBtn = (type, name, value) => {
  const btn = document.createElement('input');

  btn.type = type;
  btn.name = name;
  btn.value = value;

  return btn;
}

/**
 * 
 * @param {*} mail 
 * @param {*} users 
 */ 
export const isUser = (mail, users) => users.find((u) => u.mail === mail);

/**
 * Remove malicious data from user input
 * @param {*} s 
 */
export const sanitizeField = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

/**
 * Reload the page
 */
export const pageReload = () => window.location.reload();
