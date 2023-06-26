import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OverviewCard from './OverviewCard.jsx';

function Overview() {
	//these are all our data sets and boiler plate for functions
	const dispatch = useDispatch();
	const pastGigs = useSelector((store) => store.pastGigs);
	const upcomingGigs = useSelector((store) => store.upcomingGigs);
	const pendingGigs = useSelector((store) => store.pendingGigs);
	const userID = useSelector((store) => store.user.id);
	const [userBoolean, setUserBoolean] = useState(false);

	// if there are no completed gigs in the store [], then
	// dispatch a call to fetch them from the database
	useEffect(() => {
		dispatch({ type: 'FETCH_COMPLETED_GIGS' });
		dispatch({ type: 'FETCH_UPCOMING_GIGS' });
		dispatch({ type: 'FETCH_PENDING_GIGS' });
	}, [dispatch]);

	//this will onLoad check to see if the user is an organization or a coach
	useEffect(() => {
		checkPendingGigsForOrgOrCoach();
	}, [pendingGigs]);

	//this is the logic to see if the user is a coach or an organization
	function checkPendingGigsForOrgOrCoach() {
		for (let i = 0; i < pendingGigs.length; i++) {
			if (userID === pendingGigs[i].user_id) {
				setUserBoolean(true);
			} else {
				console.log('fail');
			}
		}
	}

	return (
		<div className='overview'>
			{/* <h1>Overview</h1> */}
			<h2>Pending Gigs</h2>
			{/* all the information needed to build a card */}
			{pendingGigs.map(
				({
					master_id,
					title,
					date_for_gig,
					description,
					gig_ski_or_snow,
					location,
					price,
					gig_activity_type,
					coach_user_id,
					name,
					ski_or_snow,
					years_of_experience,
					activity_type,
					email,
					phone_number,
					accepted_status,
					finished_status,
					time_for_gig,
					user_description,
				}) => (
					<OverviewCard
						key={master_id}
						id={master_id}
						title={title}
						description={description}
						date_for_gig={date_for_gig}
						gig_ski_or_snow={gig_ski_or_snow}
						location={location}
						price={price}
						gig_activity_type={gig_activity_type}
						conditionalRender={userBoolean}
						coach_user_id={coach_user_id}
						name={name}
						ski_or_snow={ski_or_snow}
						years_of_experience={years_of_experience}
						activity_type={activity_type}
						email={email}
						phone_number={phone_number}
						accepted_status={accepted_status}
						finished_status={finished_status}
						time_for_gig={time_for_gig}
						user_description={user_description}
					/>
				)
			)}
			<br />
			<br />
			<h2>Upcoming Gigs</h2>
			{upcomingGigs.map(
				({
					master_id,
					title,
					date_for_gig,
					description,
					gig_ski_or_snow,
					location,
					price,
					gig_activity_type,
					coach_user_id,
					name,
					ski_or_snow,
					years_of_experience,
					activity_type,
					email,
					phone_number,
					accepted_status,
					finished_status,
					time_for_gig,
					user_description,
				}) => (
					<OverviewCard
						key={master_id}
						id={master_id}
						title={title}
						description={description}
						date_for_gig={date_for_gig}
						gig_ski_or_snow={gig_ski_or_snow}
						location={location}
						price={price}
						gig_activity_type={gig_activity_type}
						conditionalRender={userBoolean}
						coach_user_id={coach_user_id}
						name={name}
						ski_or_snow={ski_or_snow}
						years_of_experience={years_of_experience}
						activity_type={activity_type}
						email={email}
						phone_number={phone_number}
						accepted_status={accepted_status}
						finished_status={finished_status}
						time_for_gig={time_for_gig}
						user_description={user_description}
					/>
				)
			)}
			<br />
			<br />
			<h2>Completed Gigs</h2>
			{pastGigs.map(
				({
					master_id,
					title,
					date_for_gig,
					description,
					gig_ski_or_snow,
					location,
					price,
					gig_activity_type,
					coach_user_id,
					name,
					ski_or_snow,
					years_of_experience,
					activity_type,
					email,
					phone_number,
					accepted_status,
					finished_status,
					time_for_gig,
					user_description,
				}) => (
					<OverviewCard
						key={master_id}
						id={master_id}
						title={title}
						description={description}
						date_for_gig={date_for_gig}
						gig_ski_or_snow={gig_ski_or_snow}
						location={location}
						price={price}
						gig_activity_type={gig_activity_type}
						conditionalRender={userBoolean}
						coach_user_id={coach_user_id}
						name={name}
						ski_or_snow={ski_or_snow}
						years_of_experience={years_of_experience}
						activity_type={activity_type}
						email={email}
						phone_number={phone_number}
						accepted_status={accepted_status}
						finished_status={finished_status}
						time_for_gig={time_for_gig}
						user_description={user_description}
					/>
				)
			)}
		</div>
	);
}
export default Overview;
