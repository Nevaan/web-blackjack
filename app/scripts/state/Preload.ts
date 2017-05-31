import * as Phaser from "phaser";

export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;
    private game: Phaser.Game;

    constructor() {
        super();
    }

    preload() {
        this.preloadBar = this.game.add.sprite(0, this.game.world.centerY + 40, 'preload-bar');
        this.game.load.setPreloadSprite(this.preloadBar);

        this.game.load.image('menu-background', 'assets/images/menu-background.png');

        this.game.load.spritesheet('startButton', 'assets/images/buttons/start_button.png', 200, 40);
        this.game.load.spritesheet('optionsButton', 'assets/images/buttons/options_button.png', 200, 40);
        this.game.load.spritesheet('backButton', 'assets/images/buttons/back_button.png', 110, 35);
        this.game.load.image('casinoTable', 'assets/images/table.png', 799, 333);
        this.game.load.image('cardBack', 'assets/images/card_back.png', 72, 100);

    }

    create() {
            this.game.state.start('menu');
    }
}