import { createBtn, pageReload, setItem } from '../../lib/helpers';
import { bikeStations } from '../../../public/bikestations';

export const CleanBikes = () => {
  const divCleanBikesView = document.createElement('div');
  divCleanBikesView.setAttribute('class', 'clean-bikes');

  const Clean = () => {
    setItem('sb-stations', JSON.stringify(bikeStations));
    pageReload();
  }

  const renderCleanBikes = () => {
    const btn = createBtn('button', 'cleanbike', 'Clean Bikes');
    btn.setAttribute('class', 'btn btn-primary');
    btn.addEventListener('click', Clean, false);

    return btn;
  }

  divCleanBikesView.appendChild(renderCleanBikes());

  return divCleanBikesView;
}
