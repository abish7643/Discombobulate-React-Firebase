import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
const AccountPage = () => (
  <div class="container">
    <h1>Account <span className="highlighted__text"></span></h1>
    <h2>Forgot <span className="highlighted__text">Password</span></h2>
    <PasswordForgetForm />
    <h2> <span className="highlighted__text">Reset Your</span> Password</h2>
    <PasswordChangeForm />
  </div>
);
export default AccountPage;
