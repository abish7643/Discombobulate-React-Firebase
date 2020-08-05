import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom"; //For 404 Page Implementation

import * as ROUTES from "../../constants/routes";
//import { withFirebase } from '../Firebase';

//import { AuthUserContext } from '../Session';
import { withAuthentication } from "../Session";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import Rules from "../Rules";
import Leaderboard from "../Leaderboard";
import Footer from "../Footer";
import ChallengesPage from "../Challenges";
import NotFoundPage from "../NotFoundPage/notfoundpage";

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.RULES} component={Rules} />
      <Route path={ROUTES.LEADERBOARD} component={Leaderboard} />
      <Route path={ROUTES.CHALLENGES} component={ChallengesPage} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
    <Footer />
  </Router>
);

export default withAuthentication(App);
