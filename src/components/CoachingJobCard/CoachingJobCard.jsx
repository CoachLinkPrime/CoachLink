import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

import CoachingJobApply from './CoachingJobApply';

function CoachingJobCard({ gig, convertDateFormat, cardType }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const [expanded, setExpanded] = useState(false);

	const handleApply = () => {
		dispatch({
			type: 'UPDATE_GIG_WITH_COACH',
			payload: { gigID: gig.id },
		});
		history.push('/overview');
	};

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	function cardTypeRender() {
		console.log(cardType);
		if (cardType === true) {
			return (
				<>
					<Button variant='contained'>Edit</Button>
					<Button variant='contained'>Delete</Button>
				</>
			);
		} else {
			return (
				<CoachingJobApply onClick={() => handleApply(gig.id)}/>
			);
		}
	}

	return (
		// <Box border={3} sx={{ borderRadius: '8px', m: 2 }}>
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
				<Typography variant='h4'>{gig.title}</Typography>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<Typography variant='h6'>{gig.description}</Typography>
				</Collapse>
				<Button onClick={toggleExpand}>
					{expanded ? 'Collapse Description' : 'Expand Description'}
				</Button>
				<Typography variant='h6'>
					Day Of Gig: {convertDateFormat(gig.date_for_gig)}, {gig.time_for_gig}
				</Typography>
				<Typography variant='body1'>
					Activity Type: {gig.ski_or_snow} instructor, {gig.activity_type}
				</Typography>
				<Typography>Looking for: {gig.coach_level}</Typography>
				<Typography>Ski Resort: {gig.location}</Typography>
				<Typography>Will Pay: ${gig.price}</Typography>
				{cardTypeRender()}
			</CardContent>
		</Card>
		// </Box>
	);
}

export default CoachingJobCard;
