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

    if (state.get().map.terrain[newpos.join(",")] === 0) {
      enemy.set({
        position: newpos
      });
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
