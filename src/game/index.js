import Freezer from 'freezer-js';
import ROT from 'rot-js';

import Player from './player';

function setup(ui,debug=false){
  
  var state = new Freezer({
        time:0,
        console:{messages:[]},
        map:{
          key:[0,1,0.5,0.25],
          size:[25,25],
          generator:(size)=>new ROT.Map.Arena(size[0],size[1]),
          enemy:[],
          item:[]
        },
        dungeon:{
          depth:1
        },
        player:{
        name:"Player",
        position:[7,7],
        health:[10,10],
        mana:[3,3],
        attributes:{
          strength:4,
          dexterity:4,
          intelligence:4
        },
        xl:1,
        ac:3,
        ev:3,
        exp:0
      }
    });
  
  var schedule = new ROT.Scheduler.Action();
  
  var game = {
    state:state,
    ui:ui.setup(state.get()),
    schedule,
    engine:new ROT.Engine(schedule),
    log:(message)=>game.state.get()
                    .console.messages.unshift({
                                        time:game.state.get().time,
                                         text:message})
  };
  
  game.process = [Player].map((factory)=>factory(game));
  
  state.on('update',(newstate)=>{
    game.ui.setState((oldstate,props)=>newstate)
  });
  
  state.on('do',(action)=>{
    game.process.some((module)=>
      module.handle 
        ? !module.handle(action)
        : true
    )
  });
  
  window.onload = (e) => {
    game.engine.start();
    game.log("Welcome to Venus");
  }
  
  if (!debug)
    return
  
  window.game = game;
  window.ROT  = ROT;
}

export default setup