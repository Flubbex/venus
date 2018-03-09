const newgame = (race,background)=> ({
  type:"core.newgame",
  race,
  background
})

const start = ()=> ({
  type:"core.start"
})

const stop = ()=> ({
  type:"core.stop"
})

const lock = (duration) => ({
  type:"core.lock",
  duration
})

const unlock = (delay) => ({
  type:"core.unlock",
  delay
})

const go = (frame)=> ({
  type:"core.stop",
  frame
})

export {newgame,start,stop}