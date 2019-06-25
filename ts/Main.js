"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instrument_1 = require("./ts/Instrument");
var Type_1 = require("./ts/Type");
var Tone_1 = require("./ts/Tone");
var Music_1 = require("./ts/Music");
var ins = new Instrument_1.Instrument(Type_1.Type.Kalimba, 18, Tone_1.Tone.B);
var music = new Music_1.Music("天空之城", Type_1.Type.Kalimba, 17, Tone_1.Tone.B);
ins.play(music);
music.save();
// player.play(music);
//# sourceMappingURL=Main.js.map