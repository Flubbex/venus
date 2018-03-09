import React from 'react';

import {Minimap,Status,Display,Console} from './game';

var config = {
             width:25,
             height:25,
             fontSize:16,
             fontFamily:"arial",
             terrain :[".","#","|"]
             };
                         
var Tilelayout = (props) => {
    var displayState = {
                   config,
                   map:props.state.map,
                   player:props.state.player
                  },
        minimapState = {
                   config:Object.assign({},config,{
                    width:12,
                    height:12,
                    fontSize:12,
                   }),
                   map:props.state.map,
                   player:props.state.player
                  };     
    return (
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
    );
  }

export default Tilelayout;
