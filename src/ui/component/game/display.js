import React, { Component } from 'react';
import ROT from 'rot-js';

var config = {width:25,
             height:25,
             fontFamily:"arial"},
    terrain = [".","#"],
    display = null,
    container  = null;
  
class Display extends Component {

  constructor(props) {
    super(props);
    display = new ROT.Display(config);
    this.renderMap(props);
  }
  
  renderMap(nextProps)
  {
    var mapdata = nextProps.state.map,
        player  = nextProps.state.player;
    
    if (!mapdata.size  || !mapdata.generator || 
        !mapdata.enemy || !mapdata.item)
      throw new Error("Renderer received invalid mapdata",mapdata);
    
    var map = mapdata.generator(mapdata.size);
    map.create((x,y,value)=>{
      var tile = mapdata.enemy[x+','+y] 
                          ? mapdata.enemy[x+','+y]
                          : mapdata.item[x+','+y] 
                                  ? mapdata.item[x+','+y]
                                  : terrain[value]
                        
      display.draw(x,y,tile)
    });
    display.draw(player.position[0],player.position[1],"@")
  }
  
  shouldComponentUpdate()
  {
    return false;
  }
  
  componentWillReceiveProps(nextProps)
  {
    if (this.props.state.map    !== nextProps.state.map ||
        this.props.state.player !== nextProps.state.player)
      this.renderMap(nextProps);
    else
      console.log("Skipping maprender")
  }

  insertDisplay(node)
  {
    container = display.getContainer();
    node.appendChild(container);
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
