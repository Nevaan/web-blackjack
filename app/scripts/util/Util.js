define(["require", "exports", "../model/token/TokenValue"], function (require, exports, TokenValue_1) {
    var Util = (function () {
        function Util() {
        }
        ;
        Util.prototype.convertAmountToTokens = function (amount) {
            var tokenAmount = TokenValue_1.TokenValue.length;
            while (tokenAmount > 0) {
                tokenAmount--;
            }
            return [];
        };
        Util.prototype.checkout = function (a, b) {
            return a / b;
        };
        return Util;
    })();
    exports.Util = Util;
});
//# sourceMappingURL=Util.js.map