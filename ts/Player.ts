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
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
    }

    play(music: Music): void {
        if (music.player !== this._name) {
            console.error("[FAIL]播放器类型不符");
            return;
        }
        else if (music.tone !== this._tone) {
            console.error("[FAIL]播放器音调不符");
            return;
        }
        else if (music.syllable !== this._syllable) {
            console.error("[FAIL]播放器音节数不符");
            return;
        }
        console.log("[SUCCESS]匹配播放器类型及音节数");
    }
}
