export default  {
  start:(state,action)=>{

  },
  stop:(state,action)=>{

  },
  tick:(state,action)=>(
    Object.keys(state.get().map.enemy).length > 0
    ? Object.keys(state.get().map.enemy)
    .map((entityid)=>({type:"entity.tick",entityid}))
    : null
  ),
  newgame:(state,action)=>{
    state.get().console.messages.push({
                                      id:Date.now(),
                                      time:state.get().core.time,
                                      body:"You enter the dungeon of Venus."});

    return [{
      type:"dungeon.generate",
    },{
      type:"mainmenu.hide"
    }]

  },
  loadgame:(state,action)=>{
    state.set(state.get().savegame.container[action.slot])
    return {type:"core.savegame",slot:action.slot}
  },
  savegame:(state,action)=>{
    state.get().savegame.container.set(action.slot,state.get().toJS())
  },
  go:(state,action)=>(
    state.get().core.set('state',action.state)
  )
}
