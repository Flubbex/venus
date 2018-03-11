import ROT from 'rot-js';
import Mousetrap from 'mousetrap';

import state from './state';

import * as action from './action';

import * as reducer from './reducer';

import {
  database
} from './service';

function setup(ui, debug = false) {

  var handle = (action,args) => {
    if (typeof(action) === "string")
      action = Object.assign({type:action},args);

  var parts = action.type.split("."),
      result = parts.length > 1 ?
      reducer[parts[0]][parts[1]](state, action) :
      null;

    if (result    &&
      result.type &&
      result.type.indexOf("."))
      return result.length ?
        result.map(handle) :
        handle(result)

    return result;
  };

  var game = {
    state,
    handle,
    database,
    log: (message) => handle(action.console.log(message)),
    ui: ui.setup(state.get())
  };

  state.on('update', ui.render);

  var movebinds = {
    "up": 0,
    "down": 1,
    "left": 2,
    "right": 3
  };

  Mousetrap.bind(Object.keys(movebinds), (event, key) =>
    game.handle("player.move", {
      direction: movebinds[key]
    })
  )

  Mousetrap.bind("abcdefghijklmnoqrstuvwxyz".split(''),
    (event, key) =>
    game.handle("binding.evoke", {
      key
    })
  )


  window.onload = (e) => {
    game.state.get().core.set('state', 'mainmenu');
  }

  if (!debug)
    return

  window.ROT = ROT;
  window.game = game;
  window.action = action;
  window.reducer = reducer;
}

export default setup
