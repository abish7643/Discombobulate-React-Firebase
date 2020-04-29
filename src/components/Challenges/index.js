import React from 'react';
//import {FirebaseContext} from '../Firebase'
import { AuthUserContext, withAuthorization } from '../Session';
//import { compose } from 'recompose';

import ChallengeAnswerInput from './ChallengeAnswerInput'

const questionAsImageURL = 'https://picsum.photos/900/600';

const ChallengesPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
    <div className='container'>
      <h1>Challenge <span className="highlighted__text">01</span></h1>
      <div className='imagecontainer'>
          <img src={questionAsImageURL}
          className='imagecontainer__img neumorphic__shadow' 
          alt='Reload The Page If You Cant see the Image'/>
          <p className='imagecontainer__caption'>Hey This a Question</p>
        </div>
      
      <div className='container__inner'>
        
        <div>
          <ChallengeAnswerInput/>
        </div>
      </div>
    </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
export default withAuthorization(condition)(ChallengesPage);





