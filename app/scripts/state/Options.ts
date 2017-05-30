import * as Phaser from "phaser";

export class Options extends Phaser.State {
    private game: Phaser.Game;
    private backButton: Phaser.Button;
    private startingBalanceText: Phaser.Text;
    private optionsHeader: Phaser.Text;

    constructor() {
        super();
    }

    create() {
        this.game.stage.backgroundColor = 0x000000;
        this.backButton = this.game.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
        this.optionsHeader = this.game.add.text(this.game.world.width / 2, 120, "Options", {
            font: "40px bree",
            fill: "#daa520",
            align: "center"
        });
        this.optionsHeader.anchor.set(0.5);
        this.startingBalanceText = this.game.add.text(this.game.world.width / 10, 180, "Starting balance: ",{
            font: "30px bree",
            fill: "#daa520",
            align: "center"
        });
        this.startingBalanceText.anchor.set(0);
    }

    backToMenu() {
        this.game.state.start('menu');
    }
}
