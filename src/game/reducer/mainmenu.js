const menudata = {
  title:"VENUS",
body: [{key:0,  body:"[N]ew  Game"},
       {key:1,  body:"[L]oad Game"}]
};

export default {
  show:(state,action)=>{
    state.get()
         .set('overlay',menudata);
    state.get().core.set('state','mainmenu');
  },

  hide:(state,action)=>(
    {
      type:"menu.hide",
      nextstate:"game"
    }
  ),

  newgame:(state,action)=>(
    ["core.newgame","creator.show"]
  ),

  loadgame:(state,action)=>({
    type:"boundlist.show",
    title:"Load Game",
    state:"loadgame",
    body:Object.keys(state.get().savegame.container).length > 0
          ? Object.keys(state.get().savegame.container)
            .map((slot,i)=>{
              var index = "abcdefghijklmnoqrstuvwxyz"[i];
              var player  = state.get().savegame.container[slot].player;
              return index+" - "+player.name+", level "+player.xl
            })
          : ['No savegames :('],
    binds:Object.keys(state.get().savegame.container).length > 0
          ? Object.keys(state.get().savegame.container)
            .map((slot,i)=>{
              var index = "abcdefghijklmnoqrstuvwxyz"[i];
              return {
                key:index,
                action:{type:"core.loadgame",slot:slot}
              }
            })
          : null
  }),


}
