define(["require", "exports", "../card/Card"], function (require, exports, Card_1) {
    var CardSet = (function () {
        function CardSet(_cards) {
            var _this = this;
            this._cards = _cards;
            _.forEach(Card_1.Colours, function (colour) {
                for (var rank in Card_1.RankValues) {
                    _this._cards.push(new Card_1.Card(colour, rank));
                }
            });
        }
        Object.defineProperty(CardSet.prototype, "cards", {
            get: function () {
                return this._cards;
            },
            enumerable: true,
            configurable: true
        });
        CardSet.prototype.drawCard = function () {
            var drawnCard = _.sample(this._cards);
            this._cards = _.pull(this._cards, drawnCard);
            return drawnCard;
        };
        return CardSet;
    })();
    exports.CardSet = CardSet;
});
//# sourceMappingURL=CardSet.js.map