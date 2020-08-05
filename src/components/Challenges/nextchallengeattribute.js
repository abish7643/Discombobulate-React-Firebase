import React from "react";

const NextChallengeRender = ({ user }) => {
  if (user === null) {
    return <span className="highlighted__text"></span>;
  }
  return (
    <span className="highlighted__text">{user.challengesCompleted + 1}</span>
  );
};

export default NextChallengeRender;
