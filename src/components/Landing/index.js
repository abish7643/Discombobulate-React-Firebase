import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import UserList from './userList'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().orderByKey().limitToFirst(10).on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
  this.props.firebase.users().off();
}
  render() {
    const { users, loading } = this.state;
    return (
      <div className="container">
        <h1>Newly Joined <span className="highlighted__text">Players</span></h1>
        <div>
          {loading && <h1><span className="loading__animation">...</span></h1>}
          <UserList users={users} />
        </div>
      </div>
    );
  }
}


export default withFirebase(Landing);
