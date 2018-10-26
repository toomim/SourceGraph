import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({port: 60607});

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  });

  setInterval(
    () => ws.send(`${new Date()}`),
    1000
)
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
