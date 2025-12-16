const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: '3306',
        user: 'user_cities',
        password: 'password_cities',
        database: 'cities'
    },
    useNullAsDefault: true
});

exports.db = db;