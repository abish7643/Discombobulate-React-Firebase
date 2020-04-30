import React from 'react';

const challengesCompleted = ({ user }) => (
    <React.Fragment>
        <span className="highlighted__text">{user.challengesCompleted}</span>
    </React.Fragment>
  );

export default challengesCompleted