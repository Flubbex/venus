const assign = (key,action,context)=> ({
  type:"binding.assign",
  key,
  action,
  context
})

const evoke = (key)=> ({
  type:"binding.evoke",
  key
})

export {assign,evoke}
