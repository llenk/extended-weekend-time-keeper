const pg = require('pg');
const url = require('url'); //built in so don't need to npm install
const Pool = pg.Pool;

let config = {};

if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // heroku requires ssl to be true
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else {
    config = {
        database: 'time_keeper', //name of database
        host: 'localhost', //where is database
        port: process.env.url || 5432, //port for database, this is postgres default
        max: 10, //how many connections at one time (10 is heroku free tier)
        idleTimeoutMillis: 30000 //timeout in milliseconds
    }
}
console.log(config);

const pool = new Pool(config);

//next couple lines are not NEEDED, but helpful for error messages
pool.on('connect', () => {
    console.log('postgresql connected');
});
pool.on('error', (error) => {
    console.log('postgresql had error', error);
});

module.exports = pool;