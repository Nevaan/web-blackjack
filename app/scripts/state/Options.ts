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


    constructor() {
        super();
    }

    create() {
        this.game.stage.backgroundColor = 0x000000;
        this.startingBalanceTextOptions = this.game.add.group();
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

        this.fiveHundredText = this.game.add.text(100, 230, "$500", {
            font: "25px bree",
            fill: "#daa520",
            align: "center"
        }, this.startingBalanceTextOptions);

        this.oneKText = this.game.add.text(200, 230, "$1000", {
            font: "25px bree",
            fill: "#daa520",
            align: "center"
        }, this.startingBalanceTextOptions);

        this.twoKText = this.game.add.text(300, 230, "$2000", {
            font: "25px bree",
            fill: "#daa520",
            align: "center"
        }, this.startingBalanceTextOptions);

        this.fiveKText = this.game.add.text(400, 230, "$5000", {
            font: "25px bree",
            fill: "#daa520",
            align: "center"
        }, this.startingBalanceTextOptions);

        this.fiveHundredText.inputEnabled = true;
        this.oneKText.inputEnabled = true;
        this.twoKText.inputEnabled = true;
        this.fiveKText.inputEnabled = true;

        this.fiveHundredText.events.onInputDown.add(() => this.setStartingBalance(500, this.fiveHundredText), true);
        this.oneKText.events.onInputDown.add(() => this.setStartingBalance(1000, this.oneKText), true);
        this.twoKText.events.onInputDown.add(() => this.setStartingBalance(2000, this.twoKText), true);
        this.fiveKText.events.onInputDown.add(() => this.setStartingBalance(5000, this.fiveKText), true);

        _.forEach(this.startingBalanceTextOptions.children, (option) => {
            if(option.text.substring(1) == this.game.global.startingBalance) {
                option.fill = "#8B0000";
            }
        });
    }

    backToMenu() {
        this.game.state.start('menu');
    }

    setStartingBalance(amount: number, caller: Phaser.Text): void {
        this.startingBalanceTextOptions.children.forEach((text) => {
            text.fill = "#daa520";
        });
        caller.fill = "#8B0000";
        this.game.global.startingBalance = amount;
    }
}
