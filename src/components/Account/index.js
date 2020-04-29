import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import UserInfoClass from '../Home/userInfo'

//import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="container">
        <h1>Account</h1>
        <span>Hey, <span className="highlighted__text"><UserInfoClass/></span></span>

        <h2>Reset Your Password</h2>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);


