import {Card} from "./Card";
export class Player {
    constructor(private _cards: Card[], private _balance: number) {
    }

    get cards() {
        return this._cards;
    }

    get balance() {
        return this._balance;
    }

    set balance(amount: number) {
        this._balance = amount;
    }

}