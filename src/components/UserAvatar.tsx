import * as React from 'react';
import defaultUserPic from '../img/defaultUserPic.png';

function UserAvatar({ userData }) {
  return (
    <img src={userData.value ? userData.value : defaultUserPic} alt="Avatar" style={{ width: 40, height: 40, borderRadius: '50%' }} />
  );
}

export default UserAvatar;
