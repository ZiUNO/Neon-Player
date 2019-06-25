"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MusicContent = /** @class */ (function () {
    function MusicContent() {
    }
    return MusicContent;
}());
exports.MusicContent = MusicContent;
var Music = /** @class */ (function () {
    function Music(name, player, syllable, tone) {
        this._content = null;
        console.log("[FUNCTION]constructor:Music");
        this._name = name;
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
        if (this._content === null) {
            console.error("[EMPTY]音乐内容-save:Music");
            return;
        }
        // TODO 将音乐内容以json文件存储在指定位置path
        console.log("[COMPLETE]save:Music");
    };
    return Music;
}());
exports.Music = Music;
//# sourceMappingURL=Music.js.map