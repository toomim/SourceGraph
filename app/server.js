//////////////////////////////////////////////////////////////
// server

var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

/*
app.use('/test', express.static('client.js'));

app.get('./client.js', function (req, res) {
  console.log("Express");
  //console.log(req)
  //console.log(res)
  res.send("./client.js");
});*/

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
