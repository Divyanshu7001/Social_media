import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import signupImage from '../assets/img/aimscopefour-e70e3d5a-1.png'; // Update with your image path

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email.');
      return;
    }
    if (!password || password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Add signup logic here (e.g., API call)
    navigate('/home');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSocialSignup = (provider) => {
    console.log(`Signing up with ${provider}`);
    // Redirect to OAuth flow (Google/Facebook)
    if (provider === 'Google') {
      window.location.href = 'https://accounts.google.com/o/oauth2/auth'; // Setup OAuth link
    } else if (provider === 'Facebook') {
      window.location.href = 'https://www.facebook.com/v11.0/dialog/oauth'; // Setup OAuth link
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  // Responsive and styling
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    maxWidth: '700px',
    padding: '30px',
    background: 'white',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    overflow: 'hidden',
  };

  const formStyle = {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const inputContainerStyle = {
    width: '100%',
    position: 'relative',
    marginBottom: '10px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 40px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  const inputIconStyle = {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#888',
  };

  const socialSignupBtnContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '20px',
  };

  const socialSignupBtnStyle = {
    flex: '1',
    borderRadius: '50px',
    margin: '0 5px',
    padding: '10px',
    background: '#f1f1f1',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const buttonStyle = {
    background: 'blue',
    width: '100%',
    padding: '10px',
    marginTop: '10px',
    borderRadius: '5px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
  };

  const hrStyle = {
    width: '100%',
    border: 'none',
    borderTop: '1px solid #ddd',
    margin: '20px 0',
    textAlign: 'center',
    position: 'relative',
  };

  const hrTextStyle = {
    background: 'white',
    padding: '0 10px',
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#888',
  };

  const signupLinkStyle = {
    textAlign: 'center',
    marginTop: '10px',
  };

  const imageStyle = {
    position: 'absolute',
    bottom: '90px',
    right: '20px',
    width: '30%', // Adjust size as needed
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '25px',
  };

  return (
    <div style={containerStyle}>
      <button style={closeButtonStyle} onClick={handleClose}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div style={formStyle}>
        <h2>Sign Up</h2>

        <div style={socialSignupBtnContainerStyle}>
          <button style={socialSignupBtnStyle} onClick={() => handleSocialSignup('Google')}>
            <FontAwesomeIcon icon={faGoogle} /> Sign Up with Google
          </button>
          <button style={socialSignupBtnStyle} onClick={() => handleSocialSignup('Facebook')}>
            <FontAwesomeIcon icon={faFacebook} /> Sign Up with Facebook
          </button>
        </div>

        <div style={hrStyle}>
          <span style={hrTextStyle}>or</span>
        </div>

        <form onSubmit={handleSignup}>
          <div style={inputContainerStyle}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={inputContainerStyle}>
            <FontAwesomeIcon icon={faEnvelope} style={inputIconStyle} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          {emailError && <div style={{ color: 'red', textAlign: 'left' }}>{emailError}</div>}

          <div style={inputContainerStyle}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEye : faEyeSlash}
              style={{ ...inputIconStyle, right: '10px', left: 'auto', cursor: 'pointer' }}
              onClick={togglePasswordVisibility}
            />
          </div>
          {passwordError && <div style={{ color: 'red', textAlign: 'left' }}>{passwordError}</div>}

          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>

        <div style={signupLinkStyle}>
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>

      <img src={signupImage} alt="Signup" style={imageStyle} />
    </div>
  );
};

export default SignupPage;
