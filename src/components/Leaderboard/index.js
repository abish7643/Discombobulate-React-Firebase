import React from 'react';
import  { FirebaseContext } from '../Firebase';
import { withAuthorization } from '../Session';
import PlayersList from './playerslist'

const Leaderboard = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return(
        <div className="container">
          <h1><span className="">Leaderboard</span></h1>
          <PlayersList/>
        </div>
      )
    }}
  </FirebaseContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Leaderboard);
