import React from 'react';
import { Link,  } from 'react-router-dom'
import  { FirebaseContext } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';
import UserInfo from '../Home/userInfo' 

//import Landing from '../Landing'
import * as ROUTES from '../../constants/routes'


const HomePage = () => (
  <AuthUserContext.Consumer>
    {authUser => {
      return(
        <div className="container">
          <div className='container__inner neumorphic__shadow neumorphic__shadow__padding'>
            
            <h2><span className="neumorphic__shadow neumorphic__shadow__padding">
              Hey <span className="highlighted__text"><UserInfo/></span>
              </span>
            </h2>
            <h3>
              <span className="neumorphic__shadow neumorphic__shadow__padding">
                You Completed <span className="highlighted__text">01</span> Challenges
              </span>
            </h3>
            <p className="neumorphic__shadow__padding">
              <span className="neumorphic__shadow neumorphic__shadow__padding">
              Highest Achieved Score - <span className="highlighted__text">05 (Void)</span><br/>
              </span>
              <p className="italic__text neumorphic__shadow neumorphic__shadow__padding">Doesn't Matter How Much You're Behind.
              <span className="highlighted__text italic__text"> You Can Pull Ahead No Matter What!</span>
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
    }}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);
