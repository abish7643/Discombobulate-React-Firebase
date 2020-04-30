import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import withAuthentication from '../Session/withAuthentication'
import Username from './userName'

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
          <Username user={user}/>
      </React.Fragment>
    );
  }
}

const UserInfoClass = withAuthentication(UserInfo)
export default withFirebase(UserInfoClass);
