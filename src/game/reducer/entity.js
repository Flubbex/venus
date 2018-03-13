var modifier = [
  [0, -1],
  [0, 1],
  [-1, 0],
  [1, 0],
  [-1, -1],
  [1, -1],
  [-1, 1],
  [1, 1]
];
export default {
  move:(state,action)=>{
  var enemy = state.get()
              .map
              .enemy[action.entityid].toJS(),

      pos = enemy.position,

      newpos = pos.map((e,i)=>
                            e+modifier[action.direction][i] ),

      joined = newpos.join(",");
  if (state.get().map.terrain[joined] === 0 &&
      !state.get().map.enemy[joined] )
  {
    enemy.position = newpos;
    state.get().map.enemy.remove(pos.join(","))
    state.get().map.enemy.set(joined,enemy);

    return {
      type:"entity.moved",
      entityid:joined
    }
  }
  else
  return {
    type:"entity.failedmove",
    entityid:action.entityid
  }

  },
  moved:(state,action)=>{
    var enemy = state.get().map.enemy[action.entityid];
    enemy.set('energy',enemy.energy-1);
  },
  failedmove:(state,action)=>(
    state.get().map.enemy[action.entityid].failedmove < 3
    ? state.get().map.enemy[action.entityid].set('failedmove',
        state.get().map.enemy[action.entityid].failedmove+1) &&
    {
      type:"entity.move",
      entityid: action.entityid,
      direction:Math.floor(Math.random()*8)
    }
    : state.get().map.enemy[action.entityid].set('failedmove',1) &&
      null
),
  tick:(state,action)=>{
    var enemy = state.get().map.enemy[action.entityid];

    if (enemy.energy > 0)
      return {
     type:"entity.move",
     entityid:action.entityid,
     direction:Math.floor(Math.random()*8)
      }
    else
      enemy.set('energy',enemy.energy+1);
  },
  eat:(state,action)=>{

  },
  quaff:(state,action)=>{

  },
  talk:(state,action)=>{

  },
  attack:(state,action)=>{

  },
  hurt:(state,action)=>{
    var entity = state.get().map.enemy[action.entityid];
    entity.set('health',entity.health-action.amount);

    if (entity.health < 0 )
    return {
      type: "entity.die",
      entityid:action.entityid,
      evoker: action.evoker
    }
  },
  die:(state,action)=>{
    var target = state.get().map.enemy[action.entityid].toJS();
    state.get().map.enemy.remove(action.entityid);

    if (action.evoker==='player')
    {
      state.get().player.set('exp',
        state.get().player.exp+1
      )
      return {
        type:"console.log",
        body:"You killed a "+target.name
      }
    }
    else
    {
      var evokee = state.get().map.enemy[action.evoker];
    return {
      type:"console.log",
      body:evokee.name+" has killed a "+target.name
    }
    }
  }
}
