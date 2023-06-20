import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoachingJobCard from '../CoachingJobCard/CoachingJobCard';
// import FilterCheckboxes from '../FilterCheckboxes/FilterCheckboxes';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import "./CoachingCardList.css"

function CoachingJobList() {
	const dispatch = useDispatch();
	const gigs = useSelector((store) => store.gigs);
	// console.log(gigs);
	// const [skiFilter, setSkiFilter] = useState(false);
	// const [snowboardFilter, setSnowboardFilter] = useState(false);
	// const [uncertifiedFilter, setUncertifiedFilter] = useState(false);
	const [filters, setFilters] = useState({
		skiFilter: false,
		snowboardFilter: false,
		uncertifiedFilter: false
	})

	// need a function to handle the checkbox toggle:
	const handleSkiToggle = () => {
		console.log('Ski filter status BEFORE:', skiFilter);
		setSkiFilter(!skiFilter);
		console.log('Ski filter status AFTER:', skiFilter);
	}

	const handleSnowboardToggle = () => {
		setSnowboardFilter(!snowboardFilter);
		console.log('Snowboard filter status:', snowboardFilter);
	}

	const handleUncertifiedToggle = () => {
		setUncertifiedFilter(!uncertifiedFilter);
		console.log('Uncertified filter status:', uncertifiedFilter);
	}

	//this starts the dispatch to begin our flow - this will reload our side effect whenever the dispatch is changed
	useEffect(() => {
		dispatch({ type: 'FETCH_GIGS' });
	}, [dispatch]);

	return (
		<>
			<h1>Avaliable Gigs</h1>
			<FormGroup>
				<FormControlLabel control={<Switch skiStatus={skiFilter} onChange={handleSkiToggle} />} label="Ski" />
				<FormControlLabel control={<Switch snowboardStatus={snowboardFilter} onChange={handleSnowboardToggle} />} label="Snowboard" />
				<FormControlLabel control={<Switch uncertifiedStatus={uncertifiedFilter} onChange={handleUncertifiedToggle} />} label="Uncertified" />
			</FormGroup>
			<div className='cardContainer'>
				{gigs.map((gig, index) => {
					return (
						<CoachingJobCard key={index} gig={gig} />
					)
				})}
			</div>
		</>
	);
}

export default CoachingJobList;
