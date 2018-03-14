import {menu} from '../../data';

export default {
  show:(state,action)=>(
    Object.assign({
      type:"boundlist.show",
    },menu.main)
  ),

  hide:(state,action)=>(
    {
      type:"menu.hide",
      nextstate:"game"
    }
  ),

  newgame:(state,action)=>(
    {type:"core.series",set:["core.newgame","creator.show"]}
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
