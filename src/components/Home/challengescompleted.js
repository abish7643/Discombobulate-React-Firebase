import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Challenges from './challengecompletedattribute'
import {css} from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

class ChallengesCompleted extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      authUser: JSON.parse(localStorage.getItem('authUser')),
      user: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
      this.unsubscribe = this.props.firebase.user(this.state.authUser.uid)
      .onSnapshot(snapshot => {
      let userData = snapshot.data();
      this.setState({
        user: userData,
        loading: false,
      });
    });
}

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  
  render() {
    const { user, loading } = this.state;

    return (
      <React.Fragment>
        {loading && <ClipLoader size={8} color={'#4CB8A4'} loading={loading}/>}
          <Challenges user={user}/>
      </React.Fragment>
    );
  }
}

export default withFirebase(ChallengesCompleted);
