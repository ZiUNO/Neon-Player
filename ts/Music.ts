import {PLAYER, TONE} from "./Player";

export class Music {

    private _name: String;
    private _player: PLAYER;
    private _tone: TONE;
    private _syllable: Number;

    get syllable(): Number {
        return this._syllable;
    }

    get tone(): TONE {
        return this._tone;
    }

    get player(): PLAYER {
        return this._player;
    }

    constructor(name: String, player: PLAYER, syllable: Number, tone: TONE) {
        this._name = name;
        this._player = player;
        this._tone = tone;
        this._syllable = syllable;
    }
}