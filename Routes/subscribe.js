const express = require('express');
const router = express.Router();

const db = require('../modules/db');
const transporter = require('../modules/transporter');

router.post('/', (req, res) => {
  const email = req.body.email;

  let mailOptions = {
    from: 'zacneley@gmail.com', 
    to: email, 
    subject: 'Welcome to our newsletter!', 
    text: 'Thank you for subscribing to our newsletter.' 
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('An error occurred while sending the email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect('/');

      const insertEmailSql = `
        INSERT INTO newsletter (email)
        VALUES (?)`;
      const values = [email];
      db.query(insertEmailSql, values, (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).send('An error occurred while inserting the email into the database');
        }
        console.log('Email inserted into the database');
      });
    }
  });
});

module.exports = router;
