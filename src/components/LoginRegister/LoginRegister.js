import {
  getItem
} from '../../lib/helpers';
import {
  createDivInput,
  createBtn
} from './helpers';
import './LoginRegister.scss';

export const LoginRegister = () => {
  const globalDiv = document.createElement('div');
  globalDiv.setAttribute('class', 'login-component row');

  /**
   * Returns the complete DOM for Register Form
   * @return {object} DOM element for a form
   */
  const renderRegisterForm = () => {
    const rDiv = document.createElement('div');
    rDiv.setAttribute('class', 'col-md-6');
    const rForm = document.createElement('form');
    rForm.name = 'register-form';
    const submitRegister = createBtn('submit', 'register', 'Register');
    submitRegister.setAttribute('class', 'btn btn-primary');

    rForm.appendChild(createDivInput('text', 'rfirstname', 'Enter your first name'));
    rForm.appendChild(createDivInput('text', 'rlastname', 'Enter your last name'));
    rForm.appendChild(createDivInput('text', 'rphonenumber', 'Enter your phone number'));
    rForm.appendChild(createDivInput('text', 'remail', 'Enter your email'));
    rForm.appendChild(submitRegister);

    rDiv.appendChild(rForm);

    return rDiv;
  };

  /**
   * Returns the complete DOM for Login Form
   * @return {object} DOM element for a form
   */
  const renderLoginForm = () => {
    const lDiv = document.createElement('div');
    lDiv.setAttribute('class', 'col-md-6');
    const lForm = document.createElement('form');
    lForm.name = 'login-form';
    const submitLogin = createBtn('submit', 'login', 'Login');
    submitLogin.setAttribute('class', 'btn btn-primary');

    lForm.appendChild(createDivInput('text', 'lemail', 'Enter your email'));
    lForm.appendChild(submitLogin); 

    lDiv.appendChild(lForm);

    return lDiv;
  };

  globalDiv.appendChild(renderRegisterForm());
  globalDiv.appendChild(renderLoginForm());

  return globalDiv;
}
