const express = require('express');
const router = express.Router();
const mysql = require('mysql2');


const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'db_bloggy',
  user: 'root',
  password: '',
  database: 'bloggy',
  multipleStatements: true,
  port: 3306
});

router.post('/', (req, res) => {
  const { username, password } = req.body;

  const selectUserSql = `
    SELECT *
    FROM registration
    WHERE username = ? AND password = ?`;
  const values = [username, password];
  
  pool.query(selectUserSql, values, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('An error occurred while checking the login credentials');
    }

    if (results.length > 0) {
      // User login successful
      console.log("hello it worked");
      res.send('Login successful');
    } else {
      // Invalid login credentials
      res.send('Invalid login credentials');
    }
  });
});

module.exports = router;
