import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import OverviewDelete from './OverviewDelete';

function OverviewCard({
	id,
	title,
	date_for_gig,
	convertDateFormat,
	conditionalRender,
	upcomingGigStatus,
}) {
	const dispatch = useDispatch();

	function conditionallyRenderForOrgOrCoach() {
		if (conditionalRender === true) {
			return <button onClick={() => handleAccept(id)}>Accept</button>;
		}
	}

	function condtionallyRenderFinishButton() {
		if (upcomingGigStatus === true) {
			return (
			<Button variant='contained' onClick={() => handleFinish(id)}>
				Finished Gig
			</Button>
			);
		}
	}

	console.log(upcomingGigStatus);

	const handleAccept = (gigID) => {
		dispatch({
			type: 'UPDATE_PENDING_GIG',
			payload: {
				gigID: gigID,
			},
		});
	};

	const handleFinish = (gigID) => {
		dispatch({
			type: 'UPDATE_UPCOMING_GIG',
			payload: {
				gigID: gigID,
			},
		});
	};

	const handleDelete = (gigID) => {
		dispatch({
			type: 'DELETE_GIG',
			payload: gigID,
		});
	};

	return (
		<Card
			variant='outlined'
			sx={{
				border: '2.5px solid black',
				maxWidth: { xs: 300, sm: 400, md: 500 },
				minWidth: 300,
				margin: 'auto',
				marginBottom: '1rem',
			}}>
			<CardContent>
				<Typography variant='h4'>{title}</Typography>
				<Typography variant='h5'>{convertDateFormat(date_for_gig)}</Typography>
				{conditionallyRenderForOrgOrCoach()}
				{condtionallyRenderFinishButton()}
				<OverviewDelete onClick={() => handleDelete(id)} />
			</CardContent>
		</Card>
	);
}

export default OverviewCard;
