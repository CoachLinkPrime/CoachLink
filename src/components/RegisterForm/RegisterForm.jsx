import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './RegisterForm.css'
import { InputLabel, TextField, Input, Button } from '@mui/material';

function RegisterForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();


	const registerUser = (event) => {
		event.preventDefault();


		if (username && password && email) {
			dispatch({
				type: 'REGISTER',
				payload: {
					username: username,
					password: password,
          email: email
				},
			});
		} else {
			dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
		}
    history.push('/legal');
	}; // end registerUser

  return (
    <form className="reg-form" onSubmit={registerUser}>
      <center>
      <h2>Create An Account</h2>
      </center>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
          <TextField
            required
            placeholder='Email'
            label='Email'
            type="email"
            name="email"
            margin='normal'
            size='small'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        
      </div>
      <div>

          <TextField
            type="text"
            label='Username'
            size='small'
            placeholder='Username'
            margin='normal'
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
      </div>
      <div>
          <TextField
            type="password"
            label='Password'
            margin='normal'
            name="password"
            size='small'
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div>
      <Button variant="contained" sx={{
        backgroundColor: '#7EBBF1',
        '&:hover': {
        backgroundColor: '#C6E5F3',
        color: 'black'
        },
        color: 'white'
        }} type="submit">
        Create
      </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
