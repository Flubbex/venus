import React, { Component } from 'react';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = props.player;
  }
  render() {
    return (
      <div className="tile is-parent box">
        <div className="tile is-child">
          <h1 className="is-size-5">Status</h1>
          <ul>
            <li>Name:   {this.state.name}             </li>
            <li>Health: {this.state.health.join('/')} </li>
            <li>Mana:   {this.state.mana.join('/')}   </li>
            <li>XL:     {this.state.xl}               </li>
            <li>AC:     {this.state.ac}               </li>
            <li>EV:     {this.state.ev}               </li>
            <li>EXP:    {this.state.exp} (0% TNL)     </li>
          </ul>
        </div>
        
        <div className="tile is-child">
          <h1 className="is-size-5">Attributes</h1>
          <ul>
            <li><span>Strength:</span> 
                <span>{this.state.attributes.strength}</span>
            </li>
            <li>
                <span>Dexterity:</span>
                <span>{this.state.attributes.dexterity}</span>
            </li>
            <li>
                <span>Intelligence:</span>
                <span>{this.state.attributes.intelligence}</span>
            </li>
          
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
