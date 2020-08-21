let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todoapp",
});

let insert = `INSERT INTO todos(title, completed) VALUES ?`;
let rows = [
  ["Inserting multiple rows", false],
  ["Inserting another row :D", true],
];
connection.query(insert, [rows], function (err, results, fields) {
  if (err) throw err;

  console.log("inserted");
});

connection.end();