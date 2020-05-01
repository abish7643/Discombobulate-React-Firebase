import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';

import UserInfo from '../Home/userInfo'
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="container">
        <h1>Account</h1>
        <h2>Hey, <span className="highlighted__text"><UserInfo/></span></h2>
        <h4>Reset Your Password</h4>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);


