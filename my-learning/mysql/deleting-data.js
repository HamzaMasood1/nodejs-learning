let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todoapp",
});

let sql = "DELETE FROM todos WHERE id = ?";

let id = [54];

connection.connect(function (err) {
  if (err) throw err;

  console.log("connected!");

  connection.query(sql, id, function (err, results, fields) {
    if (err) throw err;
    console.log("Successfully deleted!");
  });
});

