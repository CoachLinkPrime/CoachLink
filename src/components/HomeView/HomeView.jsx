import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomeView.css';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import Button from '@mui/material/Button';

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
			<div className='card'>
				<img
					className='pic'
					src='/images/snowboard_coach.jpeg'
					alt='snowboard coach'
				/>
				<Button variant="contained"  sx={{
				backgroundColor: '#65b0f1',
				'&:hover': {
				backgroundColor: '#C6E5F3',
				color: 'black'
				},
				color: 'white'
				}}
				onClick={toGigs}>

				<h4>Looking for a gig</h4>
				</Button>
				<p>This is for coaches/instructors.</p>
			</div>
			
			<div className='card'>
				<img
					className='picture'
					src='/images/snowboard_dudes.jpeg'
					alt='snowboard dudes'
				/>
				<Button variant="contained"  sx={{
				backgroundColor: '#65b0f1',
				'&:hover': {
				backgroundColor: '#C6E5F3',
				color: 'black'
				},
				color: 'white'
				}}
				onClick={addGigs}>
				<h4>Looking for a coach</h4>
				</Button>
				<p>This is for team/club directors.</p>
			</div>
			
		</>
	);
}

// this allows us to use <App /> in index.js
export default HomeView;
