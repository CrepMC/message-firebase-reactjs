import { useState } from 'react';
import './detail.css';

const Detail = () => {
  const [arrows, setArrows] = useState({
    chatSetting: false,
    privacyHelp: false,
    sharedPhotos: false,
    sharedFiles: false,
  });

  const handleArrowToggle = (key) => {
    setArrows((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="detail">
      <div className="user">
        <img src="avatar.png" alt="" />
        <h2>Tuan Anh</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img
              src={arrows.chatSetting ? 'arrowUp.png' : 'arrowDown.png'}
              alt="Arrow Icon"
              onClick={() => handleArrowToggle('chatSetting')}
            />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img
              src={arrows.privacyHelp ? 'arrowUp.png' : 'arrowDown.png'}
              alt="Arrow Icon"
              onClick={() => handleArrowToggle('privacyHelp')}
            />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img
              src={arrows.sharedPhotos ? 'arrowUp.png' : 'arrowDown.png'}
              alt="Arrow Icon"
              onClick={() => handleArrowToggle('sharedPhotos')}
            />
          </div>
          <div className="photos">
            <div className="photo">
              <div className="photoDetail">
                <div className="img">
                  <img src="bg.jpg" alt="" className="img" />
                  <img src="download.png" alt="" className="downloadBtn" />
                </div>
                <span>bg.jpg</span>
              </div>
            </div>
            <div className="photo">
              <div className="photoDetail">
                <div className="img">
                  <img src="bg2.jpg" alt="" className="img" />
                  <img src="download.png" alt="" className="downloadBtn" />
                </div>
                <span>bg.jpg</span>
              </div>
            </div>
            <div className="photo">
              <div className="photoDetail">
                <div className="img">
                  <img src="bg.jpg" alt="" className="img" />
                  <img src="download.png" alt="" className="downloadBtn" />
                </div>
                <span>bg.jpg</span>
              </div>
            </div>
            <div className="photo">
              <div className="photoDetail">
                <div className="img">
                  <img src="bg2.jpg" alt="" className="img" />
                  <img src="download.png" alt="" className="downloadBtn" />
                </div>
                <span>bg.jpg</span>
              </div>
            </div>
            <div className="photo">
              <div className="photoDetail">
                <div className="img">
                  <img
                    src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                    alt=""
                    className="img"
                  />
                  <img src="download.png" alt="" className="downloadBtn" />
                </div>
                <span>bg.jpg</span>
              </div>
            </div>
            <div className="photo">
              <div className="photoDetail">
                <div className="img">
                  <img src="bg2.jpg" alt="" className="img" />
                  <img src="download.png" alt="" className="downloadBtn" />
                </div>
                <span>bg.jpg</span>
              </div>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img
              src={arrows.sharedFiles ? 'arrowUp.png' : 'arrowDown.png'}
              alt="Arrow Icon"
              onClick={() => handleArrowToggle('sharedFiles')}
            />
          </div>
        </div>
        <div className="btn">
          <button id="blockBtn">Block User</button>
          <button id="logoutBtn">Log out</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
