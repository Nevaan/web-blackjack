import * as Phaser from "phaser";

export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;
    private game: Phaser.Game;

    constructor() {
        super();
    }

    preload() {
        this.preloadBar = this.game.add.sprite(85, this.game.world.centerY + 40, 'preload-bar');
        this.game.load.setPreloadSprite(this.preloadBar);

        this.game.load.image('menu-background', 'assets/images/menu-background.png');

        this.game.load.spritesheet('startButton', 'assets/images/buttons/start_button.png', 200, 40);
        this.game.load.spritesheet('optionsButton', 'assets/images/buttons/options_button.png', 200, 40);
        this.game.load.spritesheet('backButton', 'assets/images/buttons/back_button.png', 110, 35);
        this.game.load.image('casinoTable', 'assets/images/table.png', 799, 333);
        this.game.load.image('cardBack', 'assets/images/card_back.png', 72, 100);

        this.game.load.image('clubs_ace', 'assets/images/cards/clubs_ace.png', 72, 100);
        this.game.load.image('clubs_two', 'assets/images/cards/clubs_two.png', 72, 100);
        this.game.load.image('clubs_three', 'assets/images/cards/clubs_three.png', 72, 100);
        this.game.load.image('clubs_four', 'assets/images/cards/clubs_four.png', 72, 100);
        this.game.load.image('clubs_five', 'assets/images/cards/clubs_five.png', 72, 100);
        this.game.load.image('clubs_six', 'assets/images/cards/clubs_six.png', 72, 100);
        this.game.load.image('clubs_seven', 'assets/images/cards/clubs_seven.png', 72, 100);
        this.game.load.image('clubs_eight', 'assets/images/cards/clubs_eight.png', 72, 100);
        this.game.load.image('clubs_nine', 'assets/images/cards/clubs_nine.png', 72, 100);
        this.game.load.image('clubs_ten', 'assets/images/cards/clubs_ten.png', 72, 100);
        this.game.load.image('clubs_jack', 'assets/images/cards/clubs_jack.png', 72, 100);
        this.game.load.image('clubs_queen', 'assets/images/cards/clubs_queen.png', 72, 100);
        this.game.load.image('clubs_king', 'assets/images/cards/clubs_king.png', 72, 100);

        this.game.load.image('spades_ace', 'assets/images/cards/spades_ace.png', 72, 100);
        this.game.load.image('spades_two', 'assets/images/cards/spades_two.png', 72, 100);
        this.game.load.image('spades_three', 'assets/images/cards/spades_three.png', 72, 100);
        this.game.load.image('spades_four', 'assets/images/cards/spades_four.png', 72, 100);
        this.game.load.image('spades_five', 'assets/images/cards/spades_five.png', 72, 100);
        this.game.load.image('spades_six', 'assets/images/cards/spades_six.png', 72, 100);
        this.game.load.image('spades_seven', 'assets/images/cards/spades_seven.png', 72, 100);
        this.game.load.image('spades_eight', 'assets/images/cards/spades_eight.png', 72, 100);
        this.game.load.image('spades_nine', 'assets/images/cards/spades_nine.png', 72, 100);
        this.game.load.image('spades_ten', 'assets/images/cards/spades_ten.png', 72, 100);
        this.game.load.image('spades_jack', 'assets/images/cards/spades_jack.png', 72, 100);
        this.game.load.image('spades_queen', 'assets/images/cards/spades_queen.png', 72, 100);
        this.game.load.image('spades_king', 'assets/images/cards/spades_king.png', 72, 100);

        this.game.load.image('diamonds_ace', 'assets/images/cards/diamonds_ace.png', 72, 100);
        this.game.load.image('diamonds_two', 'assets/images/cards/diamonds_two.png', 72, 100);
        this.game.load.image('diamonds_three', 'assets/images/cards/diamonds_three.png', 72, 100);
        this.game.load.image('diamonds_four', 'assets/images/cards/diamonds_four.png', 72, 100);
        this.game.load.image('diamonds_five', 'assets/images/cards/diamonds_five.png', 72, 100);
        this.game.load.image('diamonds_six', 'assets/images/cards/diamonds_six.png', 72, 100);
        this.game.load.image('diamonds_seven', 'assets/images/cards/diamonds_seven.png', 72, 100);
        this.game.load.image('diamonds_eight', 'assets/images/cards/diamonds_eight.png', 72, 100);
        this.game.load.image('diamonds_nine', 'assets/images/cards/diamonds_nine.png', 72, 100);
        this.game.load.image('diamonds_ten', 'assets/images/cards/diamonds_ten.png', 72, 100);
        this.game.load.image('diamonds_jack', 'assets/images/cards/diamonds_jack.png', 72, 100);
        this.game.load.image('diamonds_queen', 'assets/images/cards/diamonds_queen.png', 72, 100);
        this.game.load.image('diamonds_king', 'assets/images/cards/diamonds_king.png', 72, 100);

        this.game.load.image('hearts_ace', 'assets/images/cards/hearts_ace.png', 72, 100);
        this.game.load.image('hearts_two', 'assets/images/cards/hearts_two.png', 72, 100);
        this.game.load.image('hearts_three', 'assets/images/cards/hearts_three.png', 72, 100);
        this.game.load.image('hearts_four', 'assets/images/cards/hearts_four.png', 72, 100);
        this.game.load.image('hearts_five', 'assets/images/cards/hearts_five.png', 72, 100);
        this.game.load.image('hearts_six', 'assets/images/cards/hearts_six.png', 72, 100);
        this.game.load.image('hearts_seven', 'assets/images/cards/hearts_seven.png', 72, 100);
        this.game.load.image('hearts_eight', 'assets/images/cards/hearts_eight.png', 72, 100);
        this.game.load.image('hearts_nine', 'assets/images/cards/hearts_nine.png', 72, 100);
        this.game.load.image('hearts_ten', 'assets/images/cards/hearts_ten.png', 72, 100);
        this.game.load.image('hearts_jack', 'assets/images/cards/hearts_jack.png', 72, 100);
        this.game.load.image('hearts_queen', 'assets/images/cards/hearts_queen.png', 72, 100);
        this.game.load.image('hearts_king', 'assets/images/cards/hearts_king.png', 72, 100);

        this.game.load.audio('token_select', 'assets/audio/token_sound.mp3');
        this.game.load.audio('deal_card', 'assets/audio/deal_card.wav');
        this.game.load.audio('click_button', 'assets/audio/switch.mp3');

        this.game.sound.mute = this.game.global.muted;
    }

    create() {
        this.game.state.start('menu');
    }
}