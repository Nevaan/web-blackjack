export var TokenValues: number[] = [
    1,
    5,
    10,
    25,
    50,
    100,
    500
]


export class Token {
    constructor(private _value: number) {
        if(_value == null) {
            throw "Undefined token value";
        }
    };

    get value() {
        return this._value;
    }

}