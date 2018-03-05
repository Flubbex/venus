import React, { Component } from 'react';

import {Minimap,Status,Display,Nearby,Console} from './game';

class Tilelayout extends Component {
  render() {
    return (
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
            
              <Display/>
              
            </div>
            
            <div className="tile is-parent is-vertical">
            
              <Minimap/>
              
              <Status/>
              
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
