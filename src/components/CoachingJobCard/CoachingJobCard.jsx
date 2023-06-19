import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CoachingJobCard({ gig }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleApply = () => {
		dispatch({
			type: 'UPDATE_GIG_WITH_COACH',
			payload: { gigID: gig.id },
		});
		history.push('/overview');
	};

	return (
		<Box border={3} sx={{ borderRadius: '8px', m: 2 }}>
			<Card variant='outlined' sx={{ maxWidth: 500, minWidth: 500 }}>
				<CardContent>
					<Typography variant='h4'>{gig.title}</Typography>
					<Typography variant='h5'>{gig.description}</Typography>
					<Typography variant='h6'>
						Day Of Gig: {gig.date_for_gig.toLocaleString('en-US')},{' '}
						{gig.time_for_gig}
					</Typography>
					<Typography variant='body1'>
						Activity Type: {gig.ski_or_snow} instructor, {gig.activity_type}
					</Typography>
					<Typography>Looking for: {gig.coach_level}</Typography>
					<Typography>Ski Resort: {gig.location}</Typography>
					<Typography>Will Pay: ${gig.price}</Typography>
					<Button variant='contained' onClick={handleApply}>
						Apply
					</Button>
				</CardContent>
			</Card>
		</Box>
	);
}

export default CoachingJobCard;
