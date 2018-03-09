import ROT from 'rot-js';

export default  {
  generate:(state,action)=>{
  var map = new ROT.Map[action.style||"Digger"]
                       (action.size[0],action.size[1]),
      terrain = [],
      enemy   = [],
      item    = [];
  
  map.create((x,y,value)=>terrain.push([x,y,value]))
    
  return state.get().set('map',{
      key:action.key,
      size:action.size,
      terrain,
      enemy,
      item
    })
  },
  ascend:(state,action)=>(
    state.get().dungeon.set('level',
          state.get().dungeon.level-1)
  ),
  descend:(state,action)=>(
    state.get().dungeon.set('level',
          state.get().dungeon.level+1)
  )
}