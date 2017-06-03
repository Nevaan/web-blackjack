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

        this.game.load.image('clubs_A', 'assets/images/cards/clubs_ace.png', 72, 100);
        this.game.load.image('clubs_2', 'assets/images/cards/clubs_two.png', 72, 100);
        this.game.load.image('clubs_3', 'assets/images/cards/clubs_three.png', 72, 100);
        this.game.load.image('clubs_4', 'assets/images/cards/clubs_four.png', 72, 100);
        this.game.load.image('clubs_5', 'assets/images/cards/clubs_five.png', 72, 100);
        this.game.load.image('clubs_6', 'assets/images/cards/clubs_six.png', 72, 100);
        this.game.load.image('clubs_7', 'assets/images/cards/clubs_seven.png', 72, 100);
        this.game.load.image('clubs_8', 'assets/images/cards/clubs_eight.png', 72, 100);
        this.game.load.image('clubs_9', 'assets/images/cards/clubs_nine.png', 72, 100);
        this.game.load.image('clubs_10', 'assets/images/cards/clubs_ten.png', 72, 100);
        this.game.load.image('clubs_J', 'assets/images/cards/clubs_jack.png', 72, 100);
        this.game.load.image('clubs_Q', 'assets/images/cards/clubs_queen.png', 72, 100);
        this.game.load.image('clubs_K', 'assets/images/cards/clubs_king.png', 72, 100);

        this.game.load.image('spades_A', 'assets/images/cards/spades_ace.png', 72, 100);
        this.game.load.image('spades_2', 'assets/images/cards/spades_two.png', 72, 100);
        this.game.load.image('spades_3', 'assets/images/cards/spades_three.png', 72, 100);
        this.game.load.image('spades_4', 'assets/images/cards/spades_four.png', 72, 100);
        this.game.load.image('spades_5', 'assets/images/cards/spades_five.png', 72, 100);
        this.game.load.image('spades_6', 'assets/images/cards/spades_six.png', 72, 100);
        this.game.load.image('spades_7', 'assets/images/cards/spades_seven.png', 72, 100);
        this.game.load.image('spades_8', 'assets/images/cards/spades_eight.png', 72, 100);
        this.game.load.image('spades_9', 'assets/images/cards/spades_nine.png', 72, 100);
        this.game.load.image('spades_10', 'assets/images/cards/spades_ten.png', 72, 100);
        this.game.load.image('spades_J', 'assets/images/cards/spades_jack.png', 72, 100);
        this.game.load.image('spades_Q', 'assets/images/cards/spades_queen.png', 72, 100);
        this.game.load.image('spades_K', 'assets/images/cards/spades_king.png', 72, 100);

        this.game.load.image('diamonds_A', 'assets/images/cards/diamonds_ace.png', 72, 100);
        this.game.load.image('diamonds_2', 'assets/images/cards/diamonds_two.png', 72, 100);
        this.game.load.image('diamonds_3', 'assets/images/cards/diamonds_three.png', 72, 100);
        this.game.load.image('diamonds_4', 'assets/images/cards/diamonds_four.png', 72, 100);
        this.game.load.image('diamonds_5', 'assets/images/cards/diamonds_five.png', 72, 100);
        this.game.load.image('diamonds_6', 'assets/images/cards/diamonds_six.png', 72, 100);
        this.game.load.image('diamonds_7', 'assets/images/cards/diamonds_seven.png', 72, 100);
        this.game.load.image('diamonds_8', 'assets/images/cards/diamonds_eight.png', 72, 100);
        this.game.load.image('diamonds_9', 'assets/images/cards/diamonds_nine.png', 72, 100);
        this.game.load.image('diamonds_10', 'assets/images/cards/diamonds_ten.png', 72, 100);
        this.game.load.image('diamonds_J', 'assets/images/cards/diamonds_jack.png', 72, 100);
        this.game.load.image('diamonds_Q', 'assets/images/cards/diamonds_queen.png', 72, 100);
        this.game.load.image('diamonds_K', 'assets/images/cards/diamonds_king.png', 72, 100);

        this.game.load.image('hearts_A', 'assets/images/cards/hearts_ace.png', 72, 100);
        this.game.load.image('hearts_2', 'assets/images/cards/hearts_two.png', 72, 100);
        this.game.load.image('hearts_3', 'assets/images/cards/hearts_three.png', 72, 100);
        this.game.load.image('hearts_4', 'assets/images/cards/hearts_four.png', 72, 100);
        this.game.load.image('hearts_5', 'assets/images/cards/hearts_five.png', 72, 100);
        this.game.load.image('hearts_6', 'assets/images/cards/hearts_six.png', 72, 100);
        this.game.load.image('hearts_7', 'assets/images/cards/hearts_seven.png', 72, 100);
        this.game.load.image('hearts_8', 'assets/images/cards/hearts_eight.png', 72, 100);
        this.game.load.image('hearts_9', 'assets/images/cards/hearts_nine.png', 72, 100);
        this.game.load.image('hearts_10', 'assets/images/cards/hearts_ten.png', 72, 100);
        this.game.load.image('hearts_J', 'assets/images/cards/hearts_jack.png', 72, 100);
        this.game.load.image('hearts_Q', 'assets/images/cards/hearts_queen.png', 72, 100);
        this.game.load.image('hearts_K', 'assets/images/cards/hearts_king.png', 72, 100);
    }

    create() {
            this.game.state.start('menu');
    }
}