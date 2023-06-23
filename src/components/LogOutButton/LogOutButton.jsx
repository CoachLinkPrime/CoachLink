import React from 'react';
import { useDispatch } from 'react-redux';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import Button from '@mui/material/Button';

function LogOutButton(props) {
  const dispatch = useDispatch();
  
  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </button>
  );
}

export default LogOutButton;
