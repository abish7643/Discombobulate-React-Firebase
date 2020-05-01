import React from 'react';
import moment from 'moment/min/moment-with-locales'

const PlayersListRender = ({ users }) => (
    <div>
      {users.map(user => (
        <span key={user.uid}>
        <p className="neumorphic__shadow neumorphic__shadow__padding">
        <span className="highlighted__text">{user.username.replace(/ .*/,'')} </span>- 
        <span className='muted__text'> {user.challengesCompleted} Challenges</span>
        <span className="muted__text"> ({moment(user.lastCorrectAnswerAt.toDate()).calendar()})</span>
          </p>
        </span>
      ))}
    </div>
  );

export default PlayersListRender