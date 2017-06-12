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
    private betInsured: boolean = false;


    private game: Phaser.Game;
    private casinoTable: Phaser.Sprite;
    private cardDeck: Phaser.Sprite;
    private backButton: Phaser.Button;
    private currentBalanceText: Phaser.Text;
    private currentBetText: Phaser.Text;
    private playerCardCount: Phaser.Text;
    private dealerCardCount: Phaser.Text;
    private notificationsText: Phaser.Text;

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
    private insuranceButton: Phaser.Text;
    private startNewRoundButton: Phaser.Text;

    //audio
    private tokenSelectSound;
    private dealCardSound;
    private clickButtonSound;

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
        this.player = new Player([], this.game.global.startingBalance);
        this.dealer = new Dealer([]);
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

        this.tokenSelectSound = this.game.add.audio('token_select');
        this.dealCardSound = this.game.add.audio('deal_card');
        this.clickButtonSound = this.game.add.audio('click_button');


        this.backButton = this.game.add.button(20, 15, 'backButton', this.backToMenu, this, 2, 1, 0);

        this.game.sound.setDecodedCallback([ this.tokenSelectSound, this.dealCardSound, this.clickButtonSound ], this.createTokenButtons, this);

        this.createText();
        this.createActionButtons();


    }

    backToMenu() {
        this.game.state.start('menu');
    }

    createText() {
        this.currentBalanceText = this.game.add.text(this.game.world.width - 300, this.game.world.height - 140, "Your balance: $" + this.player.balance, this.textStyle);
        this.currentBalanceText.anchor.setTo(0);

        this.currentBetText = this.game.add.text(this.game.world.width - 280, this.game.world.height - 105, "Current bet: $" + TokenUtil.convertTokensToAmount(this.currentBet), this.textStyle);
        this.currentBetText.anchor.setTo(0);

        this.playerCardCount = this.game.add.text(this.game.world.width - 200, this.game.world.height - 240, "Player: " + CardUtil.countCards(this.player.cards), this.textStyle);
        this.playerCardCount.anchor.setTo(0);
        this.playerCardCount.visible = false;

        this.dealerCardCount = this.game.add.text(50, this.game.world.height - 240, "Dealer: " + "", this.textStyle);
        this.dealerCardCount.anchor.setTo(0);
        this.dealerCardCount.visible = false;

        this.dealButton = this.game.add.text(this.game.world.width - 280, this.game.world.height - 180, "DEAL", this.textStyle);
        this.dealButton.inputEnabled = true;
        this.dealButton.anchor.setTo(0);
        this.dealButton.events.onInputDown.add(this.onDealAction, this);

        this.notificationsText = this.game.add.text(this.game.world.width / 2, 15, "", this.textStyle);
        this.notificationsText.anchor.setTo(0.5, 0);
        this.notificationsText.visible = false;

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
        this.hitButton.visible = false;

        this.standButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 130, "Stand", this.textStyle, this.actionButtons);
        this.standButton.anchor.setTo(0);
        this.standButton.inputEnabled = true;
        this.standButton.events.onInputDown.add(() => {
            this.stand();
        }, this);
        this.standButton.visible = false;


        this.doubleBetButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 80, "Double", this.textStyle, this.actionButtons);
        this.doubleBetButton.anchor.setTo(0);
        this.doubleBetButton.inputEnabled = true;
        this.doubleBetButton.events.onInputDown.add(() => {
            this.double();
        }, this);
        this.doubleBetButton.visible = false;


        this.splitButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 180, "Split", this.textStyle, this.actionButtons);
        this.splitButton.anchor.setTo(0);
        this.splitButton.inputEnabled = true;
        this.splitButton.events.onInputDown.add(() => {
            this.split();
        }, this);
        this.splitButton.visible = false;


        this.insuranceButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 130, "Insurance", this.textStyle, this.actionButtons);
        this.insuranceButton.anchor.setTo(0);
        this.insuranceButton.inputEnabled = true;
        this.insuranceButton.events.onInputDown.add(() => {
            this.insurance();
        }, this);
        this.insuranceButton.visible = false;

        this.startNewRoundButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 130, "Start new round", this.textStyle);
        this.startNewRoundButton.anchor.setTo(0);
        this.startNewRoundButton.inputEnabled = true;
        this.startNewRoundButton.events.onInputDown.add(() => {
            this.reinitializeGame();
        }, this);
        this.startNewRoundButton.visible = false;
    }

    showActionButtons() {
        _.forEach(this.actionButtons.children, (element) => {
            element.visible = false;
        });

        this.hitButton.visible = true;
        this.standButton.visible = true;
        if (TokenUtil.convertTokensToAmount(this.currentBet) <= this.player.balance) {
            this.doubleBetButton.visible = true;
        }

        if (this.player.cards[0].getCardValue() === this.player.cards[1].getCardValue()) {
            this.splitButton.visible = true;
        }

        if (this.dealer.cards[0].rank === "ACE") {
            this.insuranceButton.visible = true;
        }
    }

    hit() {
        this.doubleBetButton.visible = false;
        this.splitButton.visible = false;

        this.addCardForPlayer();

        if (CardUtil.countCards(this.player.cards) > 21) {
            this.gameLost();
        }
    }

    stand() {
        this.actionButtons.visible = false;
        this.clickButtonSound.play();

        this.game.time.events.add(Phaser.Timer.SECOND, () => {
            this.dealerCardsGroup.getChildAt(1).destroy();
            this.dealCardSound.play();
            this.dealerCardsGroup.add(
                this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 225, CardUtil.getCardSpriteName(this.dealer.cards[1])));
            this.updateDealerCardCount();
            this.dealerPlay();
        });
    }

    double() {
        this.updateBet(TokenUtil.convertTokensToAmount(this.currentBet));
        this.addCardForPlayer();
        if(CardUtil.countCards(this.player.cards) <= 21) {
            this.stand();
        } else {
            this.gameLost();
        }
    }

    split() {
        console.log('split');
    }

    insurance() {
        //todo: reset on round end
        this.betInsured = true;
        this.updateBet(_.floor(TokenUtil.convertTokensToAmount(this.currentBet) * 0.5));
    }

    updateBet(amount: number) {
        if (this.isBetPossible(amount)) {
            this.currentBet = this.currentBet.concat(new Token(amount));
            this.player.balance -= amount;

            this.updateBalanceAndBetText();
            this.colorTokenButtonsRed();
            this.tokenSelectSound.play();
        }
    }

    updateBalanceAndBetText() {
        this.currentBalanceText.setText("Your balance: $" + this.player.balance, true);
        this.currentBetText.setText("Current bet: $" + TokenUtil.convertTokensToAmount(this.currentBet), true);
    }

    isBetPossible(amount: number): boolean {
        return Math.floor(this.player.balance / amount) && this.player.balance - amount >= 0;
    }

    onDealAction() {
        if (!_.isEmpty(this.currentBet)) {
            this.clickButtonSound.play();

            this.dealButton.visible = false;
            this.tokenButtons.visible = false;

            this.player.addCard(this.cardSet.drawCard());
            this.player.addCard(this.cardSet.drawCard());

            this.dealer.addCard(this.cardSet.drawCard());
            this.dealer.addCard(this.cardSet.drawCard());

            this.game.time.events.add(Phaser.Timer.SECOND * 0.5, () => {
                this.dealCardSound.play();

                this.playerCardsGroup.add(
                    this.game.add.sprite(this.game.world.width / 2 - 20, this.game.world.height / 2 - 50, CardUtil.getCardSpriteName(this.player.cards[0]))
                );

                this.playerCardsGroup.add(
                    this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 50, CardUtil.getCardSpriteName(this.player.cards[1]))
                );

                this.dealerCardsGroup.add(
                    this.game.add.sprite(this.game.world.width / 2 - 20, this.game.world.height / 2 - 225, CardUtil.getCardSpriteName(this.dealer.cards[0]))
                );
                this.dealerCardsGroup.add(
                    this.game.add.sprite(this.game.world.width / 2, this.game.world.height / 2 - 225, 'cardBack')
                );

                this.playerCardCount.visible = true;
                this.dealerCardCount.setText("Dealer: " + CardUtil.countCards(this.dealer.cards[0]), true);
                this.dealerCardCount.visible = true;
                this.showActionButtons();
                this.actionButtons.visible = true;
                this.updatePlayerCardCount();
            });
            //this.updateDealerCardCount();
        }
    }

    addCardForPlayer() {
        this.player.addCard(this.cardSet.drawCard());
        this.playerCardsGroup.left -= 20;
        this.dealCardSound.play();
        this.playerCardsGroup.add(
            this.game.add.sprite(this.game.world.width / 2 + ((this.playerCardsGroup.length - 1) * 20), this.game.world.height / 2 - 50, CardUtil.getCardSpriteName(this.player.cards[this.playerCardsGroup.length]))
        );
        this.updatePlayerCardCount();
    }

    addCardForDealer() {
        this.dealer.addCard(this.cardSet.drawCard());
        this.dealerCardsGroup.left -= 20;
        this.dealCardSound.play();
        this.dealerCardsGroup.add(
            this.game.add.sprite(this.game.world.width / 2 + ((this.dealerCardsGroup.length - 1) * 20), this.game.world.height / 2 - 225, CardUtil.getCardSpriteName(this.dealer.cards[this.dealerCardsGroup.length]))
        );
        this.updateDealerCardCount();
    }

    dealerPlay() {
        this.game.time.events.add(Phaser.Timer.SECOND, () => {
            if (CardUtil.countCards(this.dealer.cards) <= 16) {
                this.addCardForDealer();
                this.dealerPlay();
            } else {
                let notification: string = "";
                let playerScore = CardUtil.countCards(this.player.cards);
                let dealerScore = CardUtil.countCards(this.dealer.cards);
                if (dealerScore <= 21) {
                    if (playerScore < dealerScore) {
                        notification = "You lost!";
                    }

                    if (playerScore == dealerScore) {
                        notification = "Draw";
                        this.player.balance += TokenUtil.convertTokensToAmount(this.currentBet);
                    }

                    if (playerScore > dealerScore) {
                        notification = "You won!";
                        this.player.balance += TokenUtil.convertTokensToAmount(this.currentBet) * 2;
                    }
                } else {
                        notification = "You won!";
                        this.player.balance += TokenUtil.convertTokensToAmount(this.currentBet) * 2;
                }
                this.notificationsText.setText(notification, true);
                this.notificationsText.visible = true;

                this.startNewRoundButton.visible = true;
            }
        });
    }

    updatePlayerCardCount() {
        this.playerCardCount.setText("Player: " + CardUtil.countCards(this.player.cards), true);
    }

    updateDealerCardCount() {
        this.dealerCardCount.setText("Dealer: " + CardUtil.countCards(this.dealer.cards), true);
    }

    gameLost() {
        this.actionButtons.visible = false;
        this.startNewRoundButton.visible = true;
    }

    colorTokenButtonsRed() {
        _.forEach(this.tokenButtons.children, (element) => {
            let elementAmount = _.replace(element.text, '$', '');
            if (_.parseInt(elementAmount) > this.player.balance) {
                element.fill = "#8B0000";
            } else {
                element.fill = "#daa520";
            }
        })
    }

    reinitializeGame() {
        this.clickButtonSound.play();
        if(this.player.balance > 0) {
            this.dealButton.visible = true;
            this.colorTokenButtonsRed();
            this.tokenButtons.visible = true;
            this.startNewRoundButton.visible = false;
            this.notificationsText.setText("", true);
            this.notificationsText.visible = false;

            this.currentBet = [];
            this.playerCardsGroup.destroy();
            this.dealerCardsGroup.destroy();
            this.playerCardsGroup = this.game.add.group();
            this.dealerCardsGroup = this.game.add.group();

            this.player.cards = [];
            this.dealer.cards = [];

            this.updatePlayerCardCount();
            this.updateDealerCardCount();
            this.updateBalanceAndBetText();
        } else {
            this.startNewRoundButton.visible = false;
            this.notificationsText.setText("YOU LOST ALL THE MONEY!", true);
            this.notificationsText.visible = true;
            this.notificationsText.fill = "#8B0000";
        }
    }

}