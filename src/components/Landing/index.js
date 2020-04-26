import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

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
    this.props.firebase.users().orderByKey().limitToFirst(2).on('value', snapshot => {
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
      <div class="container">
        <h1>Users</h1>
        <div>
          {loading && <h1><span className="loading__animation">...</span></h1>}
          <UserList users={users} />
        </div>
      </div>
    );
  }
}
const UserList = ({ users }) => (
  <div>
    {users.map(user => (
      <span key={user.uid}>
        <p>
          <span className="highlighted__text">{user.username}</span> Joined
        </p>
      </span>
    ))}
  </div>
);

export default withFirebase(Landing);
