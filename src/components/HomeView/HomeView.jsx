import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomeView.css';
import BottomNavBar from '../BottomNavBar/BottomNavBar';

function HomeView() {
	const history = useHistory();

	// this component doesn't do much to start, just renders some user reducer info to the DOM
	const user = useSelector((store) => store.user);

	const toGigs = () => {
		history.push('/gigs_avaliable');
	};

	const addGigs = () => {
		history.push('/ineedacoach');
	}

	return (
		<>
			{/* How can we handle on clicks in this page?!? */}
			<h2>Hello, {user.username}!</h2>
			<div className='card' onClick={toGigs}>
				<img
					className='pic'
					src='/images/snowboard_coach.jpeg'
					alt='snowboard coach'
				/>
				<h4>Looking for a gig</h4>
				<p>Click here to find available gigs</p>
			</div>
			<div className='card' onClick={addGigs}>
				<img
					className='picture'
					src='/images/snowboard_dudes.jpeg'
					alt='snowboard dudes'
				/>
				<h4>Looking for a coach</h4>
				<p>Click here to create a gig for industry professionals to apply</p>
			</div>
			
		</>
	);
}

// this allows us to use <App /> in index.js
export default HomeView;
