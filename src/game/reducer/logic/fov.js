import ROT from 'rot-js';

var fov = new ROT.FOV.PreciseShadowcasting(function(x, y){
    return fov.terrain[x+","+y] === 0
})

export default {
  generate:(state,action)=>{
    var visible = {},
        pos     = action.pos || state.get().player.position,
        terrain = state.get().map.terrain,
        explored = state.get().map.explored.toJS(),
        rooms   = state.get().map.rooms,
        radius  = action.radius || 4;

    fov.terrain = terrain;
    fov.compute(pos[0],pos[1],
               radius,
    function(x, y, r, vis) {
        if (vis)
          visible[x+","+y] = terrain[x+","+y]
    });

    explored[pos.join(",")] = terrain[pos.join(",")]

    rooms.map((room)=>{
      if (pos[0] >= room._x1 &&
          pos[0] <= room._x2 &&
          pos[1] >= room._y1 &&
          pos[1] <= room._y2)
          room.create((x,y,v)=>explored[x+","+y]=v)
          return null
    })

    state.get().map.set('explored',explored)
    state.get().map.set('visible',visible)
  }
}
