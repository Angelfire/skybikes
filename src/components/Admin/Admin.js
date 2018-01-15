import { getItem } from '../../lib/helpers';
import TableUsers from '../TableUsers/TableUsers'

export const Admin = () => {
  const divTableUser = document.createElement('div');

  divTableUser.appendChild(TableUsers);

  return divTableUser;
}