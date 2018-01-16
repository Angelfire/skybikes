import { Login } from '../Login/Login';
import { Register } from '../Register/Register'

export const LoginRegister = () => {
  const divLoginRegisterView = document.createElement('div');
  divLoginRegisterView.setAttribute('class', 'login-component row');

  /**
   * Append Register and Login Forms
   */
  divLoginRegisterView.appendChild(Register());
  divLoginRegisterView.appendChild(Login());

  return divLoginRegisterView;
}
