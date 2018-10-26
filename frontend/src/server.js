const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 60607});

console.log("Server")
wss.on('connection', function (ws) {
  console.log("Connected")
  ws.on('message', function (message) {
    console.log('received: %s', message)
  });

  setInterval(
    () => ws.send(`${new Date()}`),
    1000
)
});