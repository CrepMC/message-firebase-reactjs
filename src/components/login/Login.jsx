import { useState } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/firebase-config';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Mật khẩu không khớp!');
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Đăng ký thành công!');
    } catch (error) {
      toast.error('Đăng ký thất bại: ' + error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Đăng nhập thành công!');
    } catch (error) {
      toast.error('Đăng nhập thất bại: ' + error.message);
    }
  };

  // Xử lý đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Đăng nhập bằng Google thành công!');
    } catch (error) {
      toast.error('Đăng nhập bằng Google thất bại: ' + error.message);
    }
  };

  // Xử lý đăng nhập bằng Facebook
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Đăng nhập bằng Facebook thành công!');
    } catch (error) {
      toast.error('Đăng nhập bằng Facebook thất bại: ' + error.message);
    }
  };

  return (
    <div className="main">
      <form id="login" onSubmit={handleLogin}>
        <h2>Login to Chat App</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p>Or login with</p>
        <div className="social-login">
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google</span>
          </button>
          <button type="button" className="facebook-btn" onClick={handleFacebookLogin}>
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </button>
        </div>
      </form>

      <form id="signup" onSubmit={handleSignup}>
        <h2>Register to Chat App</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="signup-confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re enter your password"
            required
          />
        </div>

        <button type="submit" className="signup-btn">
          Register
        </button>

        <p>Or signup with</p>
        <div className="social-login">
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google</span>
          </button>
          <button type="button" className="facebook-btn" onClick={handleFacebookLogin}>
            <FontAwesomeIcon icon={faFacebook} />
            <span>Facebook</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
