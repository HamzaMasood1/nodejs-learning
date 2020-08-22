let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
})

connection.connect(function(err){
    if(err){
        return console.error('error: ' + err.message);
    }

    console.log("connected!")

    let createTodoappDB= `create database todoapp`

    connection.query(createTodoappDB, function(err, result){
        if (err) throw err;
        console.log("database created");
    })
})