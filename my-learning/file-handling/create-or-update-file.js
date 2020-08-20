var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log("saved");
})


//opens the file for writing and if the file does not exist it creates the file. 
// var fs = require('fs');

// fs.open('mynewfile.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved! ');
// })


//method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

