export default {
  log:(state,action)=>{
    state.get()
          .console.messages.unshift({
                              time:state.get().core.time,
                              id:Date.now(),
                              body:action.body})
                            }

}
