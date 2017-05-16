import {Token, TokenValue} from "../model/token/Token";

export class Util {
    constructor() {};

    public convertAmountToTokens(amount: number): Token[] {
        let tokenAmount = TokenValue.length;

        while(tokenAmount > 0) {

            tokenAmount--;
        }

        return [];
    }

    public checkout(a:number, b:number) {
        return a/b;
    }

}