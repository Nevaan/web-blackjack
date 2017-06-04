import {Token, TokenValues} from "../model/Token";
import * as _ from "lodash";

export class TokenUtil {

    private constructor() {

    }

    public static convertAmountToTokens(amount: number): Token[] {
        let tokenAmount = TokenValues.length - 1;
        let tokens: Token[] = [];
        while (tokenAmount > 0) {
            _.times(Math.floor(amount/ TokenValues[tokenAmount]), () => {
                tokens = tokens.concat(new Token(TokenValues[tokenAmount]));
            });
            amount = amount % TokenValues[tokenAmount];
            tokenAmount--;
        }
        return tokens;
    }

    public static convertTokensToAmount(tokens: Token[]): number {
        let value: number  = 0;
        _.forEach(tokens, (token) => {
            value += token.value;
        });

        return value;
    }

    public static getAmountOfTokens(amount: number, tokenValue: number): Token[]{
        let tokens: Token[] = [];
        _.times(amount, () => {
            tokens = tokens.concat(new Token(tokenValue))
        });
        return tokens;
    }
}