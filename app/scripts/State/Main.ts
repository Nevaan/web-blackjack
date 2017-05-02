module WebBlackjack.State {
  export class Main extends Phaser.State {
    backButton: Phaser.Button;

    create() {
      this.stage.backgroundColor = 0x000000;
      this.backButton = this.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
    }

    backToMenu() {
      this.game.state.start('menu');
    }

  }
}