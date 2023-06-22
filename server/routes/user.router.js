const express = require('express');
const {
	rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
	// Send back user object from the session (previously queried from the database)
	res.send(req.user);
});
// This GET route fetches the profile information
router.get('/profile', rejectUnauthenticated, (req, res) => {
	let sqlQuery = `
	SELECT username, phone_number, email, description, name, years_of_experience, coach_level, activity_type, ski_or_snow
	FROM "user"
	WHERE id=($1);
	`
	let sqlValues = [req.user.id];

	pool.query(sqlQuery, sqlValues)
		.then((dbRes) => {
			res.send(dbRes.rows);
		}).catch((dbErr) => {
			console.log('ERROR fetching profile data', dbErr);
			res.sendStatus(500);
		});
});

// This PUT route updates the profile information
router.put('/profile/edit', rejectUnauthenticated, (req, res) => {
	const { name, email, phone_number, description, years_of_experience, coach_level, activity_type, ski_or_snow} = req.body;
	const userId = req.user.id;
	let sqlQuery = `
    UPDATE "user"
    SET name = $1, email = $2, phone_number = $3, description = $4, years_of_experience = $6, coach_level = $7, activity_type = $8, ski_or_snow = $9
    WHERE id = $5
    `
	let sqlValues = [name, email, phone_number, description, userId, years_of_experience, coach_level, activity_type, ski_or_snow];

	pool.query(sqlQuery, sqlValues)
		.then(() => {
			res.sendStatus(200);
		})
		.catch((error) => {
			console.log('Error updating profile', error);
			res.sendStatus(500);
		});
});


// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', async (req, res, next) => {
	const username = req.body.username;
	const email = req.body.email;
	const password = encryptLib.encryptPassword(req.body.password);

	const queryText = `INSERT INTO "user" (username, password, email)
    VALUES ($1, $2, $3) RETURNING id`;
	try {
		await pool.query(queryText, [username, password, email]);
		res.sendStatus(201);
	} catch (err) {
		console.error('User registration failed: ', err);
		res.sendStatus(500);
	}
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
	res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
	// Use passport's built-in method to log out the user
	req.logout();
	res.sendStatus(200);
});

router.put('/:id', rejectUnauthenticated, async (req, res) => {
	const id = req.body.userID;
	const legalStatus = req.body.legalStatus;
	//sql query will change the legal status depending on the user ID
	const sqlQuery = `
	UPDATE "user"
	SET legal_status = $1
	WHERE id = $2
	`;
	const sqlValues = [legalStatus, id];
	try {
		await pool.query(sqlQuery, sqlValues);
		res.sendStatus(200);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
