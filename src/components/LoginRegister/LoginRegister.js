import {
  getItem,
  setSession
} from '../../lib/helpers';
import {
  createDivInput,
  createBtn,
  isUser,
  pageReload,
  sanitizeField
} from './helpers';
import './LoginRegister.scss';

const LoginRegister = () => {
  const globalDiv = document.createElement('div');
  globalDiv.setAttribute('class', 'login-component row');

  /**
   * Create temporary session and reload page
   * @param {*} u 
   */
  const startSession = u => {
    setSession('sb-session', JSON.stringify(u));
    pageReload();
  }

  /**
   * Create/add new user to users in localstorage
   * @param {*} user 
   * @param {*} users 
   */
  const createUser = (user, users) => {
    const newUser = Object.assign(users, user);
    setItem('sb-users', JSON.stringify(newUser));
    startSession(user);
  }

  /**
   * 
   * @param {*} e 
   */
  const loginSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(getItem('sb-users'));
    const form = document.forms['login-form'];
    const user = {
      'mail': sanitizeField(form['lemail'].value)
    };
    
    startSession(isUser(user.mail, users));
  }

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
    submitLogin.addEventListener('click', loginSubmit, false);

    lForm.appendChild(createDivInput('text', 'lemail', 'Enter your email'));
    lForm.appendChild(submitLogin); 

    lDiv.appendChild(lForm);

    return lDiv;
  };

  globalDiv.appendChild(renderRegisterForm());
  globalDiv.appendChild(renderLoginForm());

  return globalDiv;
}

export default LoginRegister;
