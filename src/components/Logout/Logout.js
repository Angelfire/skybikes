import {
  createBtn,
  logout
} from '../../lib/helpers';

export const Logout = () => {
  const divLogoutView = document.createElement('div');
  divLogoutView.setAttribute('class', 'float-right');

  const renderLogout = () => {
    const divBtn = createBtn('submit', 'logout', 'Logout');
    divBtn.setAttribute('class', 'btn');
    divBtn.addEventListener('click', logout, false);

    return divBtn;
  }

  divLogoutView.appendChild(renderLogout());

  return divLogoutView;
}
