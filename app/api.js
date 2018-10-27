//////////////////////////////////////////////////////////////
// server api - data read/write will occur here


var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510});

wss.on('connection', function (ws) {

  ws.onmessage = (message) => {
    const data = message.data;
    if (data === 'connected') {
      return
    }
    const json = JSON.parse(data);
    console.log("Data:", json.v, json.source)
  }

  setInterval(
    () => ws.send(`${new Date()}`),
    1000
  )
});
