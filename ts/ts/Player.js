"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TONE;
(function (TONE) {
    TONE[TONE["A"] = 0] = "A";
    TONE[TONE["B"] = 1] = "B";
    TONE[TONE["C"] = 2] = "C";
    TONE[TONE["D"] = 3] = "D";
})(TONE = exports.TONE || (exports.TONE = {}));
var PLAYER;
(function (PLAYER) {
    PLAYER[PLAYER["Kalimba"] = 0] = "Kalimba";
    PLAYER[PLAYER["MusicBox"] = 1] = "MusicBox";
})(PLAYER = exports.PLAYER || (exports.PLAYER = {}));
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
            console.error("[MISMATCH]播放器类型");
            return;
        }
        else if (music.tone !== this._tone) {
            console.error("[MISMATCH]播放器音调");
            return;
        }
        else if (music.syllable !== this._syllable) {
            console.error("[MISMATCH]播放器音节数");
            return;
        }
        console.log("[MATCH]播放器类型及音节数");
        //TODO 播放music
        console.log("[COMPLETE]音乐播放");
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map