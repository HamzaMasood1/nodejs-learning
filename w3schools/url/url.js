var url = require('url');

var url = require('url');
var adr = 'http://localhost:8080/default.html?year=2019&month=february';
var q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

var qdata = q.query;
console.log(qdata.month)