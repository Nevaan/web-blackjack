module WebBlackjack.State {
  export class Main extends Phaser.State {
    currentBet: number = 0;
    currentBalance: number = 0;
    backButton: Phaser.Button;
    currentBalanceText: Phaser.Text;
    currentBetText: Phaser.Text;

    create() {
      this.stage.backgroundColor = 0x000000;
      this.backButton = this.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
      this.createText();
    }

    backToMenu() {
      this.game.state.start('menu');
    }

    createText() {
      this.currentBalanceText = this.add.text(this.world.width - 300, this.world.height - 140, "Your balance: $ " + this.currentBalance, { font: "30px bree"});
      this.currentBalanceText.anchor.setTo(0);

      this.currentBalanceText.fill = '#daa520';
      this.currentBalanceText.align = 'center';

      this.currentBetText = this.add.text(this.world.width - 280, this.world.height - 105, "Current bet: $ " + this.currentBet, { font: "30px bree"});
      this.currentBetText.anchor.setTo(0);

      this.currentBetText.fill = '#daa520';
      this.currentBetText.align = 'center';

    }

  }
}