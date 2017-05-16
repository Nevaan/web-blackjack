module WebBlackjack.Model {
    export class Token {
        constructor(private _value: TokenValue) {
        };

        get value() {
            return this._value;
        }

    }
}