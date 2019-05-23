import React from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';


// Populates list of users on HomePage
const UserList = (props) => {
  const users = props.users.map(({user, _id}) => {
    return <UserAvatar user={user} key={_id} />
  });

  return (
    <div className="user-list">
      <div className="ui cards">{users}</div>
    </div>
  );
};

export default UserList;
