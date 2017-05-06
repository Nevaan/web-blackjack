module WebBlackjack.State {
  export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(0, this.world.centerY + 40, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('menu-background', 'assets/images/menu-background.png');

      this.load.spritesheet('startButton', 'assets/images/buttons/start_button.png', 200, 40);
      this.load.spritesheet('optionsButton', 'assets/images/buttons/options_button.png', 200, 40);
      this.load.spritesheet('backButton', 'assets/images/buttons/back_button.png', 110, 35);

      this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }

    create() {
      this.game.state.start('menu');
    }
  }
}