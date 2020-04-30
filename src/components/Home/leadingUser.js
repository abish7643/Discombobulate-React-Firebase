import React from 'react';

const LeadingUser = ({ highestUser }) => (
    <React.Fragment>
      {highestUser.map(highestScoredUser => (
        <span key={highestScoredUser.username}>
            <span className="highlighted__text">{highestScoredUser.challengesCompleted} ({highestScoredUser.username})</span>
        </span>
      ))}
    </React.Fragment>
  );

export default LeadingUser