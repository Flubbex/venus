const menudata = [{
  title: "Pick a background",
  body: ["h - Human",
    "o - Ogre",
    "t - Troll",
    "e - Elf"
  ],
  binds: ['h', 'o', 't', 'e'].map((key) => ({
    action:{type:"creator.pickBackground",
            background: {
                    'h': 'Human',
                    't': 'Troll',
                    'e': 'Elf',
                    'o': 'Ogre'
                  }[key]
           },
    key
  }))
}, {
  title: "Pick a class",
  body: ["f - Fighter",
    "m - Mage",
    "r - Rogue",
    "a - Adventurer"
  ],
  binds: ['r', 'a', 'm', 'f'].map((key) => ({
    action: { type:"creator.pickClass",
              classname: {
                'f': 'Fighter',
                'm': 'Mage',
                'r': 'Rogue',
                'a': 'Adventurer'
              }[key]
          },
    key
  }))
}]

export default {
  show: (state, action) => (
    Object.assign({
      type: "boundlist.show",
      state: "creator_"+(action.step||0),
    }, menudata[action.step || 0])
  ),
  pickBackground: (state, action) => (
    state.get().player.set('background', action.background) &&
    {
      type: "creator.show",
      step: 1
    }
  ),
  pickClass: (state, action) => (
    state.get().player.set('classname', action.classname) &&
    "creator.hide"
  ),
  hide: (state, action) => ({
    type: "menu.hide",
    nextstate: "game"
  }),
}
