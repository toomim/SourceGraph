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
   */

  constructor(props) {
    super(props);
    this.state = {};
    this.state.source = ''
  }

  updateSource() {
    this.setState({
      source: this.refs.source.value,
    })
  }

  render () {
    const margin = 5;
    const headerStyle ={}
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
      height: '90%',
      width: '100%',
    };

    const buttonStyle = {
      height: '50px',
      width: '50px',
      outline: '5px dotted black',
    };

    return <div style={colStyle}>
      <div style={headerStyle}>
        <label>
          Title:
          <input type="text" />
        </label>
        <label>
          Creator(s):
          <input type="text" />
        </label>
        <label>
          Creation Time:
          <input type="text" />
        </label>
      </div>
      <textarea ref='source' style={inputStyle} type="text" name="name" defaultValue={this.state.source}/>
      <button style={buttonStyle} onClick={this.updateSource.bind(this)}> Publish </button>
    </div>;
  };
}