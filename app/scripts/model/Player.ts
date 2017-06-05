import {Card} from "./Card";
import * as _ from "lodash";

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

    addCard(card: Card) {
        this._cards = _.concat(this._cards, card);
    }

}