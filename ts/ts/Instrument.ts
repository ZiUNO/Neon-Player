import {Composer} from "./Composer";
import {Music} from "./Music";
import {Type} from "./Type";
import {Tone} from "./Tone";
import {Player} from "./Player";

export class Instrument {
    private readonly _type: Type;
    private readonly _tone: Tone;
    private readonly _syllable: number;
    private composer: Composer;
    private player: Player;

    constructor(name: Type, syllable: number, tone: Tone) {
        console.log("[FUNCTION]constructor:Instrument");
        this._type = name;
        this._syllable = syllable;
        this._tone = tone;
        this.composer = new Composer(name, syllable, tone);
        this.player = new Player(name, syllable, tone);
    }

    public compose(content: number[][]): Music {
        console.log("[FUNCTION]compose:Instrument");
        return this.composer.compose(content);
    }

    public play(music: Music): void {
        console.log("[FUNCTION]play:Instrument");
        this.player.play(music);
    }
}