import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import './RegisterPage.css';
function RegisterPage() {
  const history = useHistory();

  return (
    <div className='reg-body'>
      <h1 className='h2Text'>CoachLink</h1>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
