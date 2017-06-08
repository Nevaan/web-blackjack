import * as Phaser from "phaser";
import {Player} from "../model/Player";
import {CardSet} from "../model/CardSet";
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
    private playerCardCount: Phaser.Text;
    private dealerCardCount: Phaser.Text;


    private tokenButtons: Phaser.Group;
    private actionButtons: Phaser.Group;
    private playerCardsGroup: Phaser.Group;
    private dealerCardsGroup: Phaser.Group;


    // temp token buttons
    private oneTokenButton: Phaser.Text;
    private fiveTokenButton: Phaser.Text;
    private tenTokenButton: Phaser.Text;
    private twentyFiveTokenButton: Phaser.Text;
    private fiftyTokenButton: Phaser.Text;
    private hundredTokenButton: Phaser.Text;
    private fiveHundredTokenButton: Phaser.Text;
    private dealButton: Phaser.Text;

    //action buttons;

    private hitButton: Phaser.Text;
    private standButton: Phaser.Text;
    private doubleBetButton: Phaser.Text;
    private splitButton: Phaser.Text;
    private surrenderButton: Phaser.Text;

    private textStyle;

    constructor() {
        super();
        this.textStyle = {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        }
    }

    init() {
        this.cardSet = new CardSet();
        this.currentBet = [];
        this.player = new Player([this.cardSet.drawCard(), this.cardSet.drawCard()], this.game.global.startingBalance);
        this.dealer = new Dealer([this.cardSet.drawCard(), this.cardSet.drawCard()]);
    }

    create() {
        this.game.stage.backgroundColor = 0x000000;
        this.casinoTable = this.game.add.sprite(0, 65, 'casinoTable');

        this.cardDeck = this.game.add.sprite(this.game.world.width - 160, 150, 'cardBack');
        this.cardDeck.angle -= 90;
        this.game.add.sprite(this.game.world.width - 157, 153, 'cardBack').angle -= 90;
        this.game.add.sprite(this.game.world.width - 154, 156, 'cardBack').angle -= 90;

        this.playerCardsGroup = this.game.add.group();
        this.dealerCardsGroup = this.game.add.group();
        this.tokenButtons = this.game.add.group();
        this.actionButtons = this.game.add.group();


        this.backButton = this.game.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
        this.createTokenButtons();
        this.createText();
    }

    backToMenu() {
        this.game.state.start('menu');
    }

    createText() {
        this.currentBalanceText = this.game.add.text(this.game.world.width - 300, this.game.world.height - 140, "Your balance: $" + this.player.balance, this.textStyle);
        this.currentBalanceText.anchor.setTo(0);

        this.currentBetText = this.game.add.text(this.game.world.width - 280, this.game.world.height - 105, "Current bet: $" + TokenUtil.convertTokensToAmount(this.currentBet), this.textStyle);
        this.currentBetText.anchor.setTo(0);

        this.dealButton = this.game.add.text(this.game.world.width - 280, this.game.world.height - 180, "DEAL", this.textStyle);
        this.dealButton.inputEnabled = true;
        this.dealButton.anchor.set(0);
        this.dealButton.events.onInputDown.add(this.onDealAction, this);

    }

    //TODO: replace with real buttons
    createTokenButtons() {
        this.oneTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 180, "1$", this.textStyle, this.tokenButtons);
        this.oneTokenButton.anchor.setTo(0);
        this.oneTokenButton.inputEnabled = true;
        this.oneTokenButton.events.onInputDown.add(() => this.updateBet(1), this);


        this.fiveTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 130, "5$", this.textStyle, this.tokenButtons);
        this.fiveTokenButton.anchor.setTo(0);
        this.fiveTokenButton.inputEnabled = true;
        this.fiveTokenButton.events.onInputDown.add(() => this.updateBet(5), this);

        this.tenTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 80, "10$", this.textStyle, this.tokenButtons);
        this.tenTokenButton.anchor.setTo(0);
        this.tenTokenButton.inputEnabled = true;
        this.tenTokenButton.events.onInputDown.add(() => this.updateBet(10), this);

        this.twentyFiveTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 180, "25$", this.textStyle, this.tokenButtons);
        this.twentyFiveTokenButton.anchor.setTo(0);
        this.twentyFiveTokenButton.inputEnabled = true;
        this.twentyFiveTokenButton.events.onInputDown.add(() => this.updateBet(25), this);

        this.fiftyTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 130, "50$", this.textStyle, this.tokenButtons);
        this.fiftyTokenButton.anchor.setTo(0);
        this.fiftyTokenButton.inputEnabled = true;
        this.fiftyTokenButton.events.onInputDown.add(() => this.updateBet(50), this);

        this.hundredTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 80, "100$", this.textStyle, this.tokenButtons);
        this.hundredTokenButton.anchor.setTo(0);
        this.hundredTokenButton.inputEnabled = true;
        this.hundredTokenButton.events.onInputDown.add(() => this.updateBet(100), this);

        this.fiveHundredTokenButton = this.game.add.text(this.game.world.width / 2, this.game.world.height - 180, "500$", this.textStyle, this.tokenButtons);
        this.fiveHundredTokenButton.anchor.setTo(0);
        this.fiveHundredTokenButton.inputEnabled = true;
        this.fiveHundredTokenButton.events.onInputDown.add(() => this.updateBet(500), this);

    }

    createActionButtons() {

        this.hitButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 180, "Hit", this.textStyle, this.actionButtons);
        this.hitButton.anchor.setTo(0);
        this.hitButton.inputEnabled = true;
        this.hitButton.events.onInputDown.add(() => {
            this.hit();
        }, this);

        this.standButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 130, "Stand", this.textStyle, this.actionButtons);
        this.standButton.anchor.setTo(0);
        this.standButton.inputEnabled = true;
        this.standButton.events.onInputDown.add(() => {
            this.stand();
        }, this);

        if(TokenUtil.convertTokensToAmount(this.currentBet) <= this.player.balance) {
            this.doubleBetButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 80, "Double", this.textStyle, this.actionButtons);
            this.doubleBetButton.anchor.setTo(0);
            this.doubleBetButton.inputEnabled = true;
            this.doubleBetButton.events.onInputDown.add(() => {
                this.double();
            }, this);
        };

        this.splitButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 180, "Split", this.textStyle, this.actionButtons);
        this.splitButton.anchor.setTo(0);
        this.splitButton.inputEnabled = true;
        this.splitButton.events.onInputDown.add(() => {
            this.split();
        }, this);

        this.surrenderButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 130, "Surrender", this.textStyle, this.actionButtons);
        this.surrenderButton.anchor.setTo(0);
        this.surrenderButton.inputEnabled = true;
        this.surrenderButton.events.onInputDown.add(() => {
            this.surrender();
        }, this);
    }

    hit() {
        this.addCardForPlayer();

        if(CardUtil.countCards(this.player.cards) > 21) {
            this.gameLost();
        }
    }

    stand() {
        this.actionButtons.visible = false;
        /*
         TODO: insert dealer play
         */
    }

    double() {
       this.updateBet(TokenUtil.convertTokensToAmount(this.currentBet));
        this.addCardForPlayer();
       this.actionButtons.visible = false;
       /*
       TODO: insert dealer play
        */
    }

    split() {
        console.log('split');
    }

    surrender() {
        console.log('surrender');
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
        if (!_.isEmpty(this.currentBet)) {
            this.dealButton.visible = false;
            this.tokenButtons.visible = false;

            this.playerCardsGroup.add(
                this.game.add.sprite(this.game.world.width / 2 - 72, this.game.world.height / 2 - 50, CardUtil.getCardSpriteName(this.player.cards[0]))
            );

            this.playerCardsGroup.add(
                this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 50, CardUtil.getCardSpriteName(this.player.cards[1]))
            );

            this.dealerCardsGroup.add(
                this.game.add.sprite(this.game.world.width / 2 - 72, this.game.world.height / 2 - 225, CardUtil.getCardSpriteName(this.dealer.cards[0]))
            );
            this.dealerCardsGroup.add(
                this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 225, 'cardBack')
            );

            this.playerCardCount = this.game.add.text(this.game.world.width - 280, this.game.world.height - 70, "Your card count: " + CardUtil.countCards(this.player.cards), this.textStyle);
            this.playerCardCount.anchor.setTo(0);

            this.createActionButtons();
        }
    }

    addCardForPlayer() {
        this.player.addCard(this.cardSet.drawCard());
        this.playerCardsGroup.left -= 72;
        this.playerCardsGroup.add(
            this.game.add.sprite(this.game.world.width / 2 + ((this.playerCardsGroup.length-1) * 72), this.game.world.height / 2 - 50, CardUtil.getCardSpriteName(this.player.cards[this.playerCardsGroup.length]))
        );
        this.updatePlayerCardCount();
    }

    updatePlayerCardCount() {
        this.playerCardCount.setText("Your card count: " + CardUtil.countCards(this.player.cards), true);
    }

    updateDealerCardCount() {
    }

    gameLost() {
        this.actionButtons.visible = false;
        console.log("You lost");
    }
}