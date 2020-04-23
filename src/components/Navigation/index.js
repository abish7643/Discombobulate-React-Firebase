import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes'

const Navigation = () => (
  <div className='container'>
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.RULES}>Rules</Link>
      </li>
      <li>
        <Link to={ROUTES.LEADERBOARD}>Leaderboard</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;