import React, { Component } from 'react';

class Nearby extends Component {
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
        <h1 className="is-size-5">Nearby</h1>
        <ul>
          <li>Nothing</li>
        </ul>
      </div>
    );
  }
}

export default Nearby;
