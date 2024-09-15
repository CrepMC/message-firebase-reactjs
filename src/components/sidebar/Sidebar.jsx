import './sidebar.css';
import UserInfo from './userInfo/UserInfo';
import ChatList from './chatList/ChatList';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default Sidebar;
