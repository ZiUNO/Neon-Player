import {TONE, PLAYER} from "./Player";

export class Music {
    private name: String;
    private player: PLAYER;
    private tone: TONE;
    private syllable: Number;

    constructor(name: String, player: PLAYER, syllable: Number, tone: TONE) {
        this.name = name;
        this.player = player;
        this.tone = tone;
        this.syllable = syllable;
    }
}