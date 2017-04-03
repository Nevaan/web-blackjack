import {Card, Colours, RankValues} from "../card/Card";

export class CardSet {

    private _cards: Card[];

    get cards() {
        return this._cards;
    }

    constructor() {
        this._cards = [];
        for(let colour: string of Colours) {
            for (let r in RankValues){
                this._cards.push(new Card(colour, r));
            }
        }
    }

}