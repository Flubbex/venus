import database from '../data';

export default {
  player: (state, action) => {

  },
  item: (state, action) => ({
    type: "dungeon.drop",
    item: Object.assign({
        position: action.position ||
          Object.keys(state.get().map.terrain)
          .filter((e) => state.get().map.terrain[e] === 0)
          .random().split(",").map((e)=>parseInt(e,10))
      },
      database.item[action.name ||
        Object.keys(database.item)[
          Math.floor(
            Math.random() * Object.keys(database.item).length
          )
        ]
      ])
  }),
  enemy: (state, action) => ({
    type: "dungeon.spawn",
    entity: Object.assign({
        position: action.position ||
          Object.keys(state.get().map.terrain)
          .filter((e) => state.get().map.terrain[e] === 0)
          .random().split(",").map((e)=>parseInt(e,10))
      },
      database.enemy[action.name ||
        Object.keys(database.enemy)[
          Math.floor(
            Math.random() * Object.keys(database.enemy).length
          )
        ]
      ])
  }),
  terrain: (state, action) => {

  }
}
