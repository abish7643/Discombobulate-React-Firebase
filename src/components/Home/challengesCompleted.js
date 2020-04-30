import React from 'react';

const challengesCompleted = ({ user }) => {
  if (user === null){
    return <span className="highlighted__text"></span>;
  } 
  return (<span className="highlighted__text">{user.challengesCompleted}</span>);
}
export default challengesCompleted