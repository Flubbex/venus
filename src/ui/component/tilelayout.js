import React, { Component } from 'react';

import {Minimap,Status,Display,Nearby,Console} from './game';

class Tilelayout extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }
  render() {
    return (
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
            
              <Display/>
              
            </div>
            
            <div className="tile is-parent is-vertical">
            
              <Minimap/>
              
              <Status player={this.state.player}/>
              
              <Nearby/>
              
            </div>
            
          </div>
          
          <div className="tile is-ancestor">
            <div className="tile is-parent">
            
              <Console/>
            
            </div>
          </div>
        </section>
    );
  }
}

export default Tilelayout;
