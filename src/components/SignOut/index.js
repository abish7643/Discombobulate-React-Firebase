import React from 'react';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
  <Link className='navigationbar__inner__right__link' to='/signin' onClick={firebase.doSignOut}>
    Sign Out
  </Link>
);
export default withFirebase(SignOutButton);
