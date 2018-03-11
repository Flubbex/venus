import ROT from 'rot-js';

export default  {
  generate:(state,action)=>{
  var map = new ROT.Map[action.style||"Digger"]
                       (action.size[0],
                        action.size[1],
                        action.config),
      terrain = {},
      enemy   = {},
      item    = {};

  map.create((x,y,value)=>terrain[x+","+y] = value)

  var rooms    = map.getRooms ? map.getRooms() : [],
      halls    = map.getCorridors ? map.getCorridors() : [],
      features = {};

  features[rooms[0]._x1+","+rooms[0]._y1] =
              {type:"stairway",
               direction:"up",
               tile:"<"};

  features[rooms[rooms.length-1]._x1+","+rooms[rooms.length-1]._y1] =
             {type:"stairway",
              direction:"down",
              tile:">"};

  state.get().player.set('position',[rooms[0]._x1,rooms[0]._y1]);
  
  return state.get().set('map',{
      key:action.key,
      size:action.size,
      terrain,
      enemy,
      item,
      rooms,
      halls,
      features
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