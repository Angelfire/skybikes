import { getItem, setItem } from '../../lib/helpers';

/*
* Create temporary session and reload page
*/
const startSession = u => {
  window.sessionStorage.setItem('sb-session', JSON.stringify(u));
  pageReload();
}

/*
* Create/add new user to users in localstorage
*/
export const createUser = (user, users) => {
  const newUser = Object.assign(users, user);
  setItem('sb-users', JSON.stringify(newUser));
  startSession(user);
}

export const initSession = e => {
  e.preventDefault();

  const users = window.localStorage.getItem('sb-users');
  console.log(users);
}
