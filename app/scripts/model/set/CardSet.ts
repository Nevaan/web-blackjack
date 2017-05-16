module WebBlackjack.Model {
    export class CardSet {
        constructor(private _cards: Card[]) {
            for(let colour in Colours) {
                for (let r in RankValues){
                    //this._cards.push(new Card(colour, r));
                }
            }
        }

        get cards() {
            return this._cards;
        }

        public drawCard() {
            //let drawnCard  = _.sample(this._cards);
            //this._cards = _.pull(this._cards, drawnCard);
            //return drawnCard;
        }

    }
}
