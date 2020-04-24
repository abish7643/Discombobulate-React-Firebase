import React from 'react';
import  { FirebaseContext } from '../Firebase';

const HomePage = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return(
        <div className="container">
          <h1>I have access to <span className="highlighted__text"> Firebase </span></h1>
          <br/>And Can Render Anything
        </div>
      )
    }}
  </FirebaseContext.Consumer>
);

export default HomePage;
