"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Music_1 = require("./Music");
var Composer = /** @class */ (function () {
    function Composer(type, syllable, tone) {
        console.log("[FUNCTION]constructor:Composer");
        this._type = type;
        this._syllable = syllable;
        this._tone = tone;
    }
    Composer.prototype.compose = function (content) {
        console.log("[FUNCTION]compose:Composer");
        for (var sentence in content)
            console.assert(content[sentence].length === this._syllable, "[MISMATCH]length of content item-compose:Composer");
        var music = new Music_1.Music(this._type, this._syllable, this._tone);
        music.content = content;
        console.log("[COMPLETE]compose:Composer");
        return music;
    };
    return Composer;
}());
exports.Composer = Composer;
//# sourceMappingURL=Composer.js.map