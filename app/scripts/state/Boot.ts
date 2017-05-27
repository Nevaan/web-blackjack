module WebBlackjack {
    export class Boot extends Phaser.State {

        constructor() {
            super();
        }

        preload() {
            this.load.image('preload-bar', 'assets/images/preload-bar.png');
        }

        create() {
            this.game.state.start('preload');
        }
    }
}