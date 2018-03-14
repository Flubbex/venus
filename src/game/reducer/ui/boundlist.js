export default {
  show: (state, action) => (
    ["core.series",
    {set:[{
      type: "menu.show",
      title: action.title,
      body: action.body,
      nextstate: action.state
    }].concat(
      action.binds
      ? action.binds.map((bind) => ({
        type: "binding.assign",
        context: bind.context||action.state,
        key: bind.key,
        action: bind.action
      }))
      : []
    )}]
    ),
    hide: (state, action) => ({
      type: "menu.hide",
      nextstate: "game"
    }),
  }
