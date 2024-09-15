import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebase-config'; // Ensure you import your auth instance
import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';

const App = () => {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogged(true);
      } else {
        setLogged(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div className="wrapper">
      <div className="container">
        {logged ? (
          <>
            <Sidebar />
            <Chat />
            <Detail onLogout={handleLogout} />
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </div>
    </div>
  );
};

export default App;
