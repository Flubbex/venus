export default  {
  start:(state,action)=>{
    
  },
  stop:(state,action)=>{
    
  },
  newgame:(state,action)=>{
    return {
      type:"dungeon.generate",
      key:[0,1,0.5,0.25],
      size:[Math.floor(Math.random()*16)+8,
            Math.floor(Math.random()*16)+8],
      terrain:[],
      enemy:{},
      item:[]
    }
  
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