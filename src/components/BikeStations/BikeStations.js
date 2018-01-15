import {
  isEmptyObject,
  isPrivilegedAccount,
  hasBike
} from './helpers';
import {
  delSession,
  getItem,
  getSession,
  pageReload,
  setItem
} from '../../lib/helpers';
import { bikeStations } from './stations.js';

export const BikeStation = () => {
  const divBikeStationView = document.createElement('div');
  divBikeStationView.setAttribute('class', 'stations');

  return divBikeStationView;
}
