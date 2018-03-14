import ROT from 'rot-js';

export default  {
  generate:(state,action)=>{

  action.size  = action.size   || [33,33];
  action.style = action.style || "Digger";

  var map = new ROT.Map[action.style]
                       (action.size[0],
                        action.size[1],
                        action.config),
      terrain  = {},
      enemy    = {},
      visible  = {},
      item     = {};

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

  var explored = {};

  rooms[0].create((x,y,v)=>{
    explored[x+","+y]= v;
  })

  state.get().set('map',{
      key:action.key,
      size:action.size,
      terrain,
      visible,
      enemy,
      item,
      rooms,
      halls,
      explored,
      features
    })

    return "fov.generate"
  },
  spawn:(state,action)=>{
    state.get().map.enemy.set(action.entity.position.join(","),
                              action.entity)
  },
  drop:(state,action)=>{
    state.get().map.item[action.itemid]
    ?  state.get().map.item[action.itemid].push(action.data)
    :  state.get().map.item.set(action.itemid,[action.data])
  },
  load:(state,action)=>{
    state.get().set('map',action.map)
  }
}
