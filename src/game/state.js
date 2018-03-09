import Freezer from 'freezer-js';

var state = new Freezer({
    core:{
      time:0,
      action:{type:"initialize"},
      queue:[],
      history:[],
    },
    console:{
      messages:[]
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

export default state;