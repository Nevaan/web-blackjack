module WebBlackjack.State {
  export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;

    WebFontConfig = {
        google: {
          families: ['Bree Serif']
        }
    }


    preload() {
      this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('menu-background', 'assets/images/menu-background.png');
      
      // Load remaining assets here
      this.load.spritesheet('startButton', 'assets/images/buttons/start_button.png', 200, 40);
      this.load.spritesheet('optionsButton', 'assets/images/buttons/options_button.png', 200, 40);
      this.load.spritesheet('backButton', 'assets/images/buttons/back_button.png', 110, 35);

      this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
    }

    create() {
      this.game.state.start('menu');
    }
  }
}