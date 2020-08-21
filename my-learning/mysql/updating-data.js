let mysql=require('mysql');

let connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todoapp"
})

let sql="UPDATE todos SET completed=? WHERE id = ?"

let data = [false, 5]


connection.connect(function(err){
    if(err) throw err;

    console.log("connected!");

    connection.query(sql, data, function(err, results, fields){
        if(err) throw err;
        console.log("updated!");
    })
})