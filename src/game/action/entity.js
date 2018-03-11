const eat = (entityid,itemid)=> ({
  type:"entity.eat",
  entityid,
  itemid
})

const quaff = (entityid,itemid)=> ({
  type:"entity.quaff",
  entityid,
  itemid
})

const tick = (entityid)=> ({
  type:"entity.tick",
  entityid
})

const move = (entityid,direction)=> ({
  type:"entity.move",
  entityid,
  direction
})

const attack = (entityid,direction)=> ({
  type:"entity.attack",
  entityid,
  direction
})

const speak = (entityid,text)=> ({
  type:"entity.speak",
  entityid,
  text
})

const hurt = (entityid,inflictor,amount)=> ({
  type:"entity.hurt",
  entityid,
  inflictor,
  amount
})

const die = (entityid,inflictor)=> ({
  type:"entity.die",
  entityid,
  inflictor
})

export {eat,quaff,move,attack,
        speak,hurt,die,tick}
