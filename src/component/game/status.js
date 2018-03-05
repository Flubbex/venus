import React, { Component } from 'react';

class Status extends Component {
  render() {
    return (
      <div className="tile is-parent box">
        <div className="tile is-child">
          <h1 className="is-size-5">Status</h1>
          <ul>
            <li>Name: Name</li>
            <li>Health: 10/10</li>
            <li>Mana: 3/3</li>
            <li>XL: 1</li>
            <li>AC: 3</li>
            <li>EV: 3</li>
            <li>EXP: 0 (0% TNL)</li>
            
          </ul>
        </div>
        
        <div className="tile is-child">
          <h1 className="is-size-5">Attributes</h1>
          <ul>
            <li><span>Strength:</span> <span>4</span></li>
            <li><span>Dexterity:</span> <span>4</span></li>
            <li><span>Intelligence:</span> <span>4</span></li>
          </ul>
          <h1 className="is-size-5">Affects</h1>
          <ul>
            <li>None</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Status;
