import {Card} from "./Card";
import {Token} from "./Token";
export class Player {

    constructor(private _tokens: Token[], private _cards: Card[]) {
    }

    get tokens() {
        return this._tokens;
    }

    get cards() {
        return this._cards;
    }

    public testMethod(a: number) {
        return a;
    }
}