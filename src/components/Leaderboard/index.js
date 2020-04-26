import React from 'react';
import  { FirebaseContext } from '../Firebase';
import { withAuthorization } from '../Session';

const Leaderboard = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return(
        <div className="container">
          <h1><span className="highlighted__text">Leaderboard</span></h1>
          <br/>Not Started As of Now
        </div>
      )
    }}
  </FirebaseContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(Leaderboard);
