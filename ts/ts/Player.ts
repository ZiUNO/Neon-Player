import {Music} from "./Music";

export enum TONE {
    A, B, C, D,
}

export enum PLAYER {
    Kalimba, MusicBox,
}

export class Player {
    private _name: PLAYER;
    private _tone: TONE;
    private _syllable: Number;

    constructor(name: PLAYER, syllable: Number, tone: TONE) {
        console.log("[FUNCTION]constructor:Player");
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
    }

    play(music: Music): void {
        console.log("[FUNCTION]play:Player");
        if (music.player !== this._name) {
            console.error("[MISMATCH]播放器类型");
            return;
        }
        else if (music.tone !== this._tone) {
            console.error("[MISMATCH]播放器音调");
            return;
        }
        else if (music.syllable !== this._syllable) {
            console.error("[MISMATCH]播放器音节数");
            return;
        }
        console.log("[MATCH]播放器类型及音节数");
        //TODO 播放music
        console.log("[COMPLETE]音乐播放")
    }
}
