import {default as race}        from './race';
import {default as background}  from './background';

export default {
  main:{
  title:"VENUS",
  body: ["[N]ew  Game",
         "[L]oad Game"],
 state:"mainmenu",
   binds: [{
       key: "n",
       action: "mainmenu.newgame"
     },
     {
       key: "l",
       action: "mainmenu.loadgame"
     }
   ]
  },
  creator:[
    {
      title: "Pick a race",
      body: Object.keys(race).map((entry,i)=>
                              'abcdefghijklmnoqrstuvwxyz'[i]+
                              ' - '+
                              race[entry].name
                            ),
      binds: Object.keys(race).map((entry,i) => {
        var name = race[entry].name;
        var key = 'abcdefghijklmnoqrstuvwxyz'[i];
        return {action:{
                        type:"creator.pickRace",
                        race:name
                       },
                key};
      })
    },
  {
    title: "Pick a background",
    body: Object.keys(background).map((entry,i)=>
                            'abcdefghijklmnoqrstuvwxyz'[i]+
                            ' - '+
                            background[entry].name
                          ),
    binds: Object.keys(background).map((entry,i) => {
      var name = background[entry].name;
      var key = 'abcdefghijklmnoqrstuvwxyz'[i];
      return {action:{
                      type:"creator.pickBackground",
                      background:name
                     },
              key};
    })
  }
]
}
