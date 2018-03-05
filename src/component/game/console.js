import React, { Component } from 'react';

class Console extends Component {
  render() {
    return (
      <div className="tile is-child box">
      <h1 className="is-size-5">Console</h1>
        <ul>
          <li><span>[Turn: 0] </span><span>Some message</span></li>
        </ul>
      </div>
    );
  }
}

export default Console;
