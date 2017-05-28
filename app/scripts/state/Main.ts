import * as Phaser from "phaser";
import {Player} from "../model/Player";
import {CardSet} from "../model/CardSet";
import {Card} from "../model/Card";
import {Token} from "../model/Token";

export class Main extends Phaser.State {
    private game: Phaser.Game;
    private currentBet: number = 0;
    private currentBalance: number = 0;
    private backButton: Phaser.Button;
    private currentBalanceText: Phaser.Text;
    private currentBetText: Phaser.Text;
    private player: Player;
    private cardSet: CardSet;

    constructor() {
        super();
    }

    init() {
        this.cardSet = new CardSet();
        var cards: Card[] = [
            this.cardSet.drawCard(),
            this.cardSet.drawCard(),
            this.cardSet.drawCard()
        ];
        var token: Token[] = [

        ];
        this.player = new Player(token, cards);
    }

    create() {
        this.game.stage.backgroundColor = 0x000000;
        this.backButton = this.game.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
        this.createText();

        console.log(this.cardSet);
        console.log(this.player);
    }

    backToMenu() {
        this.game.state.start('menu');
    }

    createText() {
        this.currentBalanceText = this.game.add.text(this.game.world.width - 300, this.game.world.height - 140, "Your balance: $ " + this.currentBalance, {font: "30px bree"});
        this.currentBalanceText.anchor.setTo(0);

        this.currentBalanceText.fill = '#daa520';
        this.currentBalanceText.align = 'center';

        this.currentBetText = this.game.add.text(this.game.world.width - 280, this.game.world.height - 105, "Current bet: $ " + this.currentBet, {font: "30px bree"});
        this.currentBetText.anchor.setTo(0);

        this.currentBetText.fill = '#daa520';
        this.currentBetText.align = 'center';
    }
}