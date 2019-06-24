import {Music} from "./Music";
import {Player, PLAYER, TONE} from "./Player";

var player = new Player();
var music = new Music("天空之城", PLAYER.Kalimba, 17, TONE.B);

player.play(music);