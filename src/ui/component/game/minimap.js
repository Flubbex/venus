import React, { Component } from 'react';

class Minimap extends Component {
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
        <h1 className="is-size-5">Minimap</h1>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png" alt="display"/>
        </figure>
      </div>
    );
  }
}

export default Minimap;
