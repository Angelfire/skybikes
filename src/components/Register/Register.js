import {
  createBtn,
  createDivInput,
  setItem,
  startSession,
  getItem,
  sanitizeField
} from '../../lib/helpers';

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

    const users = JSON.parse(getItem('sb-users'));
    const form = document.forms['register-form'];
    const user = {
      'firstName': sanitizeField(form['rfirstname'].value),
      'lastName': sanitizeField(form['rlastname'].value),
      'mail': sanitizeField(form['remail'].value),
      'phone': sanitizeField(form['rphonenumber'].value),
      'type': 'user'
    };

    saveUser(user, users);
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
    const rlegend = document.createElement('legend');
    rlegend.innerHTML = 'Register';
    rForm.appendChild(rlegend);
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
