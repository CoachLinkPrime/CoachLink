import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import Footer from '../Footer/Footer';
import { Button } from '@mui/material';

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
          <Button onClick={onRegrister}>
            What is CoachLink?
          </Button>
          <p>Already have an account? <Button onClick={handleLogin}>log in</Button></p>
        </div>
      </center>
      <Footer />
    </div>
  );
}

export default LandingPage;
