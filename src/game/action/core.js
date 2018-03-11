const newgame = (race,background)=> ({
  type:"core.newgame",
  race,
  background
})

const loadgame = (slot)=> ({
  type:"core.loadgame",
  slot
})

const savegame = (slot)=> ({
  type:"core.savegame",
  slot
})
const tick = ()=> ({
  type:"core.tick"
})

const start = ()=> ({
  type:"core.start"
})

const stop = ()=> ({
  type:"core.stop"
})

const error = (message)=> ({
  type:"core.error",
  message
})

const go = (state)=> ({
  type:"core.go",
  state
})

export {newgame,loadgame,savegame,error,start,stop,go}
