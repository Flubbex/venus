import React, { Component } from 'react';
import ROT from 'rot-js';
    
class Display extends Component {
  
  constructor(props) {
    super(props);
    this.display = new ROT.Display(props.state.config);
   
    this.insertDisplay = this.insertDisplay.bind(this);
    
    this.renderMap();
  }
  
  entityAt(mapdata,x,y){
    
    return mapdata.enemy[x+','+y] 
                          ? [x,y,mapdata.enemy[x+','+y].tile]
                          : mapdata.item[x+','+y]
                                  ? [x,y,mapdata.item[x+','+y].tile]
                                  : false;
  }
  terrainTile(tileinfo){
    return tileinfo.slice(0,2)
            .concat(this.props.state.config.terrain[tileinfo[2]])
  }
  renderMap(nextProps)
  {
    var mapdata = nextProps ? nextProps.state.map
                            : this.props.state.map;
        
    if (!mapdata.size  || !mapdata.terrain || 
        !mapdata.enemy || !mapdata.item)
      throw new Error("Renderer received invalid mapdata",mapdata);
    
    this.display.clear();
    mapdata.terrain.map((tileinfo)=>{
      var tile = this.entityAt(mapdata,tileinfo[0],tileinfo[1]) ||
                   this.terrainTile(tileinfo);
      
      return this.display.draw.apply(this.display,tile);
    
    });
  }
  
  componentWillReceiveProps(nextProps)
  {
    this.renderMap(nextProps);
    this.display.draw(nextProps.state.player.position[0],
                 nextProps.state.player.position[1],
                 "@")   
  }

  insertDisplay(node)
  {
    this.container = this.display.getContainer();
    node.appendChild(this.container);
  }
  
  render() {
    return (
      <div className="tile is-child box">
        <nav className="level">
          <div className="level-item has-text-centered" ref={this.insertDisplay}> 
          </div>
        </nav>
      </div>
    );
  }
}

export default Display;
