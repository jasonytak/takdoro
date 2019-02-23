import React from 'react';

const UserAvatar = props => {
  return (
    <div className="content">
      <i className="male icon"></i>
        <div className="header">{props.user}</div>
    </div>
  );
};

export default UserAvatar;
