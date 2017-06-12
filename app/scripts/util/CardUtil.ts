import {Card, RankValues} from "../model/Card";
import * as _ from "lodash";
/**
 * Created by pawel on 04.06.2017.
 */


export class CardUtil {
    private constructor() {
    }

    public static getCardSpriteName(card: Card): string {
        return _.lowerCase(card.colour) + '_' + _.lowerCase(card.rank);
    }

    public static countCards(cards: Card[] | Card): number {
        let count: number = 0;
        if(cards instanceof Array)
        {
            let aces: Card[] = [];
            _.forEach(cards, (card) => {
                if (card.rank === "ACE") {
                    aces = _.concat(aces, card);
                } else count += card.getCardValue();
            });

            _.forEach(aces, () => {
                if ((count + 11 + (aces.length - 1) ) <= 21) {
                    count += 11;
                } else {
                    count += 1;
                }
            });
        } else if (cards instanceof Card) {
            if(cards.rank === "ACE") return 1;
            return cards.getCardValue();
        }

        return count;
    }

}