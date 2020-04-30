import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import withAuthentication from '../Session/withAuthentication'
import { AuthUserContext } from '../Session';

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
    const { loading } = this.state;
    let userName = this.state.user.username

    return (
      <React.Fragment>
          {loading && <span className="loading__animation"></span>}
          {userName}
      </React.Fragment>
    );
  }
}

const UserInfoClass = withAuthentication(UserInfo)
export default withFirebase(UserInfoClass);
