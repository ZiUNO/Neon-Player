import {Type} from "./Type";
import {Tone} from "./Tone";
import {Music, MusicContent} from "./Music";


export class Composer {
    private _name: Type;
    private _tone: Tone;
    private _syllable: Number;

    constructor(name: Type, syllable: Number, tone: Tone) {
        console.log("[FUNCTION]constructor:Composer");
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
    }

    compose(musicName: String, player:Type, syllable:Number, tone:Tone, rawMusic: String): Music {
        console.log("[FUNCTION]compose:Composer");
        let music = new Music(musicName, this._name, this._syllable, this._tone);
        let musicContent = new MusicContent();
        // TODO 根据原始音乐处理musicContent对象
        music.content = musicContent;
        return music;
    }
}