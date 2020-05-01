import React from 'react';
import moment from 'moment/min/moment-with-locales'

const UserList = ({ users }) => (
    <React.Fragment>
      {users.map(user => (
          <p key={user.uid} className="neumorphic__shadow neumorphic__shadow__padding">
          <span className="highlighted__text">{user.username.replace(/ .*/,'')}</span> <span className='muted__text'>
            Joined {moment(user.AccountCreatedAt.toDate()).calendar()}</span>
          </p>
      ))}
    </React.Fragment>
  );

export default UserList