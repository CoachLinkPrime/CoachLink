import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { TextField, Button } from '@mui/material';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="reg-form" onSubmit={login}>
      <center>
      <h2>Login</h2>
      </center>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
          <TextField
            type="text"
            name="username"
            label = 'Username'
            size='small'
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
      </div>
      <div>
          <TextField
            type="password"
            name="password"
            label='Password'
            size= 'small'
            margin='normal'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      
      <Button variant="contained" sx={{
        backgroundColor: '#7EBBF1',
        '&:hover': {
        backgroundColor: '#C6E5F3',
        color: 'black'
        },
        color: 'white'
        }} type="submit">
          Log In
      </Button>
      
    </form>
  );
}

export default LoginForm;
