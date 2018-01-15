import LoginRegister from '../src/components/LoginRegister/LoginRegister';
import Admin from '../src/components/Admin/Admin';
import { dbUsers } from '../public/dbusers';
import { getItem, getSession, setItem } from './lib/helpers';
import './index.scss';

/*
* Retrieve information about users if they exists, otherwise, create an initial fake base
*/
getItem('sb-users') ? getItem('sb-users') : setItem('sb-users', JSON.stringify(dbUsers));

if (getSession('sb-session')) {
  if (JSON.parse(getSession('sb-session')).mail === 'sysadmin@sb.co') {
    document.getElementById('admin-sb').appendChild(Admin());
  }
} else {
  document.getElementById('login-sb').appendChild(LoginRegister());
}
