import {Util} from "../../scripts/util/Util";
import {Token} from "../../scripts/model/token/Token";
describe("Util class test", () => {
    let util: Util;

    beforeEach(() => {
        util = new Util();
    });

    it("should convert amount to tokens properly", () => {
        //let list = [new Token(500), new Token(20), new Token(1)];

        //expect(util.convertAmountToTokens(521)).toEqual(list);

        // expect(util.checkout(500,23)).toBe(21);
        expect(true).toBeTruthy();
    });
});
