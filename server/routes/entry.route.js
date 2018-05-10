const router = require('express').Router();
const pool = require('../modules/pool');
const timeArrayString = require('../modules/timearray_string');
const timeStampString = require('../modules/timestamp_string');

router.post('/', function(req, res) {
    let entry = req.body;
    console.log(entry);
    let queryText = `INSERT INTO "entries" 
        ("name", "start_time", "end_time", "project", "time_quarter_hours")
        VALUES
        ($1, $2, $3, $4, $5);`;
    pool.query(queryText, 
        [entry.description, timeArrayString(entry.startDate), timeArrayString(entry.endDate), entry.project, entry.time])
        .then(function(response) {
            res.send(200);
        }).catch(function(error) {
            console.log(error);
            res.send(500);
        });
});

router.get('/', function(req, res) {
    pool.query(`SELECT * FROM "entries";`)
    .then(function(response) {
        for(let i=0; i<response.rowCount; i++) {
            response.rows[i].end_time = timeStampString(response.rows[i].end_time);
            response.rows[i].start_time = timeStampString(response.rows[i].start_time);
        }
        res.send(response.rows);
    }).catch(function(error) {
        console.log(error);
        res.send(500);
    });
});

module.exports = router;