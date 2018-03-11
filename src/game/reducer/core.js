export default  {
  start:(state,action)=>{

  },
  stop:(state,action)=>{

  },
  newgame:(state,action)=>{
    state.get().set('overlay',false);
    state.get().core.set('state','game');
    state.get().console.messages.push({
                                      id:Date.now(),
                                      time:state.get().core.time,
                                      body:"You enter the dungeon of Venus."});

    return Object.assign({
      type:"dungeon.generate",
      key:[0,1,0.5,0.25],
      size:[33,33]
    },action.map)

  },
  loadgame:(state,action)=>{
    state.set(state.get().savegame.container[action.slot])
  },
  savegame:(state,action)=>{
    state.get().savegame.container.set(action.slot,state.get())
  },
  go:(state,action)=>(
    state.get().core.set('state',action.state)
  )
}
