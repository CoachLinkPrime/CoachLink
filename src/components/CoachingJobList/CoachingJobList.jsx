import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CoachingJobCard from '../CoachingJobCard/CoachingJobCard';
import "./CoachingCardList.css"

function CoachingJobList() {
	const dispatch = useDispatch();
	const gigs = useSelector((store) => store.gigs);
	console.log(gigs);

	//this starts the dispatch to begin our flow - this will reload our side effect whenever the dispatch is changed
	useEffect(() => {
		dispatch({ type: 'FETCH_GIGS' });
	}, [dispatch]);

	return (
		<>
			<h1>Avaliable Gigs</h1>
			<div className='cardContainer'>
			{gigs.map((gig, index) => {
					return (
						<CoachingJobCard key={index} gig={gig}/>
					)
				})}
			</div>
		</>
	);
}

export default CoachingJobList;
