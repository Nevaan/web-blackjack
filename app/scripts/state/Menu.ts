import * as Phaser from "phaser";

export class Menu extends Phaser.State {
    private game: Phaser.Game;
    private background: Phaser.Sprite;
    private startButton: Phaser.Button;
    private optionsButton: Phaser.Button;

    constructor() {
        super();
    }

    create() {
        this.background = this.game.add.sprite(100, 50, 'menu-background');

        this.startButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 100, 'startButton', this.startGame, this, 2, 1, 0);
        this.startButton.anchor.set(0.5);
        this.optionsButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY + 150, 'optionsButton', this.options, this, 2, 1, 0);
        this.optionsButton.anchor.set(0.5);
    }

    startGame() {
        this.game.state.start('main');
    }

    options() {
        this.game.state.start('options');
    }
}