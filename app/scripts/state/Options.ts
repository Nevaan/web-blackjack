import * as Phaser from "phaser";
import * as _ from "lodash";

export class Options extends Phaser.State {
    private game: Phaser.Game;
    private backButton: Phaser.Button;
    private startingBalanceText: Phaser.Text;
    private optionsHeader: Phaser.Text;


    private startingBalanceTextOptions: Phaser.Group;
    private fiveHundredText: Phaser.Text;
    private oneKText: Phaser.Text;
    private twoKText: Phaser.Text;
    private fiveKText: Phaser.Text;

    private soundTextOptions: Phaser.Group;
    private soundOptionHeader: Phaser.Text;
    private soundOn: Phaser.Text;
    private soundOff: Phaser.Text;


    private deckAmountOption: Phaser.Text;
    private addDeckText: Phaser.Text;
    private deckAmountText: Phaser.Text;
    private subtractDeckText: Phaser.Text;

    constructor() {
        super();
    }

    create() {
        this.game.stage.backgroundColor = 0x000000;
        this.startingBalanceTextOptions = this.game.add.group();
        this.soundTextOptions = this.game.add.group();

        this.backButton = this.game.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
        this.optionsHeader = this.game.add.text(this.game.world.width / 2, 120, "Options", {
            font: "40px bree",
            fill: "#daa520",
            align: "center"
        });
        this.optionsHeader.anchor.set(0.5);

        this.startingBalanceText = this.game.add.text(this.game.world.width / 10, 180, "Starting balance: ", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.startingBalanceText.anchor.set(0);

        this.soundOptionHeader = this.game.add.text(this.game.world.width / 10, 280, "Sound: ", {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });

        this.deckAmountOption = this.game.add.text(this.game.world.width / 10, 380, "Deck amount",{
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.deckAmountOption.anchor.set(0);

        this.subtractDeckText = this.game.add.text(100, 420, "-", {
            font: "25px bree",
            fill: "#daa520",
            align: "center"
        });
        this.subtractDeckText.anchor.set(0);

        this.deckAmountText = this.game.add.text(130, 420, this.game.global.deckAmount, {
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.deckAmountText.anchor.set(0);

        this.addDeckText = this.game.add.text(160, 420, "+", {
            font: "25px bree",
            fill: "#daa520",
            align: "center"
        });
        this.addDeckText.anchor.set(0);


        this.fiveHundredText = this.game.add.text(100, 230, "$500", {
            font: "30px bree",
            fill: "#8B0000",
            align: "center"
        }, this.startingBalanceTextOptions);

        this.oneKText = this.game.add.text(200, 230, "$1000", {
            font: "25px bree",
            fill: "#8B0000",
            align: "center"
        }, this.startingBalanceTextOptions);

        this.twoKText = this.game.add.text(300, 230, "$2000", {
            font: "25px bree",
            fill: "#8B0000",
            align: "center"
        }, this.startingBalanceTextOptions);

        this.fiveKText = this.game.add.text(400, 230, "$5000", {
            font: "25px bree",
            fill: "#8B0000",
            align: "center"
        }, this.startingBalanceTextOptions);

        this.soundOn = this.game.add.text(100, 330, "On", {
            font: "25px bree",
            fill: "#8B0000",
            align: "center"
        }, this.soundTextOptions);
        this.soundOff = this.game.add.text(200, 330, "Off",{
            font: "25px bree",
            fill: "#8B0000",
            align: "center"
        }, this.soundTextOptions);

        this.fiveHundredText.inputEnabled = true;
        this.oneKText.inputEnabled = true;
        this.twoKText.inputEnabled = true;
        this.fiveKText.inputEnabled = true;
        this.soundOn.inputEnabled = true;
        this.soundOff.inputEnabled = true;

        this.addDeckText.inputEnabled = true;
        this.subtractDeckText.inputEnabled = true;

        this.addDeckText.events.onInputDown.add(() => {
            if(this.game.global.deckAmount < 5) {
                this.game.global.deckAmount += 1;
                this.deckAmountText.setText(this.game.global.deckAmount, true);
            }

        });

        this.subtractDeckText.events.onInputDown.add(() => {
            if(this.game.global.deckAmount > 1) {
                this.game.global.deckAmount -= 1;
                this.deckAmountText.setText(this.game.global.deckAmount, true);
            }
        });

        this.fiveHundredText.events.onInputDown.add(() => this.setStartingBalance(500, this.fiveHundredText), true);
        this.oneKText.events.onInputDown.add(() => this.setStartingBalance(1000, this.oneKText), true);
        this.twoKText.events.onInputDown.add(() => this.setStartingBalance(2000, this.twoKText), true);
        this.fiveKText.events.onInputDown.add(() => this.setStartingBalance(5000, this.fiveKText), true);

        this.soundOn.events.onInputDown.add(() => this.setSoundMode(false, this.soundOn), true);
        this.soundOff.events.onInputDown.add(() => this.setSoundMode(true, this.soundOff), true);

        _.forEach(this.startingBalanceTextOptions.children, (option) => {
            if(option.text.substring(1) == this.game.global.startingBalance) {
                option.fill = "#daa520";
            }
        });

        _.forEach(this.soundTextOptions.children, (option) => {
            if(option.text.substring(1) == this.game.global.startingBalance) {
                option.fill = "#daa520";
            }
        });

        this.game.global.muted ? this.soundOff.fill = "#daa520": this.soundOn.fill ="#daa520";
    }

    backToMenu() {
        this.game.state.start('menu');
    }

    setStartingBalance(amount: number, caller: Phaser.Text): void {
        this.startingBalanceTextOptions.children.forEach((text) => {
            text.fill = "#8B0000";
        });
        caller.fill = "#daa520";
        this.game.global.startingBalance = amount;
    }

    setSoundMode(mode: boolean, caller: Phaser.Text) {
        this.soundTextOptions.children.forEach((text) => {
            text.fill = "#8B0000";
        });
        caller.fill = "#daa520";
        this.game.sound.mute = mode;
        this.game.global.muted = mode;
    }
}
