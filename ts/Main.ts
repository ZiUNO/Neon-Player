import {Music} from "./Music";
import {PLAYER, Player, TONE} from "./Player";

var player = new Player(PLAYER.Kalimba, 18, TONE.B);
var music = new Music("天空之城", PLAYER.Kalimba, 17, TONE.B);

player.play(music);