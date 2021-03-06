export default {
  generate: (state, action) => (
  ["core.series",{
    set:[
        "map.generate",
        ["core.async",{set:[].concat(
        new Array(Math.floor(Math.random()*10))
            .fill("generator.enemy"),
        new Array(Math.floor(Math.random()*10))
            .fill("generator.item")
      )}
    ]]
    }
  ]
  ),
  spawn: (state, action) => ("generator.enemy"),
  drop: (state,action) => ({
    type:"map.drop",
    itemid:action.item.position.join(","),
    data:action.item
  }),
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
    state.get().dungeon.level > 0
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
  ),
  descend: (state, action) => (
  state.get().dungeon.set('level',state.get().dungeon.level + 1) &&
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
  ),
}
