import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="tile is-child box">
      <h1 className="is-size-5">Map</h1>
        <figure className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="display"/>
        </figure>
      </div>
    );
  }
}

export default Display;
