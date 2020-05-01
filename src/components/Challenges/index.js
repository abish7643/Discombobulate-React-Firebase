import React from 'react';
//import { compose } from 'recompose';

import NextChallenge from './nextchallenge'
import { AuthUserContext, withAuthorization } from '../Session';

import ChallengeAnswerInput from './ChallengeAnswerInput'

const questionAsImageURL = 'https://picsum.photos/900/600';

const ChallengesPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
    <div className='container'>
      <h1>Challenge <span className="highlighted__text"><NextChallenge/></span></h1>
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





