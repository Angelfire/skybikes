/*
* localstorage/sessionstorage methods
*/

export const getItem = (i) => window.localStorage.getItem(i) || false;
export const setItem = (i, v) => window.localStorage.setItem(i, v);
export const delItem = (i) => window.localStorage.removeItem(i);
export const getSession = (s) => window.sessionStorage.getItem(s);
export const setSession = (s, v) => window.sessionStorage.setItem(s, v);
export const delSession = (s) => window.sessionStorage.removeItem(s);

/**
 * Reload the page
 */
export const pageReload = () => window.location.reload();

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
 * Create temporary session and reload page
 * @param {*} u 
 */
export const startSession = u => {
  setSession('sb-session', JSON.stringify(u));
  pageReload();
}

  /**
   * Kill the member session and "redirect" to login screen
   */
  export const logout = () => {
    delSession('sb-session');
    pageReload();
  }
  
  /**
   * Update instructions for user
   * @param {string} i 
   */
  export const updateInstruction = i => {
    document.getElementById('instructions').innerHTML = i;
  }

  /**
   * 
   * @param {string} err 
   */
  export const updateErrors = err => {
    document.getElementById('errors').innerHTML = err;
  }

  /**
 * Remove malicious data from user input
 * @param {*} s 
 */
export const sanitizeField = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/**
 * 
 * @param {*} mail 
 * @param {*} users 
 */ 
export const isUser = (mail, users) => users.find((u) => u.mail === mail);

/**
 * 
 * @param {*} e 
 */
export const isValidEmail = email => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  