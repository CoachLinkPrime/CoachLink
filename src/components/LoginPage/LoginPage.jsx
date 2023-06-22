import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <div className='reg-body'>
      <h1 className='h2Text'>CoachLink</h1>
      <LoginForm />

      <center>
        <Button
          onClick={() => {
            history.push('/registration');
          }}
        >
          Create Account
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
