import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';
import { Button } from '@mui/material';

function RegisterPage() {
  const history = useHistory();

  return (
    <div className='reg-body'>
      <h1 className='h2Text'>CoachLink</h1>
      <RegisterForm />

      <center>
        <Button
          type="button"
          className="btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
