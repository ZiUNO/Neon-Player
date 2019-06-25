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
        if (music.player !== this._name) {
            console.error("[MISMATCH]播放器类型-play:Player");
            return;
        }
        else if (music.tone !== this._tone) {
            console.error("[MISMATCH]播放器音调-play:Player");
            return;
        }
        else if (music.syllable !== this._syllable) {
            console.error("[MISMATCH]播放器音节数-play:Player");
            return;
        }
        console.log("[MATCH]type&tone&syllable");
        // TODO 播放music
        console.log("[COMPLETE]play:Player");
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map