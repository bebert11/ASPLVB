const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost", 
    user: "admin",
    password: "WHBik1cAp-9qvAwh",
    database: "asplvb"
});

connection.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("connecté");
    }
});

module.exports = connection;