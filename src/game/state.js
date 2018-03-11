import Freezer from 'freezer-js';

var state = new Freezer({
    core:{
      state:"initialize",
      time:0,
      action:null,
      queue:[],
      history:[],
    },
    overlay:{
      title:"VENUS",
    body: [{key:0,  body:"[N]ew  Game"},
           {key:1,  body:"[L]oad Game"}]
    },
    console:{
      messages:[]
    },
    binding:{
      container:{
        "mainmenu":{
          "n":"core.newgame",
          "l":"core.loadgame"
        }
      }
    },
    map:{
      key:[0,1,0.5,0.25],
      size:[25,25],
      terrain:[],
      enemy:{"10,10":{tile:"G"}},
      item:["10,15":{tile:"i"}]
    },
    dungeon:{
      level:1,
      mapset:[]
    },
    player:{
      name:"Player",
      position:[0,0],
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
    },
    savegame:{
      container:{}
    }
});

export default state;