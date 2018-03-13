import {item,enemy} from '../data';

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
      item[action.name ||
        Object.keys(item)[
          Math.floor(
            Math.random() * Object.keys(item).length
          )
        ]
      ])
  }),
  enemy: (state, action) => ({
    type: "dungeon.spawn",
    entity: Object.assign({
        failedmove:0,
        energy:1,
        position: action.position ||
          Object.keys(state.get().map.terrain)
          .filter((e) => state.get().map.terrain[e] === 0)
          .random().split(",").map((e)=>parseInt(e,10))
      },
      enemy[action.name ||
        Object.keys(enemy)[
          Math.floor(
            Math.random() * Object.keys(enemy).length
          )
        ]
      ])
  }),
  terrain: (state, action) => {

  }
}
