import React from 'react';

const Username = ({ user }) => (
    <React.Fragment>
        <span className="highlighted__text">{user.username}</span>
    </React.Fragment>
  );

export default Username