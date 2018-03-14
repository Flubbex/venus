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
    var entity =
      state.get()
      .player,

      pos = entity.position,

      newpos = pos.map((e, i) =>
        e + modifier[action.direction][i]),
        joined = newpos.join(",");

    if (state.get().map.enemy[joined])
    return {
      type: "player.attack",
      target:joined
    }
    else if (state.get().map.terrain[joined] === 0) {
      entity.set({
        position: newpos
      });

      return ["core.series",{set:[{
        type: "core.tick",
        duration: entity.movespeed
      },"fov.generate"]}
      ]
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
    return ["core.series",{set:[{
      type: "console.log",
      body: "You fail pathetically trying to to hit the "+enemy.name
    },{
      type: "core.tick",
      duration: 1
    }]}]

    var amount = Math.floor(
      Math.random()*
      state.get().player.attributes.strength
      )

    if (amount > 0)
      return ["core.series",{set:[{
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
      }]}];

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
  ascend: (state, action) => {
  var pos = state.get().player.position.join(",");
  return state.get().map.features[pos] &&
         state.get().map.features[pos].type === "stairway" &&
         state.get().map.features[pos].direction === "up"
    ? {
      type: "dungeon.ascend"
      }
    : {
      type: "console.log",
      body: "You can't go up here"
      }
  },
  descend: (state, action) => {
  var pos = state.get().player.position.join(",");
  return state.get().map.features[pos] &&
         state.get().map.features[pos].type === "stairway" &&
         state.get().map.features[pos].direction === "down"
    ? {
      type: "dungeon.descend"
      }
    : {
      type: "console.log",
      body: "You can't go down here"
      }
  }
}
