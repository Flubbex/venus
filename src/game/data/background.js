export default {
  wizard:{
    name:"Wizard",
    description:"Throws magics and screams incantations at things.",
    attributes:{
      strength:3,
      dexterity:4,
      intelligence:5
    },
    inventory:[
      {name:"Book of spells",tile:"b"}
    ]
  },
  warrior:{
    name:"Warrior",
    description:"Pokes things with weapons.",
    attributes:{
      strength:5,
      dexterity:4,
      intelligence:3
    },
    inventory:[
      {name:"Sword",tile:"s"}
    ]
  },
  rogue:{
    name:"Rogue",
    description:"Sneaks around like a sissy.",
    attributes:{
      strength:3,
      dexterity:5,
      intelligence:4
    },
    inventory:[
      {name:"Dagger",tile:"d"}
    ]
  },
  ranger:{
    name:"Ranger",
    description:"Likes trees a lot, shoots things with a bow.",
    attributes:{
      strength:3,
      dexterity:5,
      intelligence:3
    },
    inventory:[
      {name:"Bow",tile:"b"}
    ]
  }
}
