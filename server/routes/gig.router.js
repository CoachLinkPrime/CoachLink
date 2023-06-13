const express = require('express');
const {
	rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  let sqlQuery = `
    SELECT * FROM "gig"
      WHERE "user_id"=($1);`;

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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;