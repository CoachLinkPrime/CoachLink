import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './BottomNavBar.css';
import { useSelector } from 'react-redux';

function BottomNavBar() {
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className="bottom-nav" >
            {/* If no user is logged in, show these links */}
            {!user.id && (
                <>
                    <Link className="nav-bot-link" to="/login" >
                        Login
                    </Link>
                    <button className="back-button" onClick={goBack}>
                        Back
                    </button>
                </>
            )}
            {/* If a user is logged in, show these links */}
            {user.id && (
                <>
                    <Link className="nav-bot-link" to="/user">
                        Home
                    </Link>
                    <Link className="nav-bot-link" to="/overview">
                        Overview
                    </Link>
                    <Link className="nav-bot-link" to="/profile">
                        Profile
                    </Link>
                    <LogOutButton className="nav-bot-link" />
                </>
            )}
        </div>
    );
}

export default BottomNavBar;