import ROT from 'rot-js';
import Mousetrap from 'mousetrap';

import state from './state';

import * as action from './action';

import * as reducer from './reducer';

function setup(ui,debug=false){
  
  var schedule = new ROT.Scheduler.Action();
  
  var engine = new ROT.Engine(schedule);
  
  var handle = (action,...args)=>{
    if (typeof(action)==="string")
      action = Object.assign.apply(Object,
                          [{type:action}].concat(args))
    
    var parts = action.type.split("."),
        result = parts.length > 1 
                 ? reducer[parts[0]][parts[1]].call(game,
                                                    state,
                                                    action)
                 : null;
                 
    if (result      && 
        result.type && 
        result.type.indexOf("."))
      return result.length 
        ? result.map(handle)
        : handle(result) 
   
    return result;
  };
  
  var game = {
    ui:ui.setup(state.get()),
    state,
    schedule,
    engine,
    handle,
    log:(message)=>handle(action.console.log(message))
  };

  state.on('update',ui.render);

  var movebinds = {"up":0,"down":1,"left":2,"right":3};
  Mousetrap.bind(Object.keys(movebinds),(event,key)=>
    game.handle("entity.move",{direction:movebinds[key]})
  )
  
  
  window.onload = (e) => {
    game.engine.start();
    game.log("Welcome to Venus");
    game.handle("core.newgame");
  }
  
  if (!debug)
    return
  
  window.ROT      = ROT;
  window.game     = game;
  window.action   = action;
  window.reducer  = reducer;
}

export default setup