import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import PlayersListRender from './playerslistattribute'

import {css} from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
      limit: 7,
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
 
    this.unsubscribe = this.props.firebase
      .users()
      .where('challengesCompleted', '>', 0)
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
          <div className='loader'>
            <div className='loader__inner'>
            {loading && <ClipLoader size={25} color={'#4CB8A4'} loading={this.state.loading}/>}
            </div>
          </div>
          <PlayersListRender users={users} />
        </React.Fragment>
    );
  }
}


export default withFirebase(PlayersList);
