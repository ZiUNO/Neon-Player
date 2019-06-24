"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Music = /** @class */ (function () {
    function Music(name, player, syllable, tone) {
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
    return Music;
}());
exports.Music = Music;
//# sourceMappingURL=Music.js.map