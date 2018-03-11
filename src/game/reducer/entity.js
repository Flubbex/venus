var modifier = [[0,-1],[0,1],[-1,0],[1,0]];

export default {
  move:(state,action)=>{

  var enemy = state.get()
              .map
              .enemy[action.entityid].toJS(),

      pos = enemy.position,

      newpos = pos.map((e,i)=>
                            e+modifier[action.direction][i] );

  if (state.get().map.terrain[newpos.join(",")] === 0)
  {
    enemy.position = newpos;
    state.get().map.enemy.remove(pos.join(","))
    state.get().map.enemy.set(newpos.join(","),enemy);
  }

  },
  tick:(state,action)=>({
     type:"entity.move",
     entityid:action.entityid,
     direction:Math.floor(Math.random()*4)
  }),
  eat:(state,action)=>{

  },
  quaff:(state,action)=>{

  },
  talk:(state,action)=>{

  },
  attack:(state,action)=>{

  },
  hurt:(state,action)=>{

  },
  die:(state,action)=>{

  }
}
