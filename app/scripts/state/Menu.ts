module WebBlackjack {
    export class Menu extends Phaser.State {

        background: Phaser.Sprite;
        startButton: Phaser.Button;
        optionsButton: Phaser.Button;

        constructor() {
            super();
        }

        create() {
            this.background = this.add.sprite(100, 50, 'menu-background');

            this.startButton = this.add.button(this.world.centerX, this.world.centerY + 100, 'startButton', this.startGame, this, 2, 1, 0);
            this.startButton.anchor.set(0.5);
            this.optionsButton = this.add.button(this.world.centerX, this.world.centerY + 150, 'optionsButton', this.options, this, 2, 1, 0);
            this.optionsButton.anchor.set(0.5);
        }

        startGame() {
            this.game.state.start('main');
        }

        options() {
            this.game.state.start('options');
        }
    }
}
