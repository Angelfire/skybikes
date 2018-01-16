import { TableUsers } from '../../components/TableUsers/TableUsers';
import { BikeStation } from '../../components/BikeStations/BikeStations';

export const Admin = () => {
  const divAdminView = document.createElement('div');
  divAdminView.setAttribute('class', 'admin');

  divAdminView.appendChild(BikeStation());
  divAdminView.appendChild(TableUsers());

  return divAdminView;
}
