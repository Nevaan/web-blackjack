module WebBlackjack.State {
  export class Main extends Phaser.State {
    backButton: Phaser.Button;
    currentBalanceText: Phaser.Text;

    create() {
      this.stage.backgroundColor = 0x000000;
      this.backButton = this.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
      this.createText();
    }

    backToMenu() {
      this.game.state.start('menu');
    }

    createText() {
      this.currentBalanceText = this.add.text(this.world.width - 100, this.world.height - 100, "Your balance: $", "");
      this.currentBalanceText.anchor.setTo(1.0);

      this.currentBalanceText.fontSize = 20;
      this.currentBalanceText.fill = '#daa520';

      this.currentBalanceText.align = 'center';
    }

  }
}