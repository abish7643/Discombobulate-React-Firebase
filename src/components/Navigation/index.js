import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

import * as ROUTES from '../../constants/routes'
import { GiRank3, GiThorHammer, GiBatMask, GiDoorHandle } from 'react-icons/gi';
import SignOutButton from '../SignOut';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className='navigationbar'>
    <div className='navigationbar__inner'>
      <div className="navigationbar__inner__left">
        <Link to={ROUTES.LANDING} className='navigationbar__inner__left__link'>Discombobulate</Link>

      </div>
      <div className='navigationbar__inner__right'>
          <Link to={ROUTES.HOME} className='navigationbar__inner__right__link'>
            Home
            </Link>
          <Link to={ROUTES.RULES} className='navigationbar__inner__right__link'>
            <GiThorHammer className="navigationbar__inner__right__link__icon"/>
            Rules
          </Link>
          <Link to={ROUTES.LEADERBOARD} className='navigationbar__inner__right__link'>
            <GiRank3 className="navigationbar__inner__right__link__icon"/>
            Leaderboard
          </Link>
          <Link to={ROUTES.ACCOUNT} className='navigationbar__inner__right__link'>
            <GiBatMask className="navigationbar__inner__right__link__icon"/>
            Account
          </Link>
            <SignOutButton />

      </div>
      </div>
  </div>
);

const NavigationNonAuth = () => (
  <div className='navigationbar'>
    <div className='navigationbar__inner'>
      <div className="navigationbar__inner__left">
        <Link to={ROUTES.LANDING} className='navigationbar__inner__left__link'>Discombobulate</Link>

      </div>
      <div className='navigationbar__inner__right'>
          <Link to={ROUTES.HOME} className='navigationbar__inner__right__link'>
            Home
            </Link>
          <Link to={ROUTES.RULES} className='navigationbar__inner__right__link'>
            <GiThorHammer className="navigationbar__inner__right__link__icon"/>
            Rules
          </Link>
          <Link to={ROUTES.LEADERBOARD} className='navigationbar__inner__right__link'>
            <GiRank3 className="navigationbar__inner__right__link__icon"/>
            Leaderboard
          </Link>
          <Link to={ROUTES.SIGN_IN} className='navigationbar__inner__right__link'>
            <GiDoorHandle className="navigationbar__inner__right__link__icon"/>
            Sign In
          </Link>

      </div>
      </div>
  </div>
);

export default Navigation;
