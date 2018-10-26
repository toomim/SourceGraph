import React from 'react';


export class WritingPanel extends React.Component {
  /*
  Goal: The Writing Panel should be responsible for making new sources. There will be three main components of the Panel: (1) TextArea (2) Publish button and (3) Metadata Header

  The Metadata Header will consist of:
  1. title
  2. creator(s)
  3. creation-timestamp (defaults to the publish time)
  4. publish-timestamp
  5. tags

  Saving:
  - onmouseup state of the text and the metadata should be updated - how persistent is state?
  - on publish the most recent will be used
   */

  constructor(props) {
    super(props);
    this.state = {};
    this.state.clock = 2000;
    this.state.source = '';
    this.state.metadata = {};
    this.state.timer = null;
    this.state.connected = false;
    this.state.ws = new WebSocket('ws://localhost:60607');
  }

  updateSource() {
    console.log("UpdateState", this.state)
    this.updateText();
    this.updateMetadata();
  }

  updateText() {
    this.setState({
      source: this.refs.source.value,
    });
  }

  updateMetadata() {
    this.setState({
      metadata: {
        title: this.refs['metadata-title'].value.trim(),
        creator: this.refs['metadata-creator'].value.trim(),
        creation: this.refs['metadata-creation'].value.trim(),
      }
    });
  }

  componentDidMount() {
    const state = this.state;
    state.timer = setInterval(() => this.updateSource(), this.state.clock);

    this.state.ws.onopen = () => {
      console.log("Opened! ")
      const state = this.state
      state.connected = true;
      this.setState(state)
    }


    //this.state.ws.send(this.state.source)


    this.setState(state);
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  publish() {
    //Send off as JSON and convert to txt file... txt file should be JSON:
    /*
    json file:

    source = {
      version: x,
      metadata: {
        title,
        creator,
        creation,
        published,
        tags, (need a relational db for this)
      },
      source: text
    }
     */
  }

  render () {
    if (this.state.connected) {
      this.state.ws.send(this.state.source)
    }
    //this.state.ws.send(this.state.source)
    console.log("Check state", this)
    const margin = 5;
    const headerStyle = {};
    const colStyle = {
        outline: '5px dotted black',
        height: '100%',
        width: `33%`,
        minWidth: '200px',
        float: 'left',
        margin: `${margin}px`,
    };

    const inputStyle = {
      outline: '5px dotted black',
      height: '70%',
      width: '100%',
    };

    const buttonStyle = {
      height: '50px',
      width: '50px',
      outline: '5px dotted black',
    };

    //onClick={this.updateSource.bind(this)}
    //TODO: Consider autogenerating metadata fields...
    return <div style={colStyle}>
      <div style={headerStyle}>
        <label>
          Title:
          <input ref='metadata-title' type="text" />
        </label>
        <label>
          Creator(s):
          <input ref='metadata-creator' type="text" />
        </label>
        <label>
          Creation Time:
          <input ref='metadata-creation' type="text" />
        </label>
      </div>
      <textarea ref='source' style={inputStyle} type="text" name="name" defaultValue={this.state.source}/>
      <button style={buttonStyle}> Publish </button>
    </div>;
  };
}