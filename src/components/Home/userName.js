import React from 'react';

const Username = ({ user }) => {
  if (user === null){
    return <span className="highlighted__text"></span>;
  }
  return (<span className="highlighted__text">{user.username}</span>);
};

export default Username