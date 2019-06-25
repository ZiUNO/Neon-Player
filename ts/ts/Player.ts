import {Music} from "./Music";
import {Type} from "./Type";
import {Tone} from "./Tone";


export class Player {
    private _name: Type;
    private _tone: Tone;
    private _syllable: Number;

    constructor(name: Type, syllable: Number, tone:Tone) {
        console.log("[FUNCTION]constructor:Player");
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
    }

    play(music: Music): void {
        console.log("[FUNCTION]play:Player");
        if (music.player !== this._name) {
            console.error("[MISMATCH]播放器类型-play:Player");
            return;
        }
        else if (music.tone !== this._tone) {
            console.error("[MISMATCH]播放器音调-play:Player");
            return;
        }
        else if (music.syllable !== this._syllable) {
            console.error("[MISMATCH]播放器音节数-play:Player");
            return;
        }
        console.log("[MATCH]type&tone&syllable");
        // TODO 播放music
        console.log("[COMPLETE]play:Player")
    }
}
