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
      // console.log('results from gig GET route:', dbRes.rows);
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

// this GET route retrieves all available gigs for user to 
// check and then apply as appropriate: 
router.get('/available', rejectUnauthenticated, (req, res) => {
  let sqlQuery = `
  SELECT * FROM "gig"
    WHERE "status"=true;`;
  
  pool.query(sqlQuery)
    .then((dbRes) => {
      // console.log('GET results for available gigs:', dbRes.rows);
      res.send(dbRes.rows);
    }).catch((dbErr) => {
      console.log('error with GET gigs route:', dbErr);
      res.sendStatus(500);
    })
})

router.post('/', rejectUnauthenticated, (req, res) => {
  // console.log('In posting', req.user.id);
  const userId = req.user.id
  const title = req.body.title
  const description = req.body.description
  const date = req.body.date
  const time = req.body.time
  const coach_level = req.body.coach_level
  const years = req.body.years
  const activity_type = req.body.activity_type
  const ski_or_snow = req.body.ski_or_snow
  const location = req.body.location
  const price = req.body.price

  // console.log('years', years);
  // console.log('date', date);

  const sqlValues = [userId, title, description, date, years, time, coach_level, activity_type, ski_or_snow, location, price]

  const sqlQuery = `INSERT INTO "gig" ("user_id", "title",  "description", "date", 
  "year_of_experience", "time", "coach_level", 
  "activity_type", "ski_or_snow", "location", "price")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
  `
  
  pool.query(sqlQuery, sqlValues)
    .then(dbRes => {
      console.log('added gig');
      res.sendStatus(201);
    }).catch(dbErr => {
      console.log('Error conecting with DB', dbErr);
    })
});

module.exports = router;