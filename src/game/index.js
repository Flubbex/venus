import ROT          from 'rot-js';
import Mousetrap    from 'mousetrap';
import store        from 'store';
import Freezer      from 'freezer-js';

import initialstate from './initialstate';

import * as model   from './model';
import * as reducer from './reducer';
import * as util    from './util';

import handler      from './handler';

window.onerror = () => store.remove('venus')

var state  = new Freezer(store.get('venus') || initialstate),
    game   = {util,model},
    handle = handler(reducer);

window.nuke = () => {
  game.nuked = true;
  store.remove('venus');
}

Mousetrap.addKeycodes({
  12: 'numpad5'
});

var setup = (ui, debug = false) => {

  game.nuked = game.nuked || false;

  game.handle = (_action,detail) =>{
    var action;

    if ( typeof(_action) === typeof(" ") )
      action = Object.assign({
        type: _action
      }, detail);
    else if (Array.isArray(_action))
      action = Object.assign({
        type: _action[0]
      }, _action[1]);

    action = action || _action;

    var next = handle(state,action,game),
        nextaction = Array.isArray(next)
                            ? next.shift()
                            : next,
        nextdetail = Array.isArray(next)
                            ? next.shift()
                            : null;

    //console.log(action,nextaction)

    if (nextaction)
      game.handle(nextaction,
                  nextdetail);
  }

  state.on('update', ui.render);

  Mousetrap.bind("abcdefghijklmnoqrstuvwxyz"
                .split('')
                .concat(['up','down','left','right'],
                        ['.',',','/','?','>','<'],
                        ['1','2','3','4','5','6','7','8','9','0'],
                        ['esc','home','space','end',
                         'pageup','pagedown',
                         'enter','tab','capslock']),
    (event, key) =>{
      game.handle("binding.evoke", {
        key
      });
      event.preventDefault();
    }
  )

  window.onbeforeunload = () =>{

    game.handle("core.savegame",{
      slot:state.get().player.name
    });

    if (!game.nuked)
      store.set('venus',state.get().toJS());
  };

  ui.setup(state.get());

  game.handle("mainmenu.show");

  if (!debug)
    return

  window.ROT     = ROT;
  window.game    = game;
  window.state   = state;
  window.reducer = reducer;

}

export default setup
