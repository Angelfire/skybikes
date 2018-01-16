import { TableUsers } from '../TableUsers/TableUsers'
import { BikeStation } from '../BikeStations/BikeStations';

export const Admin = () => {
  const divAdminView = document.createElement('div');
  divAdminView.setAttribute('class', 'admin');

  divAdminView.appendChild(BikeStation());
  divAdminView.appendChild(TableUsers());

  return divAdminView;
}
