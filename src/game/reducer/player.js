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
  move: (state, action) => {
    var enemy =
      state.get()
      .player,

      pos = enemy.position,

      newpos = pos.map((e, i) =>
        e + modifier[action.direction][i]);

    if (state.get().map.enemy[newpos.join(",")])
    return {
      type: "player.attack",
      target:newpos.join(",")
    }
    else if (state.get().map.terrain[newpos.join(",")] === 0) {
      enemy.set({
        position: newpos
      });

      var visible = {};

      var in_room = state.get().map.rooms.map((room)=>{
         if (newpos[0] >= room._x1-1 &&
             newpos[0] <= room._x2+1 &&
             newpos[1] >= room._y1-1 &&
             newpos[1] <= room._y2+1)
             {
               room.create((x,y,v)=>{
                var key = x+","+y;
                state.get().map.explored.set(key,v)
                visible[key] = v;
                })
               return true;
             }
         else
          return false
       })

      if (in_room.indexOf(true)===-1)
        state.get().map.halls.map((hallway)=>{
           var start,end;
           if (hallway._startX < hallway.endX)
           {
            start = [hallway._startX,hallway._startY]
            end = [hallway._endX,hallway._endY]
          }
           else
          {
            start = [hallway._endX,hallway._endY]
            end = [hallway._startX,hallway._startY]
          }

          if (newpos[0] >= start[0]-1 &&
              newpos[0] <= end[0]+1 &&
              newpos[1] >= start[1]-1 &&
              newpos[1] <= end[1]+1)
            {
              hallway.create((x,y,v)=>{
               var key = x+","+y;
               state.get().map.explored.set(key,v)
               visible[key] = v;
               })
            }
            return null
         })

      state.get().map.set('visible',visible);

      return {
        type: "core.tick",
        duration: enemy.movespeed
      }
    } else {
      return {
        type: "console.log",
        body: "That would be impossible"
      }
    }
  },
  attack: (state, action) => {
    var enemy = state.get().map.enemy[action.target];
    var player = state.get().player;

    if (Math.random()*enemy.ev>player.ac)
    return [{
      type: "console.log",
      body: "You fail pathetically trying to to hit the "+enemy.name
    },{
      type: "core.tick",
      duration: 1
    }]
    var amount = Math.floor(
      Math.random()*
      state.get().player.attributes.strength
      )

    if (amount > 0)
      return [{
        type: "console.log",
        body: "You hit the "+enemy.name+" ["+amount+"]"
      },{
        type: "entity.hurt",
        entityid: action.target,
        amount,
        evoker:"player"
      },{
        type: "core.tick",
        duration: 1
      }]

  },
  eat: (state, action) => ({
    type: "menu.show",
    title: "Eat what?",
    body: state.get().player.inventory.map((item) => item.name)
  }),
  drop: (state, action) => ({
    type: "menu.show",
    title: "Drop what?",
    body: state.get().player.inventory.map((item) => item.name)
  }),
  fire: (state, action) => ({
    type: "menu.show",
    title: "Fire what?",
    body: state.get().player.inventory.map((item) => item.name)
  }),
  quiver: (state, action) => ({
    type: "menu.show",
    title: "Quiver what?",
    body: state.get().player.inventory.map((item) => item.name)
  }),
  quaff: (state, action) => ({
    type: "menu.show",
    title: "Quaff what?",
    body: state.get().player.inventory.map((item) => item.name)
  }),
  wear: (state, action) => ({
    type: "menu.show",
    title: "Wear what?",
    body: state.get().player.inventory.map((item) => item.name)
  }),
  remove: (state, action) => ({
    type: "menu.show",
    title: "Remove what?",
    body: state.get().player.inventory.map((item) => item.name)
  }),
  wield: (state, action) => ({
    type: "menu.show",
    title: "Wield what?",
    body: state.get().player.inventory.map((item) => item.name)
  }),
  inventory: (state, action) => ({
    type: "boundlist.show",
    title: "Inventory",
    state: "game_menu",
    body: state.get().player.inventory.map((o,i)=>(
        'abcdefghijklmnopqrstuvwxyz'[i]+" - "+o.name
      )
    ),
    binds: state.get().player.inventory.map((o,i)=>({
      state: "game_menu",
      key:'abcdefghijklmnopqrstuvwxyz'[i],
      action:{type:"player.showItem",
              itemid:i}
    }))
  }),
  ascend: (state, action) => (
  state.get().map.features[
    state.get().player.position.join(",")
  ] && state.get().map.features[
    state.get().player.position.join(",")
  ].type === "stairway"
   &&
   state.get().map.features[
     state.get().player.position.join(",")
   ].direction === "up"
  ? {
    type: "dungeon.ascend"
    }
  : {
    type: "console.log",
    body: "You can't go up here"
    }
  ),
  descend: (state, action) => ({
    type: "dungeon.descend"
  })
}
