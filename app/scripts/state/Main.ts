import * as Phaser from "phaser";
import {Player} from "../model/Player";
import {CardSet} from "../model/CardSet";
import {Card} from "../model/Card";
import {Token} from "../model/Token";
import {TokenUtil} from "../util/TokenUtil";
import * as _ from "lodash";
import {CardUtil} from "../util/CardUtil";
import {Dealer} from "../model/Dealer";

export class Main extends Phaser.State {

    private currentBet: Token[];
    private dealer: Dealer;
    private player: Player;
    private cardSet: CardSet;


    private game: Phaser.Game;
    private casinoTable: Phaser.Sprite;
    private cardDeck: Phaser.Sprite;
    private backButton: Phaser.Button;
    private currentBalanceText: Phaser.Text;
    private currentBetText: Phaser.Text;


    // temp token buttons
    private oneTokenButton: Phaser.Text;
    private fiveTokenButton: Phaser.Text;
    private tenTokenButton: Phaser.Text;
    private twentyFiveTokenButton: Phaser.Text;
    private fiftyTokenButton: Phaser.Text;
    private hundredTokenButton: Phaser.Text;
    private fiveHundredTokenButton: Phaser.Text;
    private dealButton: Phaser.Text;

    constructor() {
        super();
    }

    init() {
        this.cardSet = new CardSet();
        this.currentBet = [];
        this.player = new Player([this.cardSet.drawCard(), this.cardSet.drawCard()] , this.game.global.startingBalance);
        this.dealer = new Dealer([this.cardSet.drawCard(), this.cardSet.drawCard()]);
    }

    create() {
        this.game.stage.backgroundColor = 0x000000;
        this.casinoTable = this.game.add.sprite(0, 65, 'casinoTable');

        this.cardDeck = this.game.add.sprite(this.game.world.width - 160, 150,'cardBack');
        this.cardDeck.angle -= 90;
        this.game.add.sprite(this.game.world.width - 157, 153,'cardBack').angle -= 90;
        this.game.add.sprite(this.game.world.width - 154, 156,'cardBack').angle -= 90;


        this.backButton = this.game.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
        this.createTokenButtons();
        this.createText();
    }

    backToMenu() {
        this.game.state.start('menu');
    }

    createText() {
        this.currentBalanceText = this.game.add.text(this.game.world.width - 300, this.game.world.height - 140, "Your balance: $" + this.player.balance, {font: "30px bree"});
        this.currentBalanceText.anchor.setTo(0);

        this.currentBalanceText.fill = '#daa520';
        this.currentBalanceText.align = 'center';

        this.currentBetText = this.game.add.text(this.game.world.width - 280, this.game.world.height - 105, "Current bet: $" + TokenUtil.convertTokensToAmount(this.currentBet), {font: "30px bree"});
        this.currentBetText.anchor.setTo(0);

        this.currentBetText.fill = '#daa520';
        this.currentBetText.align = 'center';

        this.dealButton = this.game.add.text(this.game.world.width - 280, this.game.world.height - 180, "DEAL", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.dealButton.inputEnabled = true;
        this.dealButton.anchor.set(0);
        this.dealButton.events.onInputDown.add(this.onDealAction, this);

    }

    //TODO: replace with real buttons
    createTokenButtons() {
        this.oneTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 180, "1$", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.oneTokenButton.anchor.setTo(0);
        this.oneTokenButton.inputEnabled = true;
        this.oneTokenButton.events.onInputDown.add(() => this.updateBet(1), this);


        this.fiveTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 130, "5$", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.fiveTokenButton.anchor.setTo(0);
        this.fiveTokenButton.inputEnabled = true;
        this.fiveTokenButton.events.onInputDown.add(() => this.updateBet(5), this);

        this.tenTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 80, "10$", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.tenTokenButton.anchor.setTo(0);
        this.tenTokenButton.inputEnabled = true;
        this.tenTokenButton.events.onInputDown.add(() => this.updateBet(10), this);

        this.twentyFiveTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 180, "25$", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.twentyFiveTokenButton.anchor.setTo(0);
        this.twentyFiveTokenButton.inputEnabled = true;
        this.twentyFiveTokenButton.events.onInputDown.add(() => this.updateBet(25), this);

        this.fiftyTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 130, "50$", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.fiftyTokenButton.anchor.setTo(0);
        this.fiftyTokenButton.inputEnabled = true;
        this.fiftyTokenButton.events.onInputDown.add(() => this.updateBet(50), this);

        this.hundredTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 80, "100$", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.hundredTokenButton.anchor.setTo(0);
        this.hundredTokenButton.inputEnabled = true;
        this.hundredTokenButton.events.onInputDown.add(() => this.updateBet(100), this);

        this.fiveHundredTokenButton = this.game.add.text(this.game.world.width / 2, this.game.world.height - 180, "500$", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.fiveHundredTokenButton.anchor.setTo(0);
        this.fiveHundredTokenButton.inputEnabled = true;
        this.fiveHundredTokenButton.events.onInputDown.add(() => this.updateBet(500), this);

    }

    updateBet(amount: number) {
        if (this.isBetPossible(amount)) {
            this.currentBet = this.currentBet.concat(new Token(amount));
            this.player.balance -= amount;

            this.currentBalanceText.setText("Your balance: $" + this.player.balance, true)
            this.currentBetText.setText("Current bet: $" + TokenUtil.convertTokensToAmount(this.currentBet), true);
        }
    }

    isBetPossible(amount: number): boolean {
        return Math.floor(this.player.balance / amount) && this.player.balance - amount >= 0;
    }

    onDealAction() {
        if(!_.isEmpty(this.currentBet)) {
            this.oneTokenButton.visible = false;
            this.fiveTokenButton.visible = false;
            this.tenTokenButton.visible = false;
            this.twentyFiveTokenButton.visible = false;
            this.fiftyTokenButton.visible = false;
            this.hundredTokenButton.visible = false;
            this.fiveHundredTokenButton.visible = false;
            this.dealButton.visible = false;

            this.game.add.sprite(this.game.world.width / 2 - 72, this.game.world.height / 2 - 50, CardUtil.getCardSpriteName(this.player.cards[0]));
            this.game.add.sprite(this.game.world.width / 2 , this.game.world.height / 2 - 50, CardUtil.getCardSpriteName(this.player.cards[1]));

            this.game.add.sprite(this.game.world.width / 2 - 72, this.game.world.height / 2 - 225, CardUtil.getCardSpriteName(this.dealer.cards[0]));
            this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 225, 'cardBack');
        }
    }
}