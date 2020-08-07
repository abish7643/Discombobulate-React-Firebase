import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import PlayersListRender from "./playerslistattribute";

// import { css } from "@emotion/core";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

class PlayersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
      limit: 10,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    let usersList = [];
    this.props.firebase
      .usersRealDb()
      .limitToLast(this.state.limit)
      .orderByChild("timeStampAndChallengeCompleted")
      .on("child_added", (snapshot) => {
        usersList.unshift(snapshot.val());
        // console.log(usersList);

        this.setState({
          users: usersList,
          loading: false,
        });
      });
  }

  componentWillUnmount() {
    this.props.firebase.usersRealDb().off();
  }
  render() {
    const { users, loading } = this.state;
    return (
      <React.Fragment>
        <div className="loader">
          <div className="loader__inner" style={{ marginTop: "40px" }}>
            {loading && (
              <ClimbingBoxLoader
                size={15}
                color={"#4CB8A4"}
                loading={this.state.loading}
              />
            )}
          </div>
        </div>
        <PlayersListRender users={users} />
      </React.Fragment>
    );
  }
}

export default withFirebase(PlayersList);
