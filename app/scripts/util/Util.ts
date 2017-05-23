import {Token} from "../model/token/Token";
import {TokenValue} from "../model/token/TokenValue";

export class Util {
    constructor() {
    };

    public convertAmountToTokens(amount: number): Token[] {
        let tokenAmount = TokenValue.length;

        while (tokenAmount > 0) {
            tokenAmount--;
        }
        return [];
    }

    public checkout(a: number, b: number) {
        return a / b;
    }
}