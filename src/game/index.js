import ROT from 'rot-js';
import Mousetrap from 'mousetrap';

import state from './state';

import * as action from './action';

import * as reducer from './reducer';

import {
  database
} from './service';

function setup(ui, debug = false) {

  var handle = (action, args) => {
    if (typeof(action) === "string")
      action = Object.assign({
        type: action
      }, args);

    if (!action.type)
      throw new Error("Invalid action being handled", action);

    var parts = action.type.split(".");

    if (!reducer[parts[0]] || !reducer[parts[0]][parts[1]])
      throw new Error("Unknown action being handled ("+action.type+")", action);

    console.log(action.type);

    var result = parts.length > 1 ?
      reducer[parts[0]][parts[1]](state, action) :
      null;

    if (result)
      return result.length ?
        result.map(handle) :
        handle(result)
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

  Mousetrap.bind("abcdefghijklmnoqrstuvwxyz"
                .split('')
                .concat(['.',',','/','?'],
                        ['1','2','3','4','5','6','7','8','9','0'],
                        ['esc','home','space',
                         'pageup','pagedown',
                         'enter','tab','capslock']),
    (event, key) =>
    game.handle("binding.evoke", {
      key
    })
  )


  window.onload = (e) => {
    game.handle("mainmenu.show")
  }

  if (!debug)
    return

  window.ROT = ROT;
  window.game = game;
  window.action = action;
  window.reducer = reducer;
}

export default setup
