import {
  getItem,
  pageReload,
  sanitize,
  setItem,
  setSession
} from '../../lib/helpers';

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
export const sanitizeField = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
