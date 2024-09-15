import React, { useState } from 'react';
import './userInfo.css';

  

const UserInfo = () => {
  const [addMode, setAddMode] = useState(true);
  return (
    <div className='mainUserInfo'>
      <div className="userInfo">
        <div className="user">
          <img src="avatar.png" alt="" />
          <h2>User Name</h2>
        </div>
        <div className="icons">
          <img src="more.png" alt="" />
          <img src="video.png" alt="" />
          <img src="edit.png" alt="" />
        </div>
      </div>
      <div className="searchbox">
          <div className="searchInput">
            <label htmlFor="search">
              <img src="search.png" alt="" />
            </label>
            <input type="text" id="search" placeholder="Enter name" />
          </div>
          <img src={addMode ? 'plus.png' : 'minus.png'} alt="" onClick={() => setAddMode((prev) => !prev)} />
        </div>
    </div>
  );
};

export default UserInfo;
