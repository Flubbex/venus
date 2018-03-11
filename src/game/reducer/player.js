var modifier = [
  [ 0, -1],
  [ 0,  1],
  [-1,  0],
  [ 1,  0],
  [-1, -1],
  [ 1, -1],
  [-1,  1],
  [ 1,  1]
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
        duration:enemy.movespeed
      }
    } else {
      return {
        type: "console.log",
        body: "That would be impossible"
      }
    }
  },
  inventory: (state, action) => ({
      type: "menu.show",
      title: "Inventory",
      nextstate: "game_inventory",
      body: state.get().player.inventory.map((item) => item.name)
    })
}
