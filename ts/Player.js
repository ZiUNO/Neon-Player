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
    function Player() {
    }
    Player.prototype.play = function (music) {
        console.log("test");
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map