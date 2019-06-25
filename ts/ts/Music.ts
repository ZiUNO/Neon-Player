import {Type} from "./Type";
import {Tone} from "./Tone";

export class MusicContent {
    // TODO 完成MusicContent类，用来存放音乐内容信息（大数组）
    private _content:Array<any>;
}

export class Music {
    private _name: String;
    private _player: Type;
    private _tone: Tone;
    private _syllable: Number;
    private _content: MusicContent = null;

    get syllable(): Number {
        return this._syllable;
    }

    get tone(): Tone {
        return this._tone;
    }

    get player(): Type {
        return this._player;
    }

    get content(): MusicContent {
        return this._content;
    }

    set content(value: MusicContent) {
        this._content = value;
    }

    constructor(name: String, player: Type, syllable: Number, tone: Tone) {
        console.log("[FUNCTION]constructor:Music");
        this._name = name;
        this._player = player;
        this._tone = tone;
        this._syllable = syllable;
    }

    save(path = "指定路径"):void{
        console.log("[FUNCTION]save:Music");
        if (this._content === null){
            console.error("[EMPTY]音乐内容-save:Music");
            return;
        }
        // TODO 将音乐内容以json文件存储在指定位置path
        console.log("[COMPLETE]save:Music")
    }
}