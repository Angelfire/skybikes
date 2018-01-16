import { LoginRegister } from './components/LoginRegister/LoginRegister';
import { Admin } from './components/Admin/Admin';
import { Logout } from './components/Logout/Logout';
import { dbUsers } from '../public/dbusers';
import { bikeStations } from '../public/bikestations';
import { getItem, getSession, setItem } from './lib/helpers';
import './index.scss';
import { BikeStation } from './components/BikeStations/BikeStations';
import { bikeStations } from '../public/bikestations';

/**
 * 
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
} else {
  document.getElementById('login-sb').appendChild(LoginRegister());
}
