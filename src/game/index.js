import ROT from 'rot-js';
import Mousetrap from 'mousetrap';
import store from 'store';
import Freezer from 'freezer-js';

import initialstate from './initialstate';

import * as reducer from './reducer';

window.onerror = () => store.remove('venus')

var state = new Freezer(store.get('venus')||initialstate);

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

  console.log(Math.floor(Date.now()/1000)
              .toString()
              .slice(6),
              action.type);

  var result = parts.length > 1 ?
    reducer[parts[0]][parts[1]](state, action) :
    null;

  if (result)
    return Array.isArray(result) ?
      result.map(handle) :
      handle(result)
};


var setup = (ui, debug = false) => {
  var game = {
    state,
    handle,
    nuked:false,
    log: (body) => handle("console.log",{body}),
    ui: ui.setup(state.get())
  };

  state.on('update', ui.render);

  Mousetrap.addKeycodes({
    12: 'numpad5'
  });

  Mousetrap.bind("abcdefghijklmnoqrstuvwxyz"
                .split('')
                .concat(['up','down','left','right'],
                        ['.',',','/','?','>','<'],
                        ['1','2','3','4','5','6','7','8','9','0'],
                        ['esc','home','space','end',
                         'pageup','pagedown',
                         'enter','tab','capslock']),
    (event, key) =>
    game.handle("binding.evoke", {
      key
    })
  )

  window.nuke = () => {
    game.nuked = true;
    store.remove('venus');
  }
  window.onbeforeunload = () =>{

    game.handle("core.savegame",{
      slot:game.state.get().player.name
    });

    if (!game.nuked)
      store.set('venus',game.state.get().toJS());
  };

  game.handle("mainmenu.show");


  if (!debug)
    return

  window.ROT = ROT;
  window.game = game;
  window.reducer = reducer;


}

export default setup
