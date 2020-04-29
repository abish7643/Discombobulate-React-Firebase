import React from 'react';

const UserList = ({ users }) => (
    <div>
      {users.map(user => (
        <span key={user.uid}>
          <p className="neumorphic__shadow neumorphic__shadow__padding">
            <span className="highlighted__text">{user.username}</span> Joined
          </p>
        </span>
      ))}
    </div>
  );

export default UserList