export default {
  show:(state,action)=>{
    state.get()
         .set('overlay',
          {
           title:action.title,
           body:action.body.map((body,key)=>({key,body}))
         })
         console.log(state.get().overlay)
    state.get().core.set('state',action.nextstate||'game_menu');
  },
  hide:(state,action)=>{
    state.get()
         .set('overlay',null)
    state.get().core.set('state',action.nextstate||'game');
  },
}
