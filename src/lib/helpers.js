/*
* localstorage/sessionstorage methods
*/

export const getItem = (i) => window.localStorage.getItem(i) || false;

export const setItem = (i, v) => window.localStorage.setItem(i, v);

export const delItem = (i) => window.localStorage.removeItem(i);

export const getSession = (s) => window.sessionStorage.getItem(s);

export const setSession = (s, v) => window.sessionStorage.setItem(s, v);

export const delSession = (s) => window.sessionStorage.removeItem(s);

/*
* Check if user exists
*/ 
export const isMember = (email, users) => users.find((u) => u.mail === mail);

/*
* Remove malicious data from user input
*/
export const sanitize = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')

export const pageReload = () => window.location.reload();