import React from 'react';

export class WritingPanel extends React.Component {
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
      <textarea ref='source' style={inputStyle} type="text" name="name" defaultValue={this.state.source}/>
      <button style={buttonStyle} onClick={this.update.bind(this)}> Publish </button>
    </div>;
  };
}