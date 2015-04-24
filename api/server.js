var express = require('express');
var cors = require('cors');

var app = express();
var port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, function (err) {
  
  console.log('\nAPI started on port ', port);
})