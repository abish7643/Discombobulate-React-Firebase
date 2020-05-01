import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import NextChallengeRender from './nextchallengeattribute'

class NextChallenge extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      user: JSON.parse(localStorage.getItem('authUser')),
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    console.log(this.state.user)
    if (this.state.user === null){
      this.unsubscribe = this.props.firebase.user()
      .onSnapshot(snapshot => {
      let userData = snapshot.data();
      localStorage.setItem('userData', JSON.stringify(userData));
      console.log(userData)
      this.setState({
        user: userData,
        loading: false,
      });
    });
    }
}

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  
  render() {
    const { user, loading } = this.state;

    return (
      <React.Fragment>
          <NextChallengeRender user={user}/>
      </React.Fragment>
    );
  }
}

export default withFirebase(NextChallenge);
