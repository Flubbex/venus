const generate = (key,size,style,config)=> ({
  type:"dungeon.generate",
  key,
  size,
  style,
  config
})

const spawn = (entityid,data)=> ({
  type:"dungeon.spawn",
  entityid,
  data
})
export {generate,spawn}
