import Mousetrap from 'mousetrap'

function Player(freezer){
  
  var movebinds = {"up":0,"down":1,"left":2,"right":3};
  
  Mousetrap.bind(Object.keys(movebinds),(event,key)=>{
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
                        })
    
  
}

export default Player