import {Card, Ranks, Colours, RankValues} from "../card/Card";

export class CardSet {
    private cards: Card[];
    ranks: String[];

    constructor() {
        this.ranks = [];
        for (let rank in RankValues) {
            this.ranks.push("a");
        }
    }

}