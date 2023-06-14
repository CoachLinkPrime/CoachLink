import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
		</>
	);
}

export default CoachingJobList;
