export default {
  assign:(state,action)=>(
    state.get().binding.container[action.context]
            .set(action.key,action.action)
  ),
  evoke:(state,action)=>({type:state.get()
          .binding
          .container[state.get().core.state]
          ? state.get()
            .binding
            .container[state.get().core.state][action.key]
          : null
  })
}