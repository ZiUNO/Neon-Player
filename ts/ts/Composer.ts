import {Type} from "./Type";
import {Tone} from "./Tone";
import {Music} from "./Music";

export class Composer {
    private readonly _type: Type;
    private readonly _tone: Tone;
    private readonly _syllable: number;

    constructor(type: Type, syllable: number, tone: Tone) {
        console.log("[FUNCTION]constructor:Composer");
        this._type = type;
        this._syllable = syllable;
        this._tone = tone;
    }

    public compose(content: number[][]): Music {
        console.log("[FUNCTION]compose:Composer");
        for (let sentence in content)
            console.assert(content[sentence].length === this._syllable, "[MISMATCH]length of content item-compose:Composer");
        let music = new Music(this._type, this._syllable, this._tone);
        music.content = content;
        console.log("[COMPLETE]compose:Composer");
        return music;
    }
}