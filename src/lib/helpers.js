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