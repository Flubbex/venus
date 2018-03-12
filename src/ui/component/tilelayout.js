import React from 'react';

import {Minimap,Status,Display,Console} from './game';

var config = {
             layout: "tile",
             width:20,
             height:20,
             fontSize:18,
             fontFamily:"arial",
             tileWidth: 24,
             tileHeight: 24,
             bg:'transparant',
             terrain :[".","#","|"],
             tileMap: {
                    ".": [0, 0],
                    "#": [24, 0],
                    "|": [72, 0],
                    "@": [96, 0],
                    "s":[0,24],
                    "k":[28,24],
                    "r":[24,24],
                    "]": [72, 24],
                    "a":[0,48],
                    "p":[24,48],
                    ">":[48,48],
                    "<":[72,48]


                },
             };

var Tilelayout = (props) => {
    config.tileSet = document.getElementById("tileset");
    console.log(config)
    var displayState = {
                   config,
                   map:props.state.map,
                   player:props.state.player
                  },
        minimapState = {
                   config:Object.assign({},config,{
                    layout:"rect",
                    width:33,
                    height:33,
                    fontSize:6,
                   }),
                   map:props.state.map,
                   player:props.state.player
                 };

    return (props.state.core.state.startsWith("game"))
    ? (
        <section className="section">
          <div className="tile is-ancestor">
            <div className="tile is-parent">

              <Display state={displayState} />

            </div>

            <div className="tile is-parent is-vertical">

              <Minimap state={minimapState} />

              <Status state={{player:props.state.player,time:props.state.core.time}}/>
            </div>

          </div>

          <div className="tile is-ancestor">
            <div className="tile is-parent">

              <Console state={props.state.console}/>

            </div>
          </div>
        </section>
    )
    : null;
  }

export default Tilelayout;
