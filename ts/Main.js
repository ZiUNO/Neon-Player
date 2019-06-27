"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instrument_1 = require("./ts/Instrument");
var Type_1 = require("./ts/Type");
var Tone_1 = require("./ts/Tone");
// 初始化原始音乐数据
var sentence1 = [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0];
var sentence2 = [0, 1, 1, 1, 1, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 1, 0];
var raw_content = [sentence1, sentence2];
for (var i in raw_content) {
    console.log(raw_content[i]);
}
var ins = new Instrument_1.Instrument(Type_1.Type.Kalimba, 17, Tone_1.Tone.B);
var music = ins.compose(raw_content);
music.name = "天空之城";
ins.play(music);
music.save("path");
//# sourceMappingURL=Main.js.map