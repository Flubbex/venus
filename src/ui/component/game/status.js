import React, { Component } from 'react';

class Status extends Component {
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
      <div className="tile is-parent box">
        <div className="tile is-child">
          <h1 className="is-size-5">Status</h1>
          <ul>
            <li>Name:   {this.state.player.name}             </li>
            <li>Time:   {this.state.time}                    </li>
            <li>Health: {this.state.player.health.join('/')} </li>
            <li>Mana:   {this.state.player.mana.join('/')}   </li>
            <li>XL:     {this.state.player.xl}               </li>
            <li>AC:     {this.state.player.ac}               </li>
            <li>EV:     {this.state.player.ev}               </li>
            <li>EXP:    {this.state.player.exp} (0% TNL)     </li>
          </ul>
        </div>
        
        <div className="tile is-child">
          <h1 className="is-size-5">Attributes</h1>
          <ul>
            <li><span>Strength:</span> 
                <span>{this.state.player.attributes.strength}</span>
            </li>
            <li>
                <span>Dexterity:</span>
                <span>{this.state.player.attributes.dexterity}</span>
            </li>
            <li>
                <span>Intelligence:</span>
                <span>{this.state.player.attributes.intelligence}</span>
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
