import {menu} from '../data';

export default {
  show: (state, action) => (
    Object.assign({
      type: "boundlist.show",
      state: "creator_"+(action.step||0),
    }, menu.creator[action.step || 0])
  ),
  pickRace: (state, action) => (
    state.get().player.set('race', action.race) &&
    {
      type: "creator.show",
      step: 1
    }
  ),
  pickBackground: (state, action) => (
    state.get().player.set('background', action.background) &&
    "creator.hide"

  ),
  hide: (state, action) => ({
    type: "menu.hide",
    nextstate: "game"
  }),
}
