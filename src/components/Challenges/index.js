import React, { Component } from 'react';
import { compose } from 'recompose';

import  { withFirebase } from '../Firebase';
import { AuthUserContext, withAuthorization } from '../Session';

import ChallengeAnswerInput from './ChallengeAnswerInput'
import QuestionRender from './question'

//const questionAsImageURL = 'https://i.ibb.co/zGNNf6k/1.png';


class ChallengesPageClass extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: false,
      authUser: JSON.parse(localStorage.getItem('authUser')),
      user: {},
      questionData: {},
      nextQuestionNumber: 0,
     }
    }

     componentDidMount() {
      this.setState({ loading: true });
      
      const userID = this.state.authUser.uid;
      this.props.firebase.user(userID)
      .onSnapshot(snapshot => {
      let userData = snapshot.data();
      let nextUserChallenge = userData.challengesCompleted + 1;
      
      this.setState({
        user: userData,
        nextQuestionNumber: nextUserChallenge,
        });

      this.props.firebase
        .question(this.state.nextQuestionNumber)
        .onSnapshot(snapshot => {
          let question = snapshot.data();
          this.setState({
            questionData: question,
            loading: false,
          });
        });
          
      });

    }
  
    componentWillUnmount() {
      this.unsubscribe && this.unsubscribe();
    }

  render() {
    let questions = this.state.questionData;
    const loading = this.state.loading;
    return (
      <AuthUserContext.Consumer>
        {authUser => (
      <div className='container'>
      <h1>Challenge <span className="highlighted__text">
        {loading && <span className='highlighted__text'>...</span>} {questions.number}</span></h1>
      <QuestionRender questions={questions}/>
      {loading && <span className='highlighted__text'>...</span>}
      <div className='container__inner'>
      <div>
        <ChallengeAnswerInput/>
        </div>
      </div>
      </div>
    )}
    </AuthUserContext.Consumer>
  );
  }
}

const condition = authUser => !!authUser;
const ChallengesPage = compose(
  withFirebase,
)(ChallengesPageClass)

export default withAuthorization(condition)(ChallengesPage);





