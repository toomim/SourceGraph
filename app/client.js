//////////////////////////////////////////////////////////////
// external client js

//////////////////////////////////////////////////////////////
// web socket

/*var ws = new WebSocket('ws://localhost:40510');

ws.onopen = function () {
  console.log('websocket is connected ...');
  ws.send('connected')
};

ws.onmessage = function (ev) {
  const payload = {
    v: 1,
    source: "lalala"
  };

  ws.send(JSON.stringify(payload))
};*/

//////////////////////////////////////////////////////////////
// Writing Panel

function WritingPanel(id) {
  console.log("WritingPanel ID: ", id)
  const panelStyle = {
    width: '33%',
    height: '80%',
    outline: '5px dotted black'
  };

  const base = document.getElementById(id);

  const test = document.createElement('div');
  test.style = panelStyle;

  test.innerHTML = "TEXT TEST";

  base.append(test)

}

function WriteMetadata() {

}

function WriteArea() {

}

function Publish() {

}

//////////////////////////////////////////////////////////////
// Reading Panel

function ReadPanel(id) {

}

function ReadMetadata() {

}

function ReadArea() {

}

//////////////////////////////////////////////////////////////
// Run JS

let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

const containerId = "container";
WritingPanel(containerId);
