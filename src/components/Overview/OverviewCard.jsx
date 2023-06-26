import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import OverviewDelete from './OverviewDelete';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

//this will be the pop out style for our modal which appears when you click on coach
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 300,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

//tbh this got too long and I never thought to pass the whole prop until it was already too long. These are all our deonstructed props for the card.
function OverviewCard({
	id,
	title,
	date_for_gig,
	description,
	gig_ski_or_snow,
	location,
	price,
	gig_activity_type,
	name,
	ski_or_snow,
	years_of_experience,
	activity_type,
	email,
	phone_number,
	conditionalRender,
	accepted_status,
	finished_status,
	time_for_gig,
}) {
	//these variables handle boiler plate for dispatch and boiler plate to help our modal be clicked on to show coach info
	const dispatch = useDispatch();
	const [expanded, setExpanded] = useState(false);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	//this will toggle expand our modal
	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	//this conditionally renders a button to approve an application for a coach
	function conditionallyRenderForOrgOrCoach() {
		if (
			conditionalRender === true &&
			accepted_status === false &&
			finished_status === false
		) {
			return (
				<>
					<Button variant='contained' onClick={() => handleAccept(id)}>
						Accept
					</Button>
				</>
			);
		}
	}

	//this renders a finsih button on upcoming gigs to change it to a finished gig
	function condtionallyRenderFinishButton() {
		if (accepted_status === true && finished_status === false) {
			return (
				<>
					<Button variant='contained' onClick={() => handleFinish(id)}>
						Finished Gig
					</Button>
				</>
			);
		}
	}

	//this sends a dispatch when a pending gig is accepted to change it to an upcoming gig
	const handleAccept = (gigID) => {
		dispatch({
			type: 'UPDATE_PENDING_GIG',
			payload: {
				gigID: gigID,
			},
		});
	};

	//this sends a dispatch that changes an upcoming gig to a finished gig
	const handleFinish = (gigID) => {
		dispatch({
			type: 'UPDATE_UPCOMING_GIG',
			payload: {
				gigID: gigID,
			},
		});
	};

	//this handles deleting a gig when you want to cancel or clear a gig from overivew
	const handleDelete = (gigID) => {
		dispatch({
			type: 'DELETE_GIG',
			payload: gigID,
		});
	};

	// need to convert the DB format of date to something more readable:
	function convertDateFormat(date) {
		// first convert the date string to an object
		const dateObj = new Date(date);
		// then can convert that to differently formatted date string with JavaScript toDateString():
		return dateObj.toDateString();
	}

	//this is the basis for our cards in the app
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
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<Typography variant='h6'>{description}</Typography>
				</Collapse>
				<Button onClick={toggleExpand}>
					{expanded ? 'Collapse Description' : 'Expand Description'}
				</Button>
				<Typography variant='h6'>
					Day Of Gig: {date_for_gig}, {time_for_gig}
				</Typography>
				<Typography variant='body1'>
					Activity Type: {gig_ski_or_snow} instructor, {gig_activity_type}
				</Typography>
				<Typography>Ski Resort: {location}</Typography>
				<Typography>Will Pay: ${price}</Typography>
				<div>
					<Button align='right' variant='text' onClick={handleOpen}>
						Your Coach: {name}
					</Button>
					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby='modal-modal-title'
						aria-describedby='modal-modal-description'>
						<Box sx={style}>
							<Typography id='modal-modal-title' variant='h6' component='h2'>
								Profile for: {name}
							</Typography>
							<Typography id='modal-modal-description' sx={{ mt: 2 }}>
								<Typography>{ski_or_snow} Instructor</Typography>
								<Typography>
									{years_of_experience} Years Of Experience
								</Typography>
								<Typography>Speciality: {activity_type}</Typography>
								<Typography>Email: {email}</Typography>
								<Typography>Phone Number: {phone_number}</Typography>
							</Typography>
						</Box>
					</Modal>
				</div>
				{conditionallyRenderForOrgOrCoach()}
				{condtionallyRenderFinishButton()}
				<OverviewDelete onClick={() => handleDelete(id)} />
			</CardContent>
		</Card>
	);
}

export default OverviewCard;
