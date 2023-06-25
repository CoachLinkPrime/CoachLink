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

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function OverviewCard({
	id,
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
	conditionalRender,
	accepted_status,
	finished_status,
}) {
	const dispatch = useDispatch();
	const [expanded, setExpanded] = useState(false);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const toggleExpand = () => {
		setExpanded(!expanded);
	};

	function conditionallyRenderForOrgOrCoach() {
		if (
			conditionalRender === true &&
			accepted_status === false &&
			finished_status === false
		) {
			return (
				<>
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
					<Button variant='contained' onClick={() => handleAccept(id)}>
						Accept
					</Button>
				</>
			);
		}
	}

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

	// need to convert the DB format of date to something more readable:
	function convertDateFormat(date) {
		// first convert the date string to an object
		const dateObj = new Date(date);
		// then can convert that to differently formatted date string with JavaScript toDateString():
		return dateObj.toDateString();
	}

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
					Day Of Gig: {convertDateFormat(date_for_gig)}
				</Typography>
				<Typography variant='body1'>
					Activity Type: {gig_ski_or_snow} instructor, {gig_activity_type}
				</Typography>
				<Typography>Ski Resort: {location}</Typography>
				<Typography>Will Pay: ${price}</Typography>
				{conditionallyRenderForOrgOrCoach()}
				{condtionallyRenderFinishButton()}
				<OverviewDelete onClick={() => handleDelete(id)} />
			</CardContent>
		</Card>
	);
}

export default OverviewCard;
