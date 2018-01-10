import {
  createUser,
  startNewSession
} from './helpers';
import './LoginRegister.scss';

export const LoginRegister = () => {
  const registerForm = `
    <form name="register-form">
      <input type="text" name="firstname" placeholder="Enter your first name">
      <input type="text" name="lastname" placeholder="Enter your last name">
      <input type="text" name="phonenumber" placeholder="Enter your phone number">
      <input type="text" name"email" placeholder="Enter your email">
      <input type="submit" value="Register">
    </form>
  `;

  const loginForm = `
    <form name="login-form">
      <input type="text" name"email" placeholder="Enter your email">
      <input type="submit" value="Login">
    </form>
  `;

  return `
    <div class="login-component row">
      <div class="md-6">${registerForm}</div>
      <div class="md-6">${loginForm}</div>
    </div>
  `;
}