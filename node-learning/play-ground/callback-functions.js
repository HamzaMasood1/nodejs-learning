function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = "Jonny"
    callback(name);
  }
  
  processUserInput(greeting);