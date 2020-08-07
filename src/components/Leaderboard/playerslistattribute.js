import React from "react";
import moment from "moment/min/moment-with-locales";
// import withAuthentication from "../Session/withAuthentication";

const PlayersListRender = ({ users }) => (
  <React.Fragment>
    <p
      style={{ maxWidth: "380px", width: "95%" }}
      className="list__inner neumorphic__shadow neumorphic__shadow__padding"
    >
      <span className="text__left uppercase__text">Player</span>
      <span className="muted__text text__center">Score</span>
      <span className="muted__text text__right">Cracked At</span>
    </p>
    <div className="list">
      {users.map((user) => (
        <p
          key={user.username}
          className="list__inner neumorphic__shadow neumorphic__shadow__padding"
        >
          <span className="highlighted__text text__left">{user.username} </span>
          <span className="muted__text text__center">
            {" "}
            {user.challengesCompleted}{" "}
          </span>
          <span className="muted__text smaller__text text__right">
            {" "}
            ({moment(user.lastCorrectAnswerAtRealDb).fromNow()})
          </span>
        </p>
      ))}
    </div>
  </React.Fragment>
);

export default PlayersListRender;
