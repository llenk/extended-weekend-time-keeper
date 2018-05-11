const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', function (req, res) {
    pool.query(`INSERT INTO "projects" ("name", "description")
        VALUES ($1, $2)`, [req.body.name, req.body.description])
        .then(function (response) {
            res.sendStatus(200);
        }).catch(function (error) {
            console.log(error);
            res.sendStatus(500);
        });
});

router.get('/', function (req, res) {
    pool.query(`SELECT "projects"."id", "projects"."name", "projects"."description", SUM("entries"."time_quarter_hours")
        FROM "projects"
        LEFT OUTER JOIN "entries" 
        ON "entries"."project" = "projects"."id"
        GROUP BY "projects"."id";`)
        .then(function (response) {
            res.send(response.rows);
        }).catch(function(error) {
            console.log(error);
            res.send(500);
        });
})

module.exports = router;