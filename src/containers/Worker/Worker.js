import { BikeStation } from '../../components/BikeStations/BikeStations';
import { CleanBikes } from '../../components/CleanBikes/CleanBikes';

export const Worker = () => {
  const divWorkerView = document.createElement('div');
  divWorkerView.setAttribute('class', 'citizen');

  divWorkerView.appendChild(BikeStation());
  divWorkerView.appendChild(CleanBikes());

  return divWorkerView;
}
