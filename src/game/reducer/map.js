import ROT from 'rot-js';

export default  {
  generate:(state,action)=>{

  action.size  = action.size   || [32,32];
  action.style = action.style || "Digger";

  var map = new ROT.Map[action.style]
                       (action.size[0],
                        action.size[1],
                        action.config),
      terrain = {},
      enemy   = {"5,5":{tile:"r",position:[5,5]}},
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

  state.get().set('map',{
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
  spawn:(state,action)=>{
    state.get().map.enemy.set(action.entityid,action.data)
  },
  load:(state,action)=>{
    state.get().set('map',action.map)
  }
}