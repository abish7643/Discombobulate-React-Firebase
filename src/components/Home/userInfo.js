import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import withAuthentication from '../Session/withAuthentication'
import { AuthUserContext } from '../Session';

class UserInfoClass extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      loading: false,
      user: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.user().on('value', snapshot => {
        let userObject = snapshot.val();
        console.log(userObject)

        this.setState({
        user: userObject,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
  this.props.firebase.user().off();
}
  render() {
    const { loading } = this.state;
    const userName = this.state.user.username

    return (
      <React.Fragment>
          {loading && <span className="loading__animation">...</span>}
          {userName}
      </React.Fragment>
    );
  }
}

export default withFirebase(UserInfoClass);
