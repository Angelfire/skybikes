import {
  getItem,
  pageReload,
  sanitize,
  setItem,
  setSession
} from '../../lib/helpers';

/*
* Create temporary session and reload page
*/
const startSession = u => {
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

export const initSession = e => {
  e.preventDefault();

  const users = JSON.parse(getItem('sb-users'));

  const form = document.forms['login-form'];

  const user = {
    'mail': sanitize(form['email'].value)
  };

  startSession(isMember(user.mail, users));
}