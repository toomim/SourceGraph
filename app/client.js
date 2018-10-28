//////////////////////////////////////////////////////////////
// Client Web Socket

const ws = new WebSocket('ws://localhost:3000');

ws.onopen = function () {
  console.log('websocket is connected ...');
  ws.send('connected');
};

ws.onmessage = function (ev) {
  console.log("Client message", ev);
  const payload = {
    v: 1,
    source: "lalala"
  };
};

//////////////////////////////////////////////////////////////
// Essential Variables

// Q: How to create local state that mirrors the parent-child relationships?
// const treeState = {};

// Element IDs
const rootId = 'root';
const containerId = 'container';
const tabcontainerId = 'tabs';
const tab1Id = 'tab1';
const panelcontainerId = 'panelcontainer';
const panel1Id = 'panel1';
const metadataheaderId = 'metadataheader';
const textareaId = 'textarea';
const publishbuttonId = 'publishbutton';

//////////////////////////////////////////////////////////////
// Element Style

const containerStyle = 'width:100%; height:100%; position:absolute; background-color:blue; margin:-8px; overflow:hidden;';
const tabcontainerStyle = 'width:200px; height:100%; position:relative; background-color: lightblue; float:left; border-right:solid; border-right-width:1px; border-color:black;';
const tabStyle = 'width:100%; height:20px; position:relative; background-color:green; border-bottom:solid; border-bottom-width:1px;';
const panelcontainerStyle = 'width: 400px; height:100%; position:relative; background-color:yellow; float:left; border-right:solid; border-right-width:1px; border-color:black; overflow:hidden;';
const panelStyle = 'width:390px; height:100%; position:relative; background-color:orange; float:left; border-right:solid; border-right-width:1px;';
const metadataHeaderStyle = 'width:100%; height:100px; position:relative; background-color:red; border-bottom:solid; border-bottom-width:1px;';
const textareaStyle = 'width:100%; height: 500px; position:relative; background-color:gray; border-bottom:solid; border-bottom-width:1px;';
const publishButtonStyle = 'width:75px; height:20px; position:relative; border:solid; border-width:1px; background-color:white; text-align:center;';

//////////////////////////////////////////////////////////////
// Element Helper Functions

// Q: Can there be a general parent-child-appender?
// function appendChildtoParent(parentId, childId, childStyle, childConstructor) {
//   return;
// }

function makeBranch(element, id, style, children) {
  return {
    element: element,
    id: id,
    style: style,
    children: children
  }
}

function makeButton(element, id, style, fxn, txt) {
  return {
    type: 'button',
    element,
    id,
    style,
    fxn,
    txt,
  }
}


// TreeState could be used for adjustable dimensions...
// Would have to define a few things:
//  - what dimension is adjustable and make a click-region
//  - neighbors (which tree state already does), neighbor relationships and id-usage woudl allow the width/height of the state-tree to change

// Problems:
//  - complexity is going to blow up - how to handle element functions? (one good thing is that there are not many)

function publishText(textareaId) {
  // need to add a metadataId
  const textarea = document.getElementById(textareaId);
  const source = {
    version: '0.0.1',
    type: 'write',
    payload: {
      identifier: "textsave",
      data: textarea.value.trim(),
      extension: 'txt'
    }
  };
  ws.send(JSON.stringify(source));
}

const publishButtonFxn = (ev) => {
  publishText(textareaId);
}

const stateTree = makeBranch('div', containerId, containerStyle,
  [
    makeBranch('div', tabcontainerId, tabcontainerStyle,
      [
        // Need to make id formatting for lists of identical elements
        makeBranch('div', tab1Id, tabStyle, []),
        makeBranch('div', tab1Id, tabStyle, []),
        makeBranch('div', tab1Id, tabStyle, [])
      ]
    ),
    makeBranch('div', panelcontainerId, panelcontainerStyle,
      [
        makeBranch('div', panel1Id, panelStyle, [
          makeBranch('div', metadataheaderId, metadataHeaderStyle, [
            'Metadata Header'
          ]),
          makeBranch('textarea', textareaId, textareaStyle, []),
          makeButton('div', publishbuttonId, publishButtonStyle, publishButtonFxn, 'Publish')
        ])
      ]
    )
  ]
);

function renderTree(tree, rootId) {
  const parent = document.getElementById(rootId);
  const type = tree.type;

  if (typeof(tree) === 'string') {
    parent.innerText = tree;
    return;
  }

  const child = document.createElement(tree.element);
  const childId = tree.id;
  child.setAttribute('id', childId);
  child.setAttribute('style', tree.style);

  if (type === 'button') {
    child.onclick = tree.fxn;
    child.innerText = tree.txt;
    parent.appendChild(child);
    return;
  }

  parent.appendChild(child);
  const children = tree.children;
  for (let x = 0; x < tree.children.length; x++) {
    const grandchildren = children[x];
    renderTree(grandchildren, childId);
  }
  return;
}

/*
Writing Panel Elements:
1. Elements:
  1. Metadata-Header (construct from a metadata-array)
  2. WriteArea
  3. Publish
2. Functionality
  Following a publish OnClick event all the metadata and textarea values will be gather, organized, and sent over ws to api.js where they will be stored
 */


renderTree(stateTree, rootId);