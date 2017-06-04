import {Card} from "./Card";
/**
 * Created by pawel on 04.06.2017.
 */


export class Dealer {
    constructor(private _cards: Card[]){}

    get cards() {
        return this._cards;
    }
}