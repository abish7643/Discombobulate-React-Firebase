import React from 'react';
import moment from 'moment/min/moment-with-locales'
import withAuthentication from '../Session/withAuthentication'

const PlayersListRender = ({ users }) => (
    <div className='list'>
      {users.map(user => (
        <span key={user.uid}>
        <p className="neumorphic__shadow neumorphic__shadow__padding">
        <span className="highlighted__text">{user.username.replace(/ .*/,'')} </span>- 
        <span className='muted__text'> {user.challengesCompleted} </span>
        <span className="muted__text smaller__text"> ({moment(user.lastCorrectAnswerAt.toDate()).fromNow()})</span>
          </p>
        </span>
      ))}
    </div>
  );

export default (PlayersListRender)