import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BottomNavBar from '../BottomNavBar/BottomNavBar';
import Button from '@mui/material/Button';
import './HomeView.css';

function HomeView() {
	const history = useHistory();

	const addGigs = () => {
		history.push('/ineedacoach');
	};

	// this component doesn't do much to start, just renders some user reducer info to the DOM
	const user = useSelector((store) => store.user);

	const toGigs = () => {
		history.push('/gigs_avaliable');
	};

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
				<Button
					variant='contained'
					sx={{
						backgroundColor: '#65b0f1',
						'&:hover': {
							backgroundColor: '#C6E5F3',
							color: 'black',
						},
						color: 'white',
					}}
					onClick={toGigs}>
					<h4>Looking for a gig</h4>
				</Button>
				<p>This is for coaches/instructors.</p>
				{/* <h4>Coaching Jobs</h4>
				<p>Click here to find available shifts</p> */}
			</div>
			<div className='card'>
				<img
					className='picture'
					src='/images/snowboard_dudes.jpeg'
					alt='snowboard dudes'
				/>
				<Button
					variant='contained'
					sx={{
						backgroundColor: '#65b0f1',
						'&:hover': {
							backgroundColor: '#C6E5F3',
							color: 'black',
						},
						color: 'white',
					}}
					onClick={addGigs}>
					<h4>Looking for a coach</h4>
				</Button>
				<p>This is for team/club directors.</p>
				{/* <h4>Looking for Coaches</h4>
				<p>Click here to create a gig for industry professionals to apply</p> */}
			</div>
			{/* <div>
				<LogOutButton className='btn' />
			</div> */}
		</>
	);
}

// this allows us to use <App /> in index.js
export default HomeView;
