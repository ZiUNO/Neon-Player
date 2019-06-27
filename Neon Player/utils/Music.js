"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("./Type");
var Tone_1 = require("./Tone");
var Music = /** @class */ (function () {
    function Music(player, syllable, tone) {
        this._name = null;
        this._content = null;
        console.log("[FUNCTION]constructor:Music");
        this._player = player;
        this._tone = tone;
        this._syllable = syllable;
    }
    Object.defineProperty(Music.prototype, "syllable", {
        get: function () {
            return this._syllable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Music.prototype, "tone", {
        get: function () {
            return this._tone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Music.prototype, "player", {
        get: function () {
            return this._player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Music.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Music.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Music.prototype.save = function (path) {
        if (path === void 0) { path = "指定路径"; }
        console.log("[FUNCTION]save:Music");
        this._name = this._name === null ? "未命名" : this._name;
        // TODO 将音乐内容以json文件存储在指定位置path
        console.log("[COMPLETE]save:Music");
    };
    Music.load = function (musicFile) {
        var music = new Music(Type_1.Type.Kalimba, 17, Tone_1.Tone.B);
        // TODO 读取指定位置的json音乐文件
        return music;
    };
    return Music;
}());
exports.Music = Music;
//# sourceMappingURL=Music.js.map