import React, { Component } from 'react';
import { Link,  } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import {compose} from 'recompose'

import  { withFirebase } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

import LeadingUser from './leadingUser'
import UserInfoClass from './userInfo'
import ChallengesCompleted from './challengescompleted'

class HomePageClass extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      authUser: JSON.parse(localStorage.getItem('authUser')),
      user: JSON.parse(localStorage.getItem('user')),
      highestScoreUserData: [],
      highestScoreUserLimit: 1, 
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.unsubscribe = this.props.firebase
      .users()
      .orderBy('challengesCompleted', 'desc')
      .limit(this.state.highestScoreUserLimit)
      .onSnapshot(snapshot => {
        let highestScoreUserData = [];
        snapshot.forEach(doc =>
          highestScoreUserData.push({ ...doc.data(), uid: doc.id }),
        );
        
        this.setState({
          highestScoreUserData,
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  
  render() { 
    const { highestScoreUserData, loading } = this.state;
    return(
      <AuthUserContext.Consumer>
        {authUser => (
      <div className="container">
        <div className='container__inner neumorphic__shadow neumorphic__shadow__padding'>
          
          <h2><span className="neumorphic__shadow neumorphic__shadow__padding">
          Hey <span className="highlighted__text"><UserInfoClass/></span>
            </span>
          </h2>
          <h3>
            <span className="neumorphic__shadow neumorphic__shadow__padding">
            You Completed <span className="highlighted__text"><ChallengesCompleted/></span> Challenges
            </span>
          </h3>
          <p className="neumorphic__shadow__padding">
            <span className="neumorphic__shadow neumorphic__shadow__padding">
            Highest Achieved Score - {loading && <span><span className="loading__animation">...</span></span>}
            <LeadingUser highestUser={highestScoreUserData}/><br/>
            </span>
            <p className="italic__text muted__text neumorphic__shadow neumorphic__shadow__padding">
              Doesn't Matter How Much You're Behind. You Can Pull Ahead No Matter What!
            </p>
          </p>
          <Link to={ROUTES.CHALLENGES}>
          <button className="button__form__submit">
              Continue
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
