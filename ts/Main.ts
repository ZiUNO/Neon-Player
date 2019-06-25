import {Instrument} from "./ts/Instrument";
import {Type} from "./ts/Type";
import {Tone} from "./ts/Tone";
import {Music} from "./ts/Music";


var ins = new Instrument(Type.Kalimba, 18, Tone.B);
var music = new Music("天空之城", Type.Kalimba, 17, Tone.B);
ins.play(music);
music.save();
// player.play(music);