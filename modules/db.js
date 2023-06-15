const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'db_bloggynews',
  user: 'root',
  password: '',
  database: 'bloggynews',
  port : 3307
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to Newsletter database...');
});

module.exports = db;
