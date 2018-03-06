import React, { Component } from 'react';

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  
  componentWillReceiveProps(nextProps)
  {
    this.setState(nextProps.state);
  }
  
  render() {
    return (
      <div className="tile is-child box">
      <h1 className="is-size-5">Console</h1>
        <ul>
          {this.state.messages.map((message,key) => 
            <li key={key}><span>[{message.time}]</span> <span>{message.text}</span></li>
          )}
        </ul>
      </div>
    );
  }
}

export default Console;
