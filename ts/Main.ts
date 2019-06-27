import {Instrument} from "./ts/Instrument";
import {Type} from "./ts/Type";
import {Tone} from "./ts/Tone";
// 初始化原始音乐数据
var sentence1 = [0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 0, 0];
var sentence2 = [0, 1, 1, 1, 1, 0, 0, 1, 2, 3, 4, 0, 0, 0, 0, 1, 0];
var raw_content = [sentence1, sentence2];
for (let i in raw_content){
    console.log(raw_content[i]);
}
var ins = new Instrument(Type.Kalimba, 17, Tone.B);
var music = ins.compose(raw_content);
music.name = "天空之城";
ins.play(music);
music.save("path");