import {RankValues, Colours, Card} from "./Card";
import * as _ from "lodash";

export class CardSet {
    private _cards: Card[];
    constructor() {
        this._cards = [];
        _.forEach(Colours, (colour) => {
            for (let rank in RankValues) {
                this._cards.push(new Card(colour, rank));
            }
        })
    }

    get cards() {
        return this._cards;
    }

    public drawCard() {
        let drawnCard = _.sample(this._cards);
        this._cards = _.pull(this._cards, drawnCard);
        return drawnCard;
    }
}

