var Freezer = require('freezer-js');

function setup(ui,debug=false){
  var state = new Freezer({
        console:{messages:[{turn:0,text:"Some message"}]},
        map:{
          tiles:[],
          visible:{tiles:[]},
          minimap:{tiles:[]},
          monster:{tiles:[]},
        },
        dungeon:{
          depth:1
        },
        player:{
        name:"Player",
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
  
  var game = {
    state:state,
    ui:ui.setup(state.get())
  };
  
  state.on('update',(newstate)=>{
    game.ui.setState((oldstate,props)=>newstate)
    console.log("state updated",newstate);
  });
  
  if (!debug)
    return
  
  window.game = game;
  window.onload = (e) => console.log("Document ready",window.game);
}

export default setup