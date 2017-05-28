export var TokenValues: number[] = [
    1,
    5,
    10,
    20,
    50,
    100,
    500
]

export class TokenValue {

    constructor(val: number) {

    }

}

export class Token {
    constructor(private _value: TokenValue) {
    };

    get value() {
        return this._value;
    }

}