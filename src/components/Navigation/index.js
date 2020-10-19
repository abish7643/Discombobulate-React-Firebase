import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.scss";

import * as ROUTES from "../../constants/routes";
import { GiRank3, GiThorHammer, GiBatMask, GiDoorHandle } from "react-icons/gi";
import SignOutButton from "../SignOut";

import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <div className="navigationbar">
    <div className="navigationbar__inner">
      <div className="navigationbar__inner__left">
        <NavLink
          to={ROUTES.LANDING}
          activeClassName="active"
          className="navigationbar__inner__left__link"
        >
          Discombobulate
        </NavLink>
      </div>
      <div className="navigationbar__inner__right">
        <NavLink
          to={ROUTES.HOME}
          activeClassName="active"
          className="navigationbar__inner__right__link"
        >
          Home
        </NavLink>
        <NavLink
          to={ROUTES.RULES}
          activeClassName="active"
          className="navigationbar__inner__right__link"
        >
          <GiThorHammer className="navigationbar__inner__right__link__icon" />
          Rules
        </NavLink>
        <NavLink
          to={ROUTES.LEADERBOARD}
          activeClassName="active"
          className="navigationbar__inner__right__link"
        >
          <GiRank3 className="navigationbar__inner__right__link__icon" />
          Leaderboard
        </NavLink>
        <NavLink
          to={ROUTES.ACCOUNT}
          activeClassName="active"
          className="navigationbar__inner__right__link"
        >
          <GiBatMask className="navigationbar__inner__right__link__icon" />
          Account
        </NavLink>
        <SignOutButton />
      </div>
    </div>
  </div>
);

const NavigationNonAuth = () => (
  <div className="navigationbar">
    <div className="navigationbar__inner">
      <div className="navigationbar__inner__left">
        <NavLink
          to={ROUTES.LANDING}
          activeClassName="active"
          className="navigationbar__inner__left__link"
        >
          Discombobulate
        </NavLink>
      </div>
      <div className="navigationbar__inner__right">
        <NavLink
          to={ROUTES.HOME}
          activeClassName="active"
          className="navigationbar__inner__right__link"
        >
          Home
        </NavLink>
        <NavLink
          to={ROUTES.RULES}
          activeClassName="active"
          className="navigationbar__inner__right__link"
        >
          <GiThorHammer className="navigationbar__inner__right__link__icon" />
          Rules
        </NavLink>
        <NavLink
          to={ROUTES.LEADERBOARD}
          activeClassName="active"
          className="navigationbar__inner__right__link"
        >
          <GiRank3 className="navigationbar__inner__right__link__icon" />
          Leaderboard
        </NavLink>
        <NavLink
          to={ROUTES.SIGN_IN}
          activeClassName="active"
          className="navigationbar__inner__right__link"
        >
          <GiDoorHandle className="navigationbar__inner__right__link__icon" />
          Login
        </NavLink>
      </div>
    </div>
  </div>
);

export default Navigation;
