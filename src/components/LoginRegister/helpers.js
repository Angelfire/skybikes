import {
  pageReload,
  setItem,
  setSession
} from '../../lib/helpers';

/*
* Create temporary session and reload page
*/
export const startNewSession = (u) => {
  setSession('sb-session', JSON.stringify(u));
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
