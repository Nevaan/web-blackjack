import { CardSet } from "../../../scripts/model/set/CardSet";
import {Card, RankValues} from "../../../scripts/model/card/Card";
import * as _ from "lodash";

describe("CardSet test", () =>  {

    let cardSet: CardSet;

    beforeEach(() => {
        cardSet = new CardSet([]);
    });

    it("should create full card set", () => {
        expect(cardSet.cards.length).toBe(52);
    });

    it("should contain 13 cards of each colour", () => {
        let clubs: Card[] = cardSet.cards.filter((card) => { return card.colour === "CLUBS" });
        let diamonds: Card[] = cardSet.cards.filter((card) => { return card.colour === "DIAMONDS" });
        let spades: Card[] = cardSet.cards.filter((card) => { return card.colour === "SPADES" });
        let hearts: Card[] = cardSet.cards.filter((card) => { return card.colour === "HEARTS" });

        expect(clubs.length).toEqual(13);
        expect(diamonds.length).toEqual(13);
        expect(spades.length).toEqual(13);
        expect(hearts.length).toEqual(13);
    });

    it("should contain 4 cards of each rank", () => {
        let rankSet: Card[];

        for (let rank in RankValues) {
            rankSet = cardSet.cards.filter((card) => { return card.rank == rank });
            expect(rankSet.length).toEqual(4);
        }
    });

    it("should draw card and remove it from card set", () => {
        let drawnCard: Card = cardSet.drawCard();
        let isCardInSet: Card | undefined = _.find(cardSet.cards, function(card)  {return (card === drawnCard);});
        expect(cardSet.cards.length).toEqual(51);
        expect(isCardInSet).toBeUndefined();
    });


})