import Freezer from 'freezer-js';

var state = new Freezer({
    core:{
      state:"initialize",
      time:0,
      action:null,
      queue:[],
      history:[],
    },
    overlay:null,
    console:{
      messages:[]
    },
    binding:{
      container:{
        "mainmenu":{
          "n":"core.newgame",
          "l":"core.loadgame"
        },
        "game":{
          "i":"player.inventory",
          "e":"player.eat",
          "d":"player.drop",
          "f":"player.fire",
          "w":"player.wield",
          ">":"player.descend",
          "<":"player.acscend"

        }
      }
    },
    map:null,
    dungeon:{
      level:1,
      mapset:[]
    },
    player:{
      name:"Player",
      position:[0,0],
      health:[10,10],
      mana:[3,3],
      inventory:[{name:"Ration",tile:"r"}],
      attributes:{
        strength:4,
        dexterity:4,
        intelligence:4
      },
      xl:1,
      ac:3,
      ev:3,
      exp:0
    },
    savegame:{
      container:{}
    }
});

export default state;
