import * as Phaser from "phaser";
import {Player} from "../model/Player";
import {CardSet} from "../model/CardSet";
import {Card} from "../model/Card";
import {Token} from "../model/Token";
import {Util} from "../util/Util";
import * as _ from "lodash";

export class Main extends Phaser.State {
    private game: Phaser.Game;
    private currentBet: Token[];
    private backButton: Phaser.Button;
    private currentBalanceText: Phaser.Text;
    private currentBetText: Phaser.Text;
    private player: Player;
    private cardSet: CardSet;

    // temp token buttons
    private oneTokenButton: Phaser.Text;
    private fiveTokenButton: Phaser.Text;
    private tenTokenButton: Phaser.Text;
    private twentyFiveTokenButton: Phaser.Text;
    private fiftyTokenButton: Phaser.Text;
    private hundredTokenButton: Phaser.Text;
    private fiveHundredTokenButton: Phaser.Text;

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

        // initial tokens
        var tokens: Token[] = _.concat(
            Util.getAmountOfTokens(1, 500),
            Util.getAmountOfTokens(2, 100),
            Util.getAmountOfTokens(2, 50),
            Util.getAmountOfTokens(5, 25),
            Util.getAmountOfTokens(4, 10),
            Util.getAmountOfTokens(5, 5),
            Util.getAmountOfTokens(10, 1),
        );
        this.currentBet = [];
        this.player = new Player(tokens, cards);
    }

    create() {
        this.game.stage.backgroundColor = 0x000000;
        this.backButton = this.game.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
        this.createTokenButtons();
        this.createText();
    }

    backToMenu() {
        this.game.state.start('menu');
    }

    createText() {
        this.currentBalanceText = this.game.add.text(this.game.world.width - 300, this.game.world.height - 140, "Your balance: $" + Util.convertTokensToAmount(this.player.tokens), {font: "30px bree"});
        this.currentBalanceText.anchor.setTo(0);


        this.currentBalanceText.fill = '#daa520';
        this.currentBalanceText.align = 'center';

        this.currentBetText = this.game.add.text(this.game.world.width - 280, this.game.world.height - 105, "Current bet: $" + Util.convertTokensToAmount(this.currentBet), {font: "30px bree"});
        this.currentBetText.anchor.setTo(0);

        this.currentBetText.fill = '#daa520';
        this.currentBetText.align = 'center';
    }

    //TODO: replace with real buttons
    createTokenButtons() {
        this.oneTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 200, "1$"+this.getTokenAmountString(1), {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.oneTokenButton.anchor.setTo(0);
        this.oneTokenButton.inputEnabled = true;
        this.oneTokenButton.events.onInputDown.add(() => this.updateBet(1,this.oneTokenButton), this);


        this.fiveTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 150, "5$"+this.getTokenAmountString(5), {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.fiveTokenButton.anchor.setTo(0);
        this.fiveTokenButton.inputEnabled = true;
        this.fiveTokenButton.events.onInputDown.add(() => this.updateBet(5,this.fiveTokenButton), this);

        this.tenTokenButton = this.game.add.text(this.game.world.width / 10, this.game.world.height - 100, "10$"+this.getTokenAmountString(10), {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.tenTokenButton.anchor.setTo(0);
        this.tenTokenButton.inputEnabled = true;
        this.tenTokenButton.events.onInputDown.add(() => this.updateBet(10,this.tenTokenButton), this);

        this.twentyFiveTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 200, "25$"+this.getTokenAmountString(25), {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.twentyFiveTokenButton.anchor.setTo(0);
        this.twentyFiveTokenButton.inputEnabled = true;
        this.twentyFiveTokenButton.events.onInputDown.add(() => this.updateBet(25,this.twentyFiveTokenButton), this);

        this.fiftyTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 150, "50$"+this.getTokenAmountString(50), {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.fiftyTokenButton.anchor.setTo(0);
        this.fiftyTokenButton.inputEnabled = true;
        this.fiftyTokenButton.events.onInputDown.add(() => this.updateBet(50,this.fiftyTokenButton), this);

        this.hundredTokenButton = this.game.add.text(this.game.world.width / 4, this.game.world.height - 100, "100$"+this.getTokenAmountString(100), {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.hundredTokenButton.anchor.setTo(0);
        this.hundredTokenButton.inputEnabled = true;
        this.hundredTokenButton.events.onInputDown.add(() => this.updateBet(100,this.hundredTokenButton), this);

        this.fiveHundredTokenButton = this.game.add.text(this.game.world.width / 2, this.game.world.height - 200, "500$" + this.getTokenAmountString(500), {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.fiveHundredTokenButton.anchor.setTo(0);
        this.fiveHundredTokenButton.inputEnabled = true;
        this.fiveHundredTokenButton.events.onInputDown.add(() => this.updateBet(500, this.fiveHundredTokenButton), this);
    }

    updateBet(betValue: number, button?: Phaser.Text) {
        let betToken = _.find(this.player.tokens, (token) => {
            return token.value === betValue
        });
        if (betToken) {
            this.currentBet = this.currentBet.concat(betToken);
            this.player.tokens.splice(_.findIndex(this.player.tokens, (token) => {
                return token.value === betValue
            }), 1);
        }
        if (button) {
            let buttonText = button.text.split("$");
            button.setText(buttonText[0] + "$" + this.getTokenAmountString(betToken.value), true);
        }
        this.currentBalanceText.setText("Your balance: $" + Util.convertTokensToAmount(this.player.tokens), true)
        this.currentBetText.setText("Current bet: $" + Util.convertTokensToAmount(this.currentBet), true);
    }

    getTokenAmountString(tokenValue:number): string {
        return "(" + _.filter(this.player.tokens, (token) => {
                if (token.value === tokenValue) return token
            }).length + "x)";
    }

}