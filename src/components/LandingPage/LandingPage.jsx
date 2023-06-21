import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import Footer from '../Footer/Footer';

function LandingPage() {
  const history = useHistory();

  const onRegrister = (event) => {
    history.push('/explination');
  };
  const handleLogin = (event) => {
    history.push('/login');
  };
  return (
    <div className="body-container">
      <center>
        <h1 className='h2Text'>CoachLink</h1>
        <div className='white-back'>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/generic_pic.jpeg'}
              alt="generic_pic"
              className='generic-pic'
            />
          </div>
          <button className="register-button" onClick={onRegrister}>
            What is CoachLink?
          </button>
          <p>Already have an account? <span className="login-link" onClick={handleLogin}>log in</span></p>
        </div>
      </center>
      <Footer />
    </div>
  );
}

export default LandingPage;
