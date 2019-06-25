import {Composer} from "./Composer";
import {Music} from "./Music";
import {Type} from "./Type";
import {Tone} from "./Tone";
import {Player} from "./Player";

export class Instrument {
    private _name: Type;
    private _tone: Tone;
    private _syllable: Number;
    private composer: Composer;
    private player: Player;

    constructor(name: Type, syllable: Number, tone: Tone) {
        console.log("[FUNCTION]constructor:Instrument");
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
        this.composer = new Composer(name, syllable, tone);
        this.player = new Player(name, syllable, tone);
    }

    compose(musicName: String, rawMusic: String): Music {
        console.log("[FUNCTION]compose:Instrument");
        return this.composer.compose(musicName, this._name, this._syllable, this._tone, rawMusic);
    }

    play(music: Music): void {
        console.log("[FUNCTION]play:Instrument");
        this.player.play(music);
    }
}