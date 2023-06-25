const express = require('express');
const {
	rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

// this GET route retrieves all of the user's accepted gigs
// for the user to see in Overview

router.get('/', rejectUnauthenticated, (req, res) => {
	// GET route code here
	let sqlQuery = `
    SELECT * FROM "gig"
      WHERE "coach_user_id"=($1);`;

	let sqlValues = [req.user.id];

	pool
		.query(sqlQuery, sqlValues)
		.then((dbRes) => {
			// console.log('results from gig GET route:', dbRes.rows);
			res.send(dbRes.rows);
		})
		.catch((dbErr) => {
			console.log('error with gig GET route:', dbErr);
			res.sendStatus(500);
		});
});

// GET route for past accepted gigs based on the logged-in user's id
router.get('/past', rejectUnauthenticated, (req, res) => {
	// GET route code here
	let sqlQuery = `
	SELECT "gig".id as "master_id", "gig".user_id, "gig".coach_user_id, "gig".title, "gig".description, "gig".date_applied, "gig".date_published, "gig".year_of_experience, "gig".time_for_gig, "gig".gig_coach_level, "gig".gig_activity_type, "gig".gig_ski_or_snow, "gig".location, "gig".price, "gig".finished_status, "gig".applied_status, "gig".accepted_status, "user".id, "user".username, "user".name, "user".phone_number, "user".email, "user".years_of_experience, "user".coach_level, "user".activity_type, "user".ski_or_snow, "user".date_accepted
	FROM "gig"
	JOIN "user" ON "gig".coach_user_id="user".id
      WHERE "coach_user_id"=($1)
        AND "finished_status"=true
      OR "user_id"=($1)
        AND "finished_status"=true`;

	let sqlValues = [req.user.id];

	pool
		.query(sqlQuery, sqlValues)
		.then((dbRes) => {
			// console.log('results from past gigs GET route:', dbRes.rows);
			res.send(dbRes.rows);
		})
		.catch((dbErr) => {
			console.log('error with past gigs GET route:', dbErr);
			res.sendStatus(500);
		});
});

router.get('/pending', rejectUnauthenticated, async (req, res) => {
	// GET route code here
	let sqlQuery = `
	SELECT "gig".id as "master_id", "gig".user_id, "gig".coach_user_id, "gig".title, "gig".description, "gig".date_applied, "gig".date_published, "gig".year_of_experience, "gig".time_for_gig, "gig".gig_coach_level, "gig".gig_activity_type, "gig".gig_ski_or_snow, "gig".location, "gig".price, "gig".finished_status, "gig".applied_status, "gig".accepted_status, "user".id, "user".username, "user".name, "user".phone_number, "user".email, "user".years_of_experience, "user".coach_level, "user".activity_type, "user".ski_or_snow, "user".date_accepted
	FROM "gig"
	JOIN "user" ON "gig".coach_user_id="user".id
      WHERE "coach_user_id"=($1)
        AND "applied_status"=true
				AND "accepted_status"=false
				AND "finished_status"=false
      OR "user_id"=($1)
        AND "applied_status"=true
				AND "accepted_status"=false
				AND "finished_status"=false;	`;

	let sqlValues = [req.user.id];

	try {
		let dbRes = await pool.query(sqlQuery, sqlValues);
		res.send(dbRes.rows);
	} catch {
		res.sendStatus(500);
		console.log('error on stuff');
	}
});

// GET route for upcoming gigs based on the logged-in user's id
router.get('/upcoming', rejectUnauthenticated, (req, res) => {
	// GET route code here
	let sqlQuery = `
	SELECT "gig".id as "master_id", "gig".user_id, "gig".coach_user_id, "gig".title, "gig".description, "gig".date_applied, "gig".date_published, "gig".year_of_experience, "gig".time_for_gig, "gig".gig_coach_level, "gig".gig_activity_type, "gig".gig_ski_or_snow, "gig".location, "gig".price, "gig".finished_status, "gig".applied_status, "gig".accepted_status, "user".id, "user".username, "user".name, "user".phone_number, "user".email, "user".years_of_experience, "user".coach_level, "user".activity_type, "user".ski_or_snow, "user".date_accepted
	FROM "gig"
	JOIN "user" ON "gig".coach_user_id="user".id
      WHERE "coach_user_id"=$1
				AND "accepted_status"=true
				AND "finished_status"=false 
			OR "user_id"=$1
      	AND "accepted_status"=true
				AND "finished_status"=false;`;

	let sqlValues = [req.user.id];

	pool
		.query(sqlQuery, sqlValues)
		.then((dbRes) => {
			// console.log('Upcoming gigs GET route:', dbRes.rows);
			res.send(dbRes.rows);
		})
		.catch((dbErr) => {
			console.log('ERROR upcoming gigs GET route:', dbErr);
			res.sendStatus(500);
		});
});

// this GET route retrieves all available gigs for user to
// check and then apply as appropriate:
router.get('/available', rejectUnauthenticated, (req, res) => {
	let sqlQuery = `
  SELECT * FROM "gig"
    WHERE "finished_status"=false
		AND "coach_user_id" is null
		`;

	pool
		.query(sqlQuery)
		.then((dbRes) => {
			// console.log('GET results for available gigs:', dbRes.rows);
			res.send(dbRes.rows);
		})
		.catch((dbErr) => {
			console.log('error with GET gigs route:', dbErr);
			res.sendStatus(500);
		});
});

router.post('/', rejectUnauthenticated, (req, res) => {
	// console.log('In posting', req.user.id);
	const userId = req.user.id;
	const title = req.body.title;
	const description = req.body.description;
	const date = req.body.date;
	const time = req.body.time;
	const coach_level = req.body.coach_level;
	const years = req.body.years;
	const activity_type = req.body.activity_type;
	const ski_or_snow = req.body.ski_or_snow;
	const location = req.body.location;
	const price = req.body.price;
	const finishedStatus = false;
	const appliedStatus = false;
	const acceptedStatus = false;

	// console.log(years, price);

	// console.log('years', years);
	// console.log('date', date);

	const sqlValues = [
		userId,
		title,
		description,
		date,
		years,
		time,
		coach_level,
		activity_type,
		ski_or_snow,
		location,
		price,
		finishedStatus,
		appliedStatus,
		acceptedStatus,
	];

	const sqlQuery = `INSERT INTO "gig" ("user_id", "title",  "description", "date_for_gig", 
  "year_of_experience", "time_for_gig", "gig_coach_level", 
  "gig_activity_type", "gig_ski_or_snow", "location", "price", "finished_status", applied_status, "accepted_status")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);
  `;

	pool
		.query(sqlQuery, sqlValues)
		.then((dbRes) => {
			res.sendStatus(201);
		})
		.catch((dbErr) => {
			console.log('Error conecting with DB', dbErr);
		});
});

// DELETE route for user_id (the user who published a gig) to remove upcoming gig in Overview
// this is by user_id, not coach_user_id, because gigs are published by user_id
// (gigs are accepted/applied to by coach_user_id and should NOT have delete access)
router.delete('/:id', rejectUnauthenticated, (req, res) => {
	let gigIdToDelete = req.params.id;
	let userId = req.user.id;
	let sqlQuery = `
		DELETE FROM "gig"
			WHERE "id"=$1
				AND "user_id"=$2
			OR "id"=$1
				AND "coach_user_id"=$2;`;
	let sqlValues = [gigIdToDelete, userId];

	pool
		.query(sqlQuery, sqlValues)
		.then((dbRes) => {
			// console.log('Entered Delete route successfully');
			res.sendStatus(200);
		})
		.catch((dbErr) => {
			console.log('error with Delete route:', dbErr);
			res.sendStatus(500);
		});
});

router.put('/updateGig', rejectUnauthenticated, async (req, res) => {
	let gigID = req.body.gigID;
	let userID = req.user.id;

	let sqlQuery1 = `
	UPDATE "gig"
	SET coach_user_id = $1
	WHERE id = $2
	`;

	let sqlQuery2 = `
	UPDATE "gig"
	SET applied_status=true
	WHERE id = $1
	`;

	try {
		await pool.query(sqlQuery1, [userID, gigID]);
		await pool.query(sqlQuery2, [gigID]);
		res.sendStatus(201);
	} catch (dbErr) {
		console.error(dbErr);
		res.sendStatus(500);
	}
});

router.put('/updatePendingGigs', rejectUnauthenticated, async (req, res) => {
	let gigID = req.body.gigID;

	let sqlQuery = `
	UPDATE "gig"
	SET accepted_status=true
	WHERE id=$1
	`;

	try {
		await pool.query(sqlQuery, [gigID]);
		res.sendStatus(201);
	} catch {
		console.log('failure on updatingPendingGigs');
		res.sendStatus(500);
	}
});

router.put('/updateUpcomingGig', rejectUnauthenticated, async (req, res) => {
	let gigID = req.body.gigID;

	let sqlQuery1 = `
	UPDATE "gig"
	SET finished_status=true
	WHERE id=$1
	`;

	let sqlQuery2 = `
	UPDATE "gig"
	SET accepted_status=false
	WHERE id=$1
	`;

	try {
		await pool.query(sqlQuery1, [gigID]);
		await pool.query(sqlQuery2, [gigID]);
		res.sendStatus(201);
	} catch {
		console.log('failure on updatingPendingGigs');
		res.sendStatus(500);
	}
});

router.get('/fetchSingleCoach', rejectUnauthenticated, async (req, res) => {
	coachID = req.body.coachID;

	let sqlQuery = `
	SELECT id, username, name, phone_number, email, years_of_experience, coach_level, activity_type, ski_or_snow FROM "user"
	`;
	try {
		const dbRes = await pool.query(sqlQuery);
		res.send(dbRes.rows);
	} catch {
		console.log('failure to grab coach');
		res.sendStatus(500);
	}
});

module.exports = router;
