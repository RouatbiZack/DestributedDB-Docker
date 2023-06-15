const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const db = require('../modules/db');

const dbGlobal = mysql.createPool({
  connectionLimit: 10,
  host: 'db_bloggy',
  user: 'root',
  password: '',
  database: 'bloggy',
  multipleStatements: true,
  port: 3306
});

const dbNode1 = mysql.createConnection({
  host: 'db_subscribed',
  user: 'root',
  password: '',
  database: 'subscribed',
  port: 3308
});

const dbNode2 = mysql.createConnection({
  host: 'db_notsubscribed',
  user: 'root',
  password: '',
  database: 'notsubscribed',
  port: 3309
});



router.post('/', (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  const selectEmailSql = `
    SELECT *
    FROM newsletter
    WHERE email = ?`;
  const values = [email];
  db.query(selectEmailSql, values, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('An error occurred while checking the email');
    }

    const newsletter = results.length > 0 ? true : false;

    const insertGlobalSql = `
      INSERT INTO registration (username, email, password, newsletter)
      VALUES (?, ?, ?, ?)`;
    const globalValues = [username, email, password, newsletter];

    dbGlobal.query(insertGlobalSql, globalValues, (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).send('An error occurred while inserting the user information into the global table');
      }

      console.log('User information inserted into the global table');

      const dbConnection = newsletter ? dbNode1 : dbNode2;

      const insertUserSql = `
        INSERT INTO registration (username, password,email)
        VALUES (?, ?, ?)`;
      const userValues = [username, password,email];

      dbConnection.query(insertUserSql, userValues, (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).send('An error occurred while inserting the user information into the database node');
        }

        console.log('User information inserted into the database node');
        res.redirect('/');
      });
    });
  });
});

module.exports = router;
