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
