
export const Colours: string[] = [
    'HEARTS',
    'DIAMONDS',
    'CLUBS',
    'SPADES'
]

export const RankValues = {
    "ACE":   NaN,
    "KING":  10,
    "QUEEN": 10,
    "JACK":  10,
    "TEN":   10,
    "NINE":   9,
    "EIGHT":  8,
    "SEVEN":  7,
    "SIX":    6,
    "FIVE":   5,
    "FOUR":   4,
    "THREE":  3,
    "TWO":    2
}

export class Card {

    get colour() {
        return this._colour;
    }

    get rank() {
        return this._rank;
    }

    constructor(private _colour: String, private _rank: String) {
    }

    public getCardValue() {
        return RankValues[this.rank];
    }
}