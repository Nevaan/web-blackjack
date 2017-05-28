import * as Phaser from "phaser";

export class Boot extends Phaser.State {
    game: Phaser.Game;
    constructor(){super()};

    preload() {

        this.game.load.image('preload-bar', 'assets/images/preload-bar.png');
    }

    create() {
        this.game.state.start('preload');
    }
}