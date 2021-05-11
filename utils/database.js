const mysql = require('mysql2');

// create database connection
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '82861516',
  database: 'crown_89',
});

module.exports = pool.promise();
