import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const history = useHistory();

  const onRegrister = (event) => {
    history.push('/explination');
  };
  const handleLogin = (event) => {
    history.push('/login');
  };
  return (
    <div className="container">
      <center>
        <h1>CoachLink</h1>
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
      </center>
    </div>
  );
}

export default LandingPage;
