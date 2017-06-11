import {Card} from "./Card";
import * as _ from "lodash";

export class PlayerInterface {
    constructor(private _cards: Card[]){}

    set cards(cards: Card[]) {
        this._cards = cards;
    }

    get cards() {
        return this._cards;
    }

    addCard(card: Card) {
        this._cards = _.concat(this._cards, card);
    }
}