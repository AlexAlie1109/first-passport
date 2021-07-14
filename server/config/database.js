const mysql = require('mysql');

const dbString = process.env.passport_url


const db = mysql.createConnection(dbString);

db.connect();

module.exports = db;
