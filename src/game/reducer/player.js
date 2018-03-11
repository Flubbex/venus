var modifier = [[0,-1],[0,1],[-1,0],[1,0]];

export default {
  move:(state,action)=>{
    var enemy =
              state.get()
              .player,

      pos = enemy.position,

      newpos = pos.map((e,i)=>
                            e+modifier[action.direction][i] );

  if (state.get().map.terrain[newpos.join(",")] === 0)
    enemy.set({position:newpos});

  },
}
