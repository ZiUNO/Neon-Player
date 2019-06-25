"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Composer_1 = require("./Composer");
var Player_1 = require("./Player");
var Instrument = /** @class */ (function () {
    function Instrument(name, syllable, tone) {
        console.log("[FUNCTION]constructor:Instrument");
        this._name = name;
        this._syllable = syllable;
        this._tone = tone;
        this.composer = new Composer_1.Composer(name, syllable, tone);
        this.player = new Player_1.Player(name, syllable, tone);
    }
    Instrument.prototype.compose = function (musicName, rawMusic) {
        console.log("[FUNCTION]compose:Instrument");
        return this.composer.compose(musicName, this._name, this._syllable, this._tone, rawMusic);
    };
    Instrument.prototype.play = function (music) {
        console.log("[FUNCTION]play:Instrument");
        this.player.play(music);
    };
    return Instrument;
}());
exports.Instrument = Instrument;
//# sourceMappingURL=Instrument.js.map