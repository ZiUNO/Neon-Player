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
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
    }
    Player.prototype.play = function (music) {
        if (music.player !== this._name) {
            console.error("[FAIL]播放器类型不符");
            return;
        }
        else if (music.tone !== this._tone) {
            console.error("[FAIL]播放器音调不符");
            return;
        }
        else if (music.syllable !== this._syllable) {
            console.error("[FAIL]播放器音节数不符");
            return;
        }
        console.log("[SUCCESS]匹配播放器类型及音节数");
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map