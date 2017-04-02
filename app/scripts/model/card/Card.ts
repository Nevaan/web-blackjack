
export const Colours: String[] = [
    'HEARTS',
    'DIAMONDS',
    'CLUBS',
    'SPADES'
]

export enum Ranks {
    ACE,
    KING,
    QUEEN,
    JACK,
    TEN,
    NINE,
    EIGHT,
    SEVEN,
    SIX,
    FIVE,
    FOUR,
    THREE,
    TWO
}

export const RankValues = {
    [Ranks.ACE]: NaN,
    [Ranks.KING] : 10,
    [Ranks.QUEEN] : 10,
    [Ranks.JACK] : 10,
    [Ranks.TEN] : 10,
    [Ranks.NINE] : 9,
    [Ranks.EIGHT] : 8,
    [Ranks.SEVEN] : 7,
    [Ranks.SIX] : 6,
    [Ranks.FIVE] : 5,
    [Ranks.FOUR] : 4,
    [Ranks.THREE] : 3,
    [Ranks.TWO] : 2

}

export interface Card {
    colour: String;
    rank: Ranks;
}