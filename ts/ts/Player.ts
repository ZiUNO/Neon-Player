import {Music} from "./Music";
import {Type} from "./Type";
import {Tone} from "./Tone";


export class Player {
    private readonly _name: Type;
    private readonly _tone: Tone;
    private readonly _syllable: number;

    constructor(name: Type, syllable: number, tone:Tone) {
        console.log("[FUNCTION]constructor:Player");
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
    }

    public play(music: Music): void {
        console.log("[FUNCTION]play:Player");
        console.assert(music.player === this._name, "[MISMATCH]type-play:Player");
        console.assert(music.tone === this._tone, "[MISMATCH]tone-play:Player");
        console.assert(music.syllable === this._syllable, "[MISMATCH]syllable-play:Player");
        console.log("[MATCH]type&tone&syllable");
        // TODO 播放music
        console.log("[COMPLETE]play:Player");
    }
}
