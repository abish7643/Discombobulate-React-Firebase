import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import Username from './usernameattribute'

import {css} from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

class UserInfo extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      user: JSON.parse(localStorage.getItem('authUser')),
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    if (this.state.user === null){
      this.unsubscribe = this.props.firebase.user()
      .onSnapshot(snapshot => {
      let userData = snapshot.data();
      localStorage.setItem('userData', JSON.stringify(userData));
      this.setState({
        user: userData,
      });
    });
  }
  this.setState({loading:false})
}

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe();
  }
  
  render() {
    const { user, loading } = this.state;

    return (
      <React.Fragment>
          <ClipLoader size={9} color={'#4CB8A4'} loading={loading}/>
          <Username user={user}/>
      </React.Fragment>
    );
  }
}

export default withFirebase(UserInfo);
