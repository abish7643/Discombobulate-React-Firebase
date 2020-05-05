import React, { Component } from 'react';
import { Link,  } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import {compose} from 'recompose'

import  { withFirebase } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

import {css} from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import Username from './usernameattribute'
import Challenges from './challengecompletedattribute'


const Quote = require('inspirational-quotes');

class HomePageClass extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      authUser: JSON.parse(localStorage.getItem('authUser')),
      user: JSON.parse(localStorage.getItem('user')),
      quote: {},
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    const randomQuote = Quote.getQuote();
    this.setState({ quote: randomQuote});
    
    this.unsubscribe = this.props.firebase.user(this.state.authUser.uid)
      .onSnapshot(snapshot => {
      let userData = snapshot.data();
      localStorage.setItem('userData', JSON.stringify(userData));
      this.setState({
        user: userData,
        loading: false,
      });
    });
  }
  
  render() { 
    const { highestScoreUserData, loading } = this.state;
    const randomQuote = this.state.quote
    return(
      <AuthUserContext.Consumer>
        {authUser => (
      <div className="container">
        <div className='container__inner neumorphic__shadow neumorphic__shadow__padding'>
          <p className='title__withname'>
            Hey <span className="highlighted__text">
            <Username user={this.state.user}/></span>
          </p>
          <p>
            <span className="neumorphic__shadow neumorphic__shadow__padding">
            You Completed 
            <span className="highlighted__text"> <Challenges user={this.state.user}/>
              </span> Challenges
            </span>
          </p>
          <p className="quote margin__bottom__20">
            <p className="italic__text muted__text neumorphic__shadow neumorphic__shadow__padding">
              {randomQuote.text} - <span className='highlighted__text'>
                {randomQuote.author}
              </span>
            </p>
          </p>
          <Link to={ROUTES.CHALLENGES}>
          <button className="button__form__submit margin__bottom__20">
              Continue <ClipLoader size={8} color={'#4CB8A4'} loading={this.state.loading}/>
          </button>
          </Link>
        </div>
      </div>
        )
      }
    </AuthUserContext.Consumer>
    );
  }
}


const condition = authUser => !!authUser;
const HomePage = compose(
  withAuthorization(condition),
)(HomePageClass)


export default withFirebase(HomePage);
