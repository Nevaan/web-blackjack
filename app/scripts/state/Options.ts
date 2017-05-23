export class Options extends Phaser.State {
    backButton: Phaser.Button;

    create() {
        this.stage.backgroundColor = 0x000000;
        this.backButton = this.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
        // Options impl
    }

    backToMenu() {
        this.game.state.start('menu');
    }
}