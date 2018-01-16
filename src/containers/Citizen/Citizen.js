import { BikeStation } from '../../components/BikeStations/BikeStations';

export const Citizen = () => {
  const divCitizenView = document.createElement('div');
  divCitizenView.setAttribute('class', 'citizen');

  divCitizenView.appendChild(BikeStation());

  return divCitizenView;
}
