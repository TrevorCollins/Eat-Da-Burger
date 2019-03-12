var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "kucoding",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    // eslint-disable-next-line no-console
    console.error("error connecting: " + err.stack);
    return;
  }

  // eslint-disable-next-line no-console
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
