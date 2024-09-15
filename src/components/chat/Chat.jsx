import { useEffect, useState, useRef } from 'react';
import './chat.css';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  });

  const handleEmoji = (e) => {
    setMessage((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="info">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <span>Tuan Anh</span>
            <p>Active</p>
          </div>
        </div>
        <div className="icons">
          <img src="phone.png" alt="" />
          <img src="video.png" alt="" />
          <img src="info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus pariatur expedita atque
              officiis laboriosam dolorem eos minima deserunt adipisci doloribus nulla excepturi, alias, maxime
              voluptatem. Recusandae, veniam rerum! Praesentium.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          {/* <img src="avatar.png" alt="" /> */}
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero quisquam aliquid facere amet esse ad
              corporis a voluptatibus at voluptas sint nisi ratione itaque nam, quos ipsa, natus laudantium
              necessitatibus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus pariatur expedita atque
              officiis laboriosam dolorem eos minima deserunt adipisci doloribus nulla excepturi, alias, maxime
              voluptatem. Recusandae, veniam rerum! Praesentium.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus pariatur expedita atque
              officiis laboriosam dolorem eos minima deserunt adipisci doloribus nulla excepturi, alias, maxime
              voluptatem. Recusandae, veniam rerum! Praesentium.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <img src="bg.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus pariatur expedita atque
              officiis laboriosam dolorem eos minima deserunt adipisci doloribus nulla excepturi, alias, maxime
              voluptatem. Recusandae, veniam rerum! Praesentium.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img src="bg2.jpg" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus pariatur expedita atque
              officiis laboriosam dolorem eos minima deserunt adipisci doloribus nulla excepturi, alias, maxime
              voluptatem. Recusandae, veniam rerum! Praesentium.
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="img.png" alt="" />
          <img src="camera.png" alt="" />
          <img src="mic.png" alt="" />
        </div>
        <div className="messageBox">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <img src="emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          <EmojiPicker className="emojiPopup" open={open} onEmojiClick={handleEmoji} />
        </div>
        <button id="sendBtn">Send</button>
      </div>
    </div>
  );
};

export default Chat;
