import {Card, Colours} from "../../../scripts/model/card/Card";

describe("Card test", () =>  {

    it("should contain all colours", () => {
       expect(Colours.length).toEqual(4);
       expect(Colours).toContain("HEARTS");
       expect(Colours).toContain("CLUBS");
       expect(Colours).toContain("SPADES");
       expect(Colours).toContain("DIAMONDS");
    });

    it("should create an instance", () => {
        let card = new Card('HEARTS', "ACE");
        expect(card.colour).toEqual(Colours[0]);
        expect(card.rank).toEqual("ACE");
    })

    it("should return correct card value", () => {
        let card = new Card("Hearts", "EIGHT");
        expect(card.getCardValue()).toEqual(8);

        card = new Card("CLUBS", "ACE");
        expect(card.getCardValue()).toBeNaN();
    });
})