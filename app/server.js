//////////////////////////////////////////////////////////////
// server

const express = require('express');
const http = require('http');
const _ = require('lodash');
const fs = require('fs');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/client.js', function (req, res) {
  res.sendFile(__dirname + '/client.js');
});

const server = http.createServer(app);

server.listen(3000, function () {
  console.log('App listening on port 3000');
});

//////////////////////////////////////////////////////////////
// server api - data read/write will occur here

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ server:server });

wss.on('connection', function (ws) {
  ws.onmessage = (message) => {
    const data = message.data;
    if (data === 'connected') {
      return;
    }

    const json = JSON.parse(data);
    if (_.has(json,'version',false) && _.has(json,'type',false)) {
      fs.writeFile('./saved/test.txt', data, () => {
        console.log('\nData: ', data);
      });
    } else {
      console.log('Data missing version and type');
    }
  };

  /*setInterval(
    () => ws.send(`${new Date()}`),
    1000
  )*/
});