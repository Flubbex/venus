var Freezer = require('freezer-js');

function setup(ui,debug=false){
  var state = new Freezer({
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
  
  ui.setup(state.get());
  
  if (!debug)
    return
  
  window.onload = (e) => console.log("Document ready",ui,state.get());
  window.ui     = ui;
  window.state  = state;
  
}

export default setup