import { Logout } from './components/Logout/Logout';
import { LoginRegister } from './containers/LoginRegister/LoginRegister';
import { Admin } from './containers/Admin/Admin';
import { Citizen } from './containers/Citizen/Citizen';
import { Worker } from './containers/Worker/Worker';
import { dbUsers } from '../public/dbusers';
import { bikeStations } from '../public/bikestations';
import { getItem, getSession, setItem } from './lib/helpers';
import './index.scss';

/**
 * Creates an inital database for bike stations
 */
getItem('sb-stations') ? getItem('sb-stations') : setItem('sb-stations', JSON.stringify(bikeStations));

/**
 * Retrieve information about users if they exists, otherwise, create an initial fake base
 */
getItem('sb-users') ? getItem('sb-users') : setItem('sb-users', JSON.stringify(dbUsers));

if (getSession('sb-session')) {
  document.getElementById('header').appendChild(Logout());
  if (JSON.parse(getSession('sb-session')).mail === 'sysadmin@sb.co') {
    document.getElementById('admin-sb').appendChild(Admin());
  }
  else if (JSON.parse(getSession('sb-session')).type === 'user') {
    document.getElementById('citizen-sb').appendChild(Citizen());
  }
  else if (JSON.parse(getSession('sb-session')).type === 'worker') {
    document.getElementById('worker-sb').appendChild(Worker());
  }
} else {
  document.getElementById('login-sb').appendChild(LoginRegister());
}
