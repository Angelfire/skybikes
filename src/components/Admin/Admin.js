import { getItem } from '../../lib/helpers';
import { TableUsers } from '../TableUsers/TableUsers'

const Admin = () => {
  const divTableUser = document.createElement('div');

  divTableUser.appendChild(TableUsers());

  return divTableUser;
}

export default Admin;