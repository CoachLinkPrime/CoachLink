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

  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      console.log('results from gig GET route:', dbRes.rows);
      res.send(dbRes.rows);
    }).catch((dbErr) => {
      console.log('error with gig GET route:', dbErr);
      res.sendStatus(500);
    })
});

// GET route for past accepted gigs based on the logged-in user's id
router.get('/past', rejectUnauthenticated, (req, res) => {
  // GET route code here
  let sqlQuery = `
    SELECT * FROM "gig"
      WHERE "coach_user_id"=($1)
      AND "status"=false;`;

  let sqlValues = [req.user.id];

  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      console.log('results from past gigs GET route:', dbRes.rows);
      res.send(dbRes.rows);
    }).catch((dbErr) => {
      console.log('error with past gigs GET route:', dbErr);
      res.sendStatus(500);
    })
});


// GET route for upcoming gigs based on the logged-in user's id
router.get('/upcoming', rejectUnauthenticated, (req, res) => {
  // GET route code here
  let sqlQuery = `
    SELECT * FROM "gig"
      WHERE "coach_user_id"=($1)
      AND "status"=true;`;

  let sqlValues = [req.user.id];

  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      console.log('Upcoming gigs GET route:', dbRes.rows);
      res.send(dbRes.rows);
    }).catch((dbErr) => {
      console.log('ERROR upcoming gigs GET route:', dbErr);
      res.sendStatus(500);
    })
});

// this GET route retrieves all available gigs for user to 
// check and then apply as appropriate: 
router.get('/available', rejectUnauthenticated, (req, res) => {
  let sqlQuery = `
  SELECT * FROM "gig"
    WHERE "status"=true;`;
  
  pool.query(sqlQuery)
    .then((dbRes) => {
      console.log('GET results for available gigs:', dbRes.rows);
      res.send(dbRes.rows);
    }).catch((dbErr) => {
      console.log('error with GET gigs route:', dbErr);
      res.sendStatus(500);
    })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;