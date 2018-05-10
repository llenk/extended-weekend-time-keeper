const router = require('express').Router();
const pool = require('../modules/pool');
const timeStampString = require('../modules/timestamp_string');

let ayyray = [];

router.post('/', function(req, res) {
    let entry = req.body;
    console.log(entry);
    let queryText = `INSERT INTO "entries" 
        ("name", "start_time", "end_time", "project", "time_quarter_hours")
        VALUES
        ($1, $2, $3, $4, $5)`;
    pool.query(queryText, 
        [entry.description, timeStampString(entry.startDate), timeStampString(entry.endDate), entry.project, entry.time])
        .then(function(response) {
            res.send(200);
        }).catch(function(error) {
            console.log(error);
            res.send(500);
        });
});

router.get('/', function(req, res) {
    console.log(ayyray);
    res.send(ayyray);
});

module.exports = router;