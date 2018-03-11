export default {
  assign: (state, action) => {
    state.get().binding.container[action.context]
    ?  state.get().binding.container[action.context]
      .set(action.key, action.action)
    :
      state.get().binding.container.set(action.context,
      {})[action.context].set(action.key,action.action)
  },
  evoke: (state, action) => (state.get()
    .binding
    .container[state.get().core.state] &&
    state.get()
    .binding
    .container[state.get().core.state][action.key]
    ? state.get()
        .binding
        .container[state.get().core.state][action.key]
    : null
   )
}
