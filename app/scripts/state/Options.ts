import * as Phaser from "phaser";

export class Options extends Phaser.State {
    private game: Phaser.Game;
    private backButton: Phaser.Button;

    constructor() {
        super();
    }

    create() {
        this.game.stage.backgroundColor = 0x000000;
        this.backButton = this.game.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
        // Options impl
    }

    backToMenu() {
        this.game.state.start('menu');
    }
}
