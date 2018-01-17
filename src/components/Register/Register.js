import {
  createBtn,
  createDivInput,
  isValidEmail,
  isUser,
  setItem,
  startSession,
  getItem,
  sanitizeField,
  updateErrors
} from '../../lib/helpers';
import { isValidName, isValidPhone } from './helpers';

export const Register = () => {
  const divRegistewView = document.createElement('div');
  divRegistewView.setAttribute('class', 'col-md-6');

  /**
   * Create/add new user to users in localstorage
   * @param {*} user 
   * @param {*} users 
   */
  const saveUser = (user, users) => {
    users.push(user);
    setItem('sb-users', JSON.stringify(users));
    startSession(user);
  }

  /**
   * 
   * @param {*} e 
   */
  const registerUser = e => {
    e.preventDefault();

    let errors = '';
    const users = JSON.parse(getItem('sb-users'));
    const form = document.forms['register-form'];
    const user = {
      'firstName': sanitizeField(form['rfirstname'].value),
      'lastName': sanitizeField(form['rlastname'].value),
      'mail': sanitizeField(form['remail'].value),
      'phone': sanitizeField(form['rphonenumber'].value),
      'type': 'user'
    };

    errors += !isValidName(user.firstName) ? 'Please enter a valid first name (e.g., John). <br>' : '';
    errors += !isValidName(user.lastName) ? 'Please enter a valid last name (e.g., Doe). <br>' : '';
    errors += !isValidPhone(user.phone) ? 'Please enter a valid phone number (e.g., 1234567). <br>' : ''
    errors += !isValidEmail(user.mail) ? 'Please enter a valid email address (e.g., john@doe.com). <br>'
      : isUser(user.mail, users) ? 'You are already registered, please login. <br>'
        : ''
  
    errors ? updateErrors(errors) : saveUser(user, users);
  }

  /**
   * Returns the complete DOM for Register Form
   * @return {object} DOM element for a form
   */
  const renderRegisterForm = () => {
    const rForm = document.createElement('form');
    const rlegend = document.createElement('legend');
    const errors = document.createElement('p');
    errors.setAttribute('id', 'errors');
    rForm.name = 'register-form';
    rlegend.innerHTML = 'Register';
    rForm.appendChild(rlegend);
    rForm.appendChild(errors);
    const submitRegister = createBtn('submit', 'register', 'Register');
    submitRegister.setAttribute('class', 'btn btn-sb');
    submitRegister.addEventListener('click', registerUser, false);

    rForm.appendChild(createDivInput('text', 'rfirstname', 'Enter your first name'));
    rForm.appendChild(createDivInput('text', 'rlastname', 'Enter your last name'));
    rForm.appendChild(createDivInput('text', 'rphonenumber', 'Enter your emergency phone number'));
    rForm.appendChild(createDivInput('text', 'remail', 'Enter your email'));
    rForm.appendChild(submitRegister);

    return rForm;
  }

  divRegistewView.appendChild(renderRegisterForm());

  return divRegistewView;
}
