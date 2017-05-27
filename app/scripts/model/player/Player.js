define(["require", "exports"], function (require, exports) {
    //import {Token} from "../token/Token";
    //import {Card} from "../card/Card";
    var WebBlackjack;
    (function (WebBlackjack) {
        var Player = (function () {
            function Player() {
            }
            ;
            //constructor( private _tokens: Token[], private _cards: Card[]) {}
            //get tokens() { return this._tokens;}
            //get cards() { return this._cards;}
            Player.prototype.testMethod = function (a) {
                return a;
            };
            return Player;
        })();
        WebBlackjack.Player = Player;
    })(WebBlackjack = exports.WebBlackjack || (exports.WebBlackjack = {}));
});
//# sourceMappingURL=Player.js.map