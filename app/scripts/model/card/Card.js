"use strict";
exports.Colours = [
    'HEARTS',
    'DIAMONDS',
    'CLUBS',
    'SPADES'
];
exports.RankValues = {
    "ACE": NaN,
    "KING": 10,
    "QUEEN": 10,
    "JACK": 10,
    "TEN": 10,
    "NINE": 9,
    "EIGHT": 8,
    "SEVEN": 7,
    "SIX": 6,
    "FIVE": 5,
    "FOUR": 4,
    "THREE": 3,
    "TWO": 2
};
var Card = (function () {
    function Card(_colour, _rank) {
        this._colour = _colour;
        this._rank = _rank;
    }
    Object.defineProperty(Card.prototype, "colour", {
        get: function () {
            return this._colour;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: true,
        configurable: true
    });
    Card.prototype.getCardValue = function () {
        return exports.RankValues[this.rank];
    };
    return Card;
}());
exports.Card = Card;
