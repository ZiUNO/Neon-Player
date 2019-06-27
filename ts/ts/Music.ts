import {Type} from "./Type";
import {Tone} from "./Tone";

export class Music {
    private _name: String = null;
    private readonly _player: Type;
    private readonly _tone: Tone;
    private readonly _syllable: number;
    private _content: Array<Array<Number>> = null;

    get syllable(): Number {
        return this._syllable;
    }

    get tone(): Tone {
        return this._tone;
    }

    get player(): Type {
        return this._player;
    }

    set name(value: String) {
        this._name = value;
    }

    get name(): String {
        return this._name;
    }

    get content(): Array<Array<Number>> {
        return this._content;
    }

    set content(value: Array<Array<Number>>) {
        this._content = value;
    }

    constructor(player: Type, syllable: number, tone: Tone) {
        console.log("[FUNCTION]constructor:Music");
        this._player = player;
        this._tone = tone;
        this._syllable = syllable;
    }

    public save(path = "指定路径"): void {
        console.log("[FUNCTION]save:Music");
        this._name = this._name === null ? "未命名" : this._name;
        // TODO 将音乐内容以json文件存储在指定位置path
        console.log("[COMPLETE]save:Music")
    }
    public static load(musicFile): Music{
        let music = new Music(Type.Kalimba, 17, Tone.B);
        // TODO 读取指定位置的json音乐文件
        return music;
    }
}