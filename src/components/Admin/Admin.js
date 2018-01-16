import { getItem } from '../../lib/helpers';
import { TableUsers } from '../TableUsers/TableUsers'
import { BikeStation } from '../BikeStations/BikeStations';

export const Admin = () => {
  const divAdminView = document.createElement('div');

  divAdminView.appendChild(BikeStation());
  divAdminView.appendChild(TableUsers());

  return divAdminView;
}
