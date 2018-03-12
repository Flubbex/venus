const initialstate = {
  core: {
    state: "initialize",
    time: 0,
    history: [],
  },
  overlay: null,
  console: {
    messages: []
  },
  binding: {
    container: {
      "mainmenu": {
        "n": "mainmenu.newgame",
        "l": "mainmenu.loadgame"
      },
      "loadgame":{
        "esc":"mainmenu.show"
      },
      "game_menu": {
        "esc": "menu.hide"
      },
      "game": {
        "i": "player.inventory",
        "e": "player.eat",
        "d": "player.drop",
        "f": "player.fire",
        "w": "player.wield",
        ">": "player.descend",
        "<": "player.ascend",
        "up": {
          type: "player.move",
          direction: 0
        },
        "down": {
          type: "player.move",
          direction: 1
        },
        "left": {
          type: "player.move",
          direction: 2
        },
        "right": {
          type: "player.move",
          direction: 3
        },
        "home": {
          type: "player.move",
          direction: 4
        },
        "pageup": {
          type: "player.move",
          direction: 5
        },
        "end": {
          type: "player.move",
          direction: 6
        },
        "pagedown": {
          type: "player.move",
          direction: 7
        }
      }
    }
  },
  map: null,
  dungeon: {
    level: 0,
    mapset: []
  },
  player: {
    name: "Player",
    position: [0, 0],
    health: [10, 10],
    mana: [3, 3],
    inventory: [{
      name: "Ration",
      tile: "r"
    }],
    attributes: {
      strength: 4,
      dexterity: 4,
      intelligence: 4
    },
    xl: 1,
    ac: 3,
    ev: 3,
    movespeed: 1,
    exp: 0
  },
  savegame: {
    container: {}
  }
};

export default initialstate;
