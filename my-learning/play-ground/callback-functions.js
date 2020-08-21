function processUserInput(callback){
    var name = "peter";
    console.log('Please enter your name');
    callback(name);
}

processUserInput(function (name){
    console.log('Hello ' + name);
});