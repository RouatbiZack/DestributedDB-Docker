const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zacneley@gmail.com',
    pass: 'yqjhzxzuuusjasnw'
  }
});

module.exports = transporter;
