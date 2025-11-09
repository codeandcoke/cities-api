const knex = require('knex');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: 'cities.db'
    }
});

exports.db = db;