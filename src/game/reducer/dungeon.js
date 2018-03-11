export default {
  generate: (state, action) => ({
    type: "map.generate"
  }),
  spawn: (state, action) => {
    state.get().map.enemy.set(action.entityid, action.data)
  },
  save: (state, action) => {
    state.get().dungeon.mapset.set(action.level ||
      state.get().dungeon.level,
      state.get().map);
  },
  load: (state, action) => ({
    type: "map.load",
    map: state.get().dungeon.mapset[action.level ||
      state.get().dungeon.level]
  }),
  ascend: (state, action) => (
    state.get().map.features[
      state.get().player.position.join(",")
    ] &&
    state.get().map.features[
      state.get().player.position.join(",")
    ].type === "stairway"
      &&
    state.get().map.features[
      state.get().player.position.join(",")
    ].direction === "up"
    ? state.get().dungeon.level > 0
      ?   state.get().dungeon.set('level',
          state.get().dungeon.level - 1) &&
          state.get().dungeon.mapset[state.get().dungeon.level]
          ? {
             type: "dungeon.load"
            }
          : [{
              type: "dungeon.generate"
            },
            {
              type: "dungeon.save"
            },
            {
              type: "console.log",
              body: "You ascend the dungeon"
            }]
      :{
          type:"console.log",
          body:"That would leave the dungeon"
       }
    :{
        type:"console.log",
        body:"You can't go up here"
     }
  ),
  descend: (state, action) => (
    state.get().map.features[
      state.get().player.position.join(",")
    ] &&
    state.get().map.features[
      state.get().player.position.join(",")
    ].type === "stairway"
      &&
    state.get().map.features[
      state.get().player.position.join(",")
    ].direction === "down"
    ?   state.get().dungeon.set('level',
        state.get().dungeon.level + 1) &&
        state.get().dungeon.mapset[state.get().dungeon.level]
        ? {
           type: "dungeon.load"
          }
        : [{
            type: "dungeon.generate"
          },
          {
            type: "dungeon.save"
          },
          {
            type: "console.log",
            body: "You descend the dungeon"
          }]
  :{
      type:"console.log",
      body:"You can't go down here"
   }
  ),
}
