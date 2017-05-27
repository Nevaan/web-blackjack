define(["require", "exports"], function (require, exports) {
    var Token = (function () {
        function Token(_value) {
            this._value = _value;
        }
        ;
        Object.defineProperty(Token.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        return Token;
    })();
    exports.Token = Token;
});
//# sourceMappingURL=Token.js.map