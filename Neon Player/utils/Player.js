"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name, syllable, tone) {
        console.log("[FUNCTION]constructor:Player");
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
    }
    Player.prototype.play = function (music) {
        console.log("[FUNCTION]play:Player");
        console.assert(music.player === this._name, "[MISMATCH]type-play:Player");
        console.assert(music.tone === this._tone, "[MISMATCH]tone-play:Player");
        console.assert(music.syllable === this._syllable, "[MISMATCH]syllable-play:Player");
        console.log("[MATCH]type&tone&syllable");
        // TODO 播放music
        console.log("[COMPLETE]play:Player");
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map