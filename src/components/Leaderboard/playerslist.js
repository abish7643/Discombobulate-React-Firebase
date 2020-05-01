import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import PlayersListRender from './playerslistattribute'

class PlayersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
      limit: 40,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
 
    this.unsubscribe = this.props.firebase
      .users()
      .orderBy('challengesCompleted', 'desc')
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
        <React.Fragment>
          {loading && <h1><span className="loading__animation">...</span></h1>}
          <PlayersListRender users={users} />
        </React.Fragment>
    );
  }
}


export default withFirebase(PlayersList);
