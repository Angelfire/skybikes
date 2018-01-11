import {
  createUser,
  initSession
} from './helpers';
import './LoginRegister.scss';

export const LoginRegister = () => {

  const registerForm = `
    <form name="register-form">
      <div class="form-group">
        <input class="form-control" type="text" name="firstname" placeholder="Enter your first name">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" name="lastname" placeholder="Enter your last name">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" name="phonenumber" placeholder="Enter your phone number">
      </div>
      <div class="form-group">
        <input class="form-control" type="text" name"email" placeholder="Enter your email">
      </div>
      <input type="submit" class="btn btn-primary" value="Register">
    </form>
  `;

  const loginForm = `
    <form name="login-form">
      <div class="form-group">
        <input class="form-control" type="text" name"email" placeholder="Enter your email">
      </div>
      <input type="submit" class="btn btn-primary" value="Login" onclick="${initSession}">
    </form>
  `;

  return `
    <div class="login-component row">
      <div class="col-md-6">${registerForm}</div>
      <div class="col-md-6">${loginForm}</div>
    </div>
  `;
}
