var modifier = [[0,-1],[0,1],[-1,0],[1,0]];

export default {
  move:(state,action)=>{

  var enemy = state.get()
              .map
              .enemy[action.entityid] ||
              state.get()
              .player,
              
      pos = enemy.position,

      newpos = pos.map((e,i)=>
                            e+modifier[action.direction][i] );

  
  enemy.set({position:newpos});
  return {
    type:"core.unlock",
    duration:1
  }
    
  },
  eat:(state,action)=>{
    
  },
  quaff:(state,action)=>{
    
  },
  talk:(state,action)=>{
    
  },
  attack:(state,action)=>{
    
  },
  hurt:(state,action)=>{
    
  },
  die:(state,action)=>{
    
  }
}