"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Music_1 = require("./Music");
var Composer = /** @class */ (function () {
    function Composer(name, syllable, tone) {
        console.log("[FUNCTION]constructor:Composer");
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
    }
    Composer.prototype.compose = function (musicName, player, syllable, tone, rawMusic) {
        console.log("[FUNCTION]compose:Composer");
        var music = new Music_1.Music(musicName, this._name, this._syllable, this._tone);
        var musicContent = new Music_1.MusicContent();
        // TODO 根据原始音乐处理musicContent对象
        music.content = musicContent;
        return music;
    };
    return Composer;
}());
exports.Composer = Composer;
//# sourceMappingURL=Composer.js.map