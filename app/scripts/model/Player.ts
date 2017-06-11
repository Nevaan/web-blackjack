import {Card} from "./Card";

import {PlayerInterface} from "./PlayerInterface";

export class Player extends PlayerInterface{
    constructor(_cards: Card[], private _balance: number) {
        super(_cards);
    }

    get balance() {
        return this._balance;
    }

    set balance(amount: number) {
        this._balance = amount;
    }

}