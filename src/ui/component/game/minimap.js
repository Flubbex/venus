import React from 'react';

import Nearby from "../game/nearby";
import Display from "../game/display";


class Minimap extends Display {
  
  componentWillReceiveProps(nextProps)
  {
    this.renderMap(nextProps.state.map);
                   
    this.display.draw(
                 nextProps.state.player.position[0],
                 nextProps.state.player.position[1],
                 "@");
  }
  
  render() {
    return (
      <div className="tile is-child box">
        <h1 className="is-size-5">Minimap</h1>
        <nav className="level">
          <div className="level-item has-text-centered" ref={this.insertDisplay}> 
          </div>
        </nav>

        <Nearby />
        
      </div>
    );
  }
}

export default Minimap;
