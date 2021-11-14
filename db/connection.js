const mysql = require('mysql2');

// connect to your database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username
        user: 'root',
        // your MySQL password
        password: 'root',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

module.exports = db;