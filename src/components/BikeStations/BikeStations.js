import {
  isEmptyObject,
  isPrivilegedAccount,
  hasBike
} from './helpers';
import {
  delSession,
  getItem,
  getSession,
  logout,
  pageReload,
  setItem,
  updateInstruction
} from '../../lib/helpers';
import './bikestations.scss';

export const BikeStation = () => {
  const divBikeStationView = document.createElement('div');
  divBikeStationView.setAttribute('class', 'stations');

  const users = JSON.parse(getItem('sb-users'));
  const bikeStations = JSON.parse(getItem('sb-stations'));
  const session = JSON.parse(getSession('sb-session'));

  /**
   * TODO: Update to object.assign
   * @param {object} session 
   */
  const updateMemberSession = session => {
    let fakeArray = [];
    fakeArray.push(session);
    const updatedUsers = users.map(user => fakeArray.find(o => o.mail === user.mail) || user);

    setItem('sb-members', JSON.stringify(updatedUsers));
  }

  /**
   * 
   * @param {*} id 
   */
  const removeBikeFromStation = id => {
    bikeStations.some((station, i) => station.some((bike, j) => bike.id === id ? station[j] = {} : false));
    setItem('sb-stations', JSON.stringify(bikeStations));
  }

  /**
   * Updates stations object in localStorage and reload page
   * @param {*} bike 
   */
  const automaticBikeReturn = bike => {
    delete bike.rentTime;
    bikeStations.some((station, i) => station.some((b, j) => isEmptyObject(b) ? station[j] = bike : false));
    setItem('sb-stations', JSON.stringify(bikeStations));
    pageReload();
  }

  /**
   * Create a `banned` key and set it to true before update the member session
   * @param {*} session 
   */
  const markAsBanned = (session) => {
    session.banned = true;
    updateMemberSession(session);
  }

  /**
   * 
   * @param {*} i 
   * @param {*} session 
   */
  const banMember = (i, session) => {
    // Stop countdown, update UI
    clearInterval(i);
    updateInstruction('Your remaining time is over.');
  
    // Return the bike
    automaticBikeReturn(session.bike);
  
    // Detach bike from member
    delete session.bike;
    updateMemberSession(session);
  
    // Update member session with `banned` key and "redirect" to login screen
    if (!isPrivilegedAccount(session.mail)) {
      markAsBanned(session);
      logout();
    }
  }

  /**
   * Ban member if countdown expires, otherwise, juste update the clock in the UI
   */
  const initCountdown = () => {
    let remainingTime = 1600;

    const i = setInterval(() => {
      if (remainingTime === 0) {
        banMember(i, session)
      } else {
        remainingTime--
        updateInstruction(`Return the bike before ${(remainingTime / 100) / 2} hours.`)
      }
    }, 10)
  }

  /**
   * 
   * @param {*} e 
   */
  const manualBikeReturn = (e) => {
    if (hasBike(session)) {
      // Get data attributes from the target (position in array) and update the sations object
      const i = e.target.dataset.station;
      const j = e.target.dataset.slot;
      bikeStations[i][j] = session.bike;
      delete bikeStations[i][j].rentTime;
  
      // Detach bike from member
      delete session.bike;
      updateMemberSession(session);
  
      // Update the statkl object in localStorage and reload page
      setItem('sb-stations', JSON.stringify(bikeStations));
      pageReload();
  
    } else {
      alert('You are not riding a bike.');
    }
  }

  /**
   * 
   * @param {*} e 
   */
  const rentBike = (e) => {
    if (!hasBike(session)) {
      // Get data attributes from target
      const bikeId = e.target.dataset.bike;
      const bikeColor = e.target.dataset.color;
      const stationNo = e.target.dataset.station;
      const slotNo = e.target.dataset.slot;
  
      // Udpate UI of the slot (becomes parking slot)
      e.preventDefault();
      e.target.className = 'slot parking';
      e.target.style.backgroundColor = '#f0f0f0';
      e.target.dataset.bike = '';
      e.target.dataset.station = stationNo;
      e.target.dataset.slot = slotNo;
      e.target.dataset.color = '';
      e.target.removeEventListener('click', rentBike);
      e.target.addEventListener('click', manualBikeReturn, false);
  
      // Update data
      // Add bike object to session
      session.bike = {
        'id': bikeId,
        'color': bikeColor,
        'rentTime': new Date().getTime()
      }

      updateMemberSession(session);
  
      // Remove bike from the local storage
      removeBikeFromStation(bikeId);
  
      // Start countdown
      initCountdown();
  
    } else {
      alert('You are already riding a bike!');
    }
  }

  /**
   * 
   */
  const renderBikeStations = () => {
    const divStationView = document.createElement('div');
    const divStationTitle = document.createElement('h2');
    divStationTitle.innerHTML = 'Bike Stations';
    divStationView.appendChild(divStationTitle);

    const instruction = document.createElement('p');
    instruction.setAttribute('id', 'instructions');
    instruction.innerHTML = 'You can rent a bike by clicking on it.'
    divStationView.appendChild(instruction);

    bikeStations.map((e, i) => {
      // Single station element
      const station = document.createElement('div');
      station.setAttribute('class', 'station');
  
      const label = document.createElement('h3');
      label.innerHTML = `Bike Station ${i + 1}`;
      station.appendChild(label);
  
      e.map((f, j) => {
        // Single bike element
        const bike = document.createElement('a');
        bike.href = '#';
        bike.className = f.id ? 'bike slot' : 'parking slot';
        bike.dataset.bike = f.id || '';
        bike.dataset.station = i;
        bike.dataset.slot = j;
        bike.dataset.color = f.color || '';
        bike.style.backgroundColor = f.color || '#f0f0f0';
        f.id ? bike.addEventListener('click', rentBike, false) : bike.addEventListener('click', manualBikeReturn, false);
        station.appendChild(bike);
      })

      divStationView.appendChild(station);
    })

    return divStationView;
  }

  divBikeStationView.appendChild(renderBikeStations());

  return divBikeStationView;
}
