"use strict";
var CardSet_1 = require("../../../scripts/model/set/CardSet");
var Card_1 = require("../../../scripts/model/card/Card");
describe("CardSet test", function () {
    var cardSet;
    beforeEach(function () {
        cardSet = new CardSet_1.CardSet();
    });
    it("should create full card set", function () {
        expect(cardSet.cards.length).toBe(52);
    });
    it("should contain 13 cards of each colour", function () {
        var clubs = cardSet.cards.filter(function (card) { return card.colour === "CLUBS"; });
        var diamonds = cardSet.cards.filter(function (card) { return card.colour === "DIAMONDS"; });
        var spades = cardSet.cards.filter(function (card) { return card.colour === "SPADES"; });
        var hearts = cardSet.cards.filter(function (card) { return card.colour === "HEARTS"; });
        expect(clubs.length).toEqual(13);
        expect(diamonds.length).toEqual(13);
        expect(spades.length).toEqual(13);
        expect(hearts.length).toEqual(13);
    });
    it("should contain 4 cards of each rank", function () {
        var rankSet;
        var _loop_1 = function(rank) {
            rankSet = cardSet.cards.filter(function (card) { return card.rank == rank; });
            expect(rankSet.length).toEqual(4);
        };
        for (var rank in Card_1.RankValues) {
            _loop_1(rank);
        }
    });
});
