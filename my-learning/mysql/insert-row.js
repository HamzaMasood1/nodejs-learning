let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'todoapp'
})


connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!")

    let insertStatement = `INSERT INTO todos(title, completed) 
    VALUES('Finished interview for nodejs', true)`

    connection.query(insertStatement, function(err){
        if(err) throw err;
        console.log("record inserted");
    });

    connection.end();
})