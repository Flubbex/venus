export default {
  potion_health:{
    name:"Potion of healing",
    description:"A potion that will restore the health of the consumer.",
    tile:"p",
    affect:[
      {type:"entity.heal",amount:[5,10]}
    ]
  },
  potion_agility:{
    name:"Potion of agility",
    description:"A potion that will increase the speed of the consumer.",
    tile:"a",
    affect:[
      {type:"entity.modify",attribute:"speed",amount:1}
    ]
  }
}
