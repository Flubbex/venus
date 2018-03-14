var handler = (reducer) =>
  (state,action, ...args) => {

    if (!action || !action.type)
      throw new Error("Invalid action being handled", action);

    var [handler, call] = action.type.split(".");

    if (!reducer[handler] || !reducer[handler][call])
      throw new Error("Unknown action being handled (" + action.type + ")");

    return reducer[handler][call]
           .apply(this, [state,action].concat(args) );


  };

export default handler
