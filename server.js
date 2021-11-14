const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// // returns all the data from the candidates table
// db.query(`Select * From candidates`, (err, rows) => {
//     console.log(rows);
// })

// // get a single candidate 
// db.query(`Select * From candidates Where id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// })

// // delete a candidate
// db.query(`Delete From candidates Where id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

// //create a candidate
// const sql = `Insert Into candidates (id, first_name, last_name, industry_connected)
//                 Values (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

// {CATCHALL ROUTE} default response for any other request (not found) i.e. 'localhost3001/:whatever' => will come back as an http error {CATCHALL ROUTE}
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});