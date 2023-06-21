import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  const history = useHistory();

  return (
    <div className='reg-body'>
      <h1 className='h2Text'>CoachLink</h1>
      <LoginForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Create An Account
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
