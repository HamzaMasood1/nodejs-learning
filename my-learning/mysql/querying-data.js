let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todoapp"
});

let sql = "SELECT * FROM todos WHERE completed=?";

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected");

  connection.query(sql, [false] , function(error, results, fieds){
      if(error) throw error;

      console.log(results);
     
  })
});

///connection.end();


