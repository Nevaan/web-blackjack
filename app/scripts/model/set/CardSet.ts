import {Card, Colours, RankValues} from "../card/Card";
declare var _: any;

export class CardSet {

    constructor(private _cards: Card[]) {
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