"use strict";
var Card_1 = require("../card/Card");
var CardSet = (function () {
    function CardSet() {
        this._cards = [];
        for (var _i = 0, Colours_1 = Card_1.Colours; _i < Colours_1.length; _i++) {
            var colour = Colours_1[_i];
            for (var r in Card_1.RankValues) {
                this._cards.push(new Card_1.Card(colour, r));
            }
        }
    }
    Object.defineProperty(CardSet.prototype, "cards", {
        get: function () {
            return this._cards;
        },
        enumerable: true,
        configurable: true
    });
    return CardSet;
}());
exports.CardSet = CardSet;
