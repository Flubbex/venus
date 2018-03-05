import React, { Component } from 'react';

class Minimap extends Component {
  render() {
    return (
      <div className="tile is-child box">
        <h1 className="is-size-5">Minimap</h1>
        <figure className="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png"/>
        </figure>
      </div>
    );
  }
}

export default Minimap;
