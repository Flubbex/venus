import React from 'react';

import Nearby from "../game/nearby";
import Display from "../game/display";

class Minimap extends Display {

  renderMap(mapdata){
    this.display.clear();
    Object.keys(mapdata.explored).map((tilepos)=>{
      var tileinfo = tilepos.split(",")
                     .map((e)=>parseInt(e,10))
                     .concat(mapdata.terrain[tilepos])

      var tile = this.mapTile(tileinfo),
          object = this.objectAt(mapdata,tileinfo[0],tileinfo[1]);


      tile[2] = (object ? object.tile || object[0].tile : tile[2])
                || "?";

      return this.display.draw.apply(this.display,tile);

    });
  }
  doRender(nextProps)
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
