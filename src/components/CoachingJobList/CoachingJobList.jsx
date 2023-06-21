import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoachingJobCard from '../CoachingJobCard/CoachingJobCard';
import FilterButton from '../FilterButton/FilterButton';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import "./CoachingCardList.css"

// create an object to map the filter options: 
const FILTER_MAP = {
	All: () => true,
	Ski: (gig) => gig.ski_or_snow === "Ski",
	Snowboard: (gig) => gig.ski_or_snow === "Snowboard"
}

// use Object.keys() method to collect an array of gig objects:
const FILTER_NAMES = Object.keys(FILTER_MAP);

function CoachingJobList() {
	const dispatch = useDispatch();
	const gigs = useSelector((store) => store.gigs);
	// console.log(gigs);

	const [filter, setFilter] = useState("All");
	// need to filter thru the list of filter options/names:
	const filterList = FILTER_NAMES.map((name) => (
		<FilterButton
			key={name}
			name={name}
			isPressed={name === filter}
			setFilter={setFilter}
		/>
	));

	// const [filters, setFilters] = useState({
	// 	skiFilter: false,
	// 	snowboardFilter: false
	// })

	// need a function to handle the toggle:
	// using spread operator so state isn't mutated and can update one key/value at a time
	// const handleToggle = (filterName) => {
	// 	const newFilters = {
	// 		...filters,
	// 		[filterName]: !filters[filterName]
	// 	}
	// 	setFilters(newFilters);
	// 	console.log('Current state:', newFilters);
	// }

	//this starts the dispatch to begin our flow - this will reload our side effect whenever the dispatch is changed
	useEffect(() => {
		dispatch({ type: 'FETCH_GIGS' });
	}, [dispatch]);

	// need to convert the DB format of date to something more readable:
	function convertDateFormat(date) {
		const dateObj = new Date(date);
		return dateObj.toDateString();
	}

	return (
		<>
			<h1>Avaliable Gigs</h1>
			<h2>Search Filters:</h2>
			{filterList}
			{/* <FormGroup>
				<FormControlLabel
					control={
						<Switch
							checked={filters.skiFilter}
							onChange={() => handleToggle('skiFilter')}
						/>
					}
					label="Ski"
				/>
				<FormControlLabel
					control={
						<Switch
							checked={filters.snowboardFilter}
							onChange={() => handleToggle('snowboardFilter')}
						/>
					}
					label="Snowboard"
				/>
				<FormControlLabel
					control={
						<Switch
							checked={filters.uncertifiedFilter}
							onChange={() => handleToggle('uncertifiedFilter')}
						/>
					}
					label="Uncertified"
				/>
			</FormGroup> */}

			<div className='cardContainer'>
				{gigs.map((gig, index) => {
					return (
						<CoachingJobCard
							key={index}
							gig={gig}
							convertDateFormat={convertDateFormat}
						/>
					)
				})}
			</div>
		</>
	);
}

export default CoachingJobList;
