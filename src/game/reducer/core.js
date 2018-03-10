export default  {
  start:(state,action)=>{
    
  },
  stop:(state,action)=>{
    
  },
  newgame:(state,action)=>{
    return Object.assign({
      type:"dungeon.generate",
      key:[0,1,0.5,0.25],
      size:[33,33]
    },action.map);
  
  },
  lock:(state,action)=>{
    
  },
  unlock:(state,action)=>{
    console.log("Unlocking",this);
    
  },
  loadgame:(state,action)=>{
    
  },
  go:(state,action)=>{
    
  }
}