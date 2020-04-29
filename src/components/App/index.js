import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import * as ROUTES from '../../constants/routes'
//import { withFirebase } from '../Firebase';

//import { AuthUserContext } from '../Session';
import { withAuthentication } from '../Session';

import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import Rules from '../Rules';
import Leaderboard from '../Leaderboard';
import Footer from '../Footer'
import ChallengesPage from '../Challenges';


const App = () => (
  <Router>
    <Navigation/>
    <Route exact path={ROUTES.LANDING} component={LandingPage}/>
    <Route path={ROUTES.HOME} component={HomePage}/>
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} />
    <Route path={ROUTES.RULES} component={Rules} />
    <Route path={ROUTES.LEADERBOARD} component={Leaderboard} />
    <Route path={ROUTES.CHALLENGES} component={ChallengesPage} />
    <Footer/>
  </Router>
);


export default withAuthentication(App);
