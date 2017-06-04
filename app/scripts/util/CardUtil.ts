import {Card} from "../model/Card";
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

}