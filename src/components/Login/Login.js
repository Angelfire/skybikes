import {
  createBtn,
  createDivInput,
  getItem,
  isUser,
  pageReload,
  sanitizeField,
  setSession,
  startSession,
  updateInstruction
} from '../../lib/helpers';
import {
  validateLogin
} from './helpers';

export const Login = () => {
  const divLoginView = document.createElement('div');
  divLoginView.setAttribute('class', 'col-md-6');

  /**
   * 
   * @param {*} e 
   */
  const loginSubmit = e => {
    e.preventDefault();

    const users = JSON.parse(getItem('sb-users'));
    const form = document.forms['login-form'];
    const user = {
      'mail': sanitizeField(form['lemail'].value)
    };
    
    validateLogin() ? updateInstruction(errors) : startNewSession(isUser(user.mail, users));
  }

    /**
   * Returns the complete DOM for Login Form
   * @return {object} DOM element for a form
   */
  const renderLoginForm = () => {
    const lForm = document.createElement('form');
    const llegend = document.createElement('legend');
    llegend.innerHTML = 'Login';
    lForm.appendChild(llegend);
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
