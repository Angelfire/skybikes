import {
  createBtn,
  createDivInput,
  getItem,
  isUser,
  isValidEmail, 
  pageReload,
  sanitizeField,
  setSession,
  startSession,
  updateErrors
} from '../../lib/helpers';
import {
  isBanned
} from './helpers';
import './login.scss';

export const Login = () => {
  const divLoginView = document.createElement('div');
  divLoginView.setAttribute('class', 'col-md-6');

  /**
   * 
   * @param {*} e 
   */
  const loginSubmit = e => {
    e.preventDefault();
    
    let errors = '';
    const users = JSON.parse(getItem('sb-users'));
    const form = document.forms['login-form'];
    const user = {
      'mail': sanitizeField(form['lemail'].value)
    };

    errors += !isValidEmail(user.mail) ? 'Please enter a valid email address (e.g., johndoe@sb.co). <br>'
      : !isUser(user.mail, users) ? 'You are not registered yet, please register. <br>'
        : isBanned(user.mail, users) ? 'You are not allowed to access the service, please contact support@sb.co <br>'
          : '';

    errors ? updateErrors(errors) : startSession(isUser(user.mail, users)); 
  }

    /**
   * Returns the complete DOM for Login Form
   * @return {object} DOM element for a form
   */
  const renderLoginForm = () => {
    const lForm = document.createElement('form');
    const llegend = document.createElement('legend');
    const errors = document.createElement('p');
    errors.setAttribute('id', 'errors');
    llegend.innerHTML = 'Login';
    lForm.appendChild(llegend);
    lForm.appendChild(errors);
    lForm.name = 'login-form';
    const submitLogin = createBtn('submit', 'login', 'Login');
    submitLogin.setAttribute('class', 'btn btn-sb');
    submitLogin.addEventListener('click', loginSubmit, false);

    lForm.appendChild(createDivInput('text', 'lemail', 'Enter your email'));
    lForm.appendChild(submitLogin); 

    return lForm;
  };

  divLoginView.appendChild(renderLoginForm());

  return divLoginView;
}
