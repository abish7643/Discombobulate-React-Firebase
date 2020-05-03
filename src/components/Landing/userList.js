import React from 'react';
import moment from 'moment/min/moment-with-locales'

const UserList = ({ users }) => (
    <React.Fragment>
      <div className='list__small'>
      {users.map(user => (
        <span className=''>
          <p key={user.uid} className="list__small__inner__joined neumorphic__shadow__padding">
          <span className="highlighted__text">{user.username}</span>
          <span className='muted__text smaller__text text__right'>
            Joined {moment(user.AccountCreatedAt.toDate()).fromNow()}
            </span>
          </p>
          </span>
      ))}
      </div>
    </React.Fragment>
  );

export default UserList