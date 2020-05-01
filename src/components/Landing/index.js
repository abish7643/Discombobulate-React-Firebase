import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import UserList from './userList'

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      limit: 5,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
 
    this.unsubscribe = this.props.firebase
      .users()
      .orderBy('AccountCreatedAt', 'desc')
      .limit(this.state.limit)
      .onSnapshot(snapshot => {
        let users = [];
 
        snapshot.forEach(doc =>
          users.push({ ...doc.data(), uid: doc.id }),
        );
 
        this.setState({
          users,
          loading: false,
        });
      });
  }
 
  componentWillUnmount() {
    this.unsubscribe();
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
