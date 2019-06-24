"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Music_1 = require("./Music");
var Player_1 = require("./Player");
var player = new Player_1.Player();
var music = new Music_1.Music("天空之城", Player_1.PLAYER.Kalimba, 17, Player_1.TONE.B);
player.play(music);
//# sourceMappingURL=Main.js.map