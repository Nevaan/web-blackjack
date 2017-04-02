import {CardSet} from "../../../scripts/model/set/CardSet";

describe("Set test", () =>  {
    it("should fill ranks array with a's occurences equal to ranks count", () => {
        let a = new CardSet();
        expect(a.ranks.length).toEqual(13);
    })
})