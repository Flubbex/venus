import Mousetrap from 'mousetrap'

function Player(game){
  
  var freezer   = game.state,
      engine    = game.engine,
      log       = game.log,
      schedule  = game.schedule;
  
  var movebinds = {"up":0,"down":1,"left":2,"right":3};
  
  var wait = () => {
    schedule.setDuration(1);
    engine.unlock();
    log("You wait around a while.");
    return false;
  }
  
  var test = () => {
    log("Test");
    return false;
  }
  
  var move = (key) => {
        var pos = freezer.get()
                .player
                .position,

        modifier = [[0,-1],[0,1],[-1,0],[1,0]],
        newpos = pos.map((e,i)=>
                              e+modifier[
                                movebinds[key]
                                  ][i] );

        freezer.get()
        .player.set({position:newpos})
        schedule.setDuration(1)
        engine.unlock();
        return false;
    
  }
  
  var actor =  {
      key: "player",
      act: function() {
           freezer.get().set('time',schedule.getTime());
           engine.lock();
      },
      getSpeed: function() {
        return 50
      }
  }
  
  
  var actionbinds = {"5":wait,"i":test};
  
  schedule.add(actor,true);
  
  var handle = (action) => {
    switch (action.type){
      case "player.move":
        move(action.direction)
        return true;
      
      case "player.wait":
        wait(action.repeat)
        return true;
        
      default:
        return false;
    }
  }
  
  Mousetrap.bind(Object.keys(movebinds),(event,key)=>move(key))
  Mousetrap.bind(Object.keys(actionbinds),(event,key)=>actionbinds[key]())
  
  
  //action API
  return {
    move,
    handle
  }
}

export default Player