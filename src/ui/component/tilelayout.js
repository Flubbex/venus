import React, { Component } from 'react';

import {Minimap,Status,Display,Nearby,Console} from './game';

class Tilelayout extends Component {
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
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
            
              <Display state={this.state.map.visible} />
              
            </div>
            
            <div className="tile is-parent is-vertical">
            
              <Minimap state={this.state.map.minimap} />
              
              <Status state={this.state.player}/>
              
              <Nearby state={this.state.nearby} />
              
            </div>
            
          </div>
          
          <div className="tile is-ancestor">
            <div className="tile is-parent">
            
              <Console state={this.state.console}/>
            
            </div>
          </div>
        </section>
    );
  }
}

export default Tilelayout;
