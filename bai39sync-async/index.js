var request = require('request');

console.time("Time this");

request('https://randomuser.me/api/', function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

console.timeEnd("Time this")