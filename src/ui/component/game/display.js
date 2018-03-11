import React, { Component } from 'react';
import ROT from 'rot-js';

class Display extends Component {

  constructor(props) {
    super(props);
    this.display = new ROT.Display(props.state.config);

    this.insertDisplay = this.insertDisplay.bind(this);

    this.doRender(props);
  }

  objectAt(mapdata,x,y){
    if (mapdata.enemy[x+','+y])
      return mapdata.enemy[x+','+y]
    if (mapdata.features[x+','+y])
      return mapdata.features[x+','+y]
  if (mapdata.item[x+','+y])
      return mapdata.item[x+','+y]
  }

  mapTile(tileinfo){
    return tileinfo.slice(0,2)
            .concat(this.props.state.config.terrain[tileinfo[2]])
  }
  renderMap(mapdata=this.props.state.map,
            offset=[0,0],
            delim=this.props.state.map.size)
  {
    if (!mapdata.size  || !mapdata.terrain ||
        !mapdata.enemy || !mapdata.item)
      throw new Error("Renderer received invalid mapdata",mapdata);

    this.display.clear();
    Object.keys(mapdata.terrain).map((tilepos)=>{
      var tileinfo = tilepos.split(",")
                     .map((e)=>parseInt(e,10))
                     .concat(mapdata.terrain[tilepos])

      if (tileinfo[0]>-offset[0]+delim[0] ||
          tileinfo[1]>-offset[1]+delim[1] ||
          tileinfo[0]<-offset[0] ||
          tileinfo[1]<-offset[1])
        return null

      var tile = this.mapTile(tileinfo),
          object = this.objectAt(mapdata,tileinfo[0],tileinfo[1]);

      tile[2] = object ? object.tile : tile[2];

      offset.map((v,i)=>tile[i] += v)

      return this.display.draw.apply(this.display,tile);

    });

  }

  doRender(nextProps)
  {
    this.renderMap(nextProps.state.map,
                   [
                   Math.floor(nextProps.state.config.width/2)
                   -nextProps.state.player.position[0],
                   Math.floor(nextProps.state.config.height/2)
                   -nextProps.state.player.position[1],
                   ],
                   [nextProps.state.config.width,
                   nextProps.state.config.height]);

    this.display.draw(
                 Math.floor(nextProps.state.config.width/2),
                 Math.floor(nextProps.state.config.height/2),
                 "@");
  }

  componentWillReceiveProps(nextProps)
  {
    this.doRender(nextProps)
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
