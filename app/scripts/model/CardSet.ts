import {RankValues, Colours, Card} from "./Card";
import * as _ from "lodash";

export class CardSet {
    private _cards: Card[];
    constructor() {
        this._cards = [];
        this.fillCardsSet();
    }

    get cards() {
        return this._cards;
    }

    private fillCardsSet() {
        _.forEach(Colours, (colour) => {
            for (let rank in RankValues) {
                this._cards.push(new Card(colour, rank));
            }
        })
    }

    public drawCard() {
        if(_.isEmpty(this.cards)) {
            this.fillCardsSet();
        }
        let drawnCard = _.sample(this._cards);
        this._cards = _.pull(this._cards, drawnCard);
        return drawnCard;
    }
}

