export default {
  start: (state, action) => {

  },
  stop: (state, action) => {

  },
  async: (state, action, container) => {
    if (action.lock)
    {
      state.get().core.set('locked',true);
      action.set.map((a,i)=>window.setTimeout(
        ()=>{
            container.handle(a)
            if (action.lock && i===action.set.length-1)
              state.get().core.set('locked',false);
            }
      ));
    }
    else
      action.set.map((a)=>window.setTimeout(
        ()=>container.handle(a)
      ));
  },
  series: (state, action, container) => {
    action.set.map(container.handle);
  },
  tick: (state, action) => {
    state.get().core.set('time',
      state.get().core.time + action.duration);

    var enemies = Object.keys(state.get().map.enemy);
    if (enemies.length > 0)
      return ["core.async", {
        lock:true,
        set: enemies.map((entityid) => ({
          type: "entity.tick",
          duration: action.duration,
          entityid
        }))
      }]
  },
  newgame: (state, action, container) => {
    state.get().console.messages.push({
      id: Date.now(),
      time: state.get().core.time,
      body: "You enter the dungeon of Venus."
    });

    return ["core.series",
      {
        set: ["dungeon.generate", "mainmenu.hide"]
      }
    ]

  },
  loadgame: (state, action) => {
    state.set(state.get().savegame.container[action.slot])
    return ["core.series", {
      set: [{
          type: "core.savegame",
          slot: action.slot
        },
        "mainmenu.hide"
      ]
    }]
  },
  savegame: (state, action) => {
    state.get().savegame.container.set(action.slot, state.get().toJS())
  },
  go: (state, action) => (
    state.get().core.set('state', action.state)
  )
}
