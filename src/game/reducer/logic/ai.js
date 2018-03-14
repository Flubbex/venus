export default {
  tick: (state, action) => (
    state.get().map.enemy.map((enemy)=>({
      type:"ai.update",
      enemy
    }))
  )
}
