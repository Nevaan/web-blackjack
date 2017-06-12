declare function require(name:string);
import * as Phaser from "phaser";
import {Boot} from "./state/Boot";
import {Preload} from "./state/Preload";
import {Menu} from "./state/Menu";
import {Main} from "./state/Main";
import {Options} from "./state/Options";
require("../styles/main.less");

class WebBlackjack {
    game: Phaser.Game;

    constructor(){
        this.game = new Phaser.Game(800, 600, Phaser.WEBGL, "game-content");

        this.game.global = {
            startingBalance: 1000,
            muted: false,
            deckAmount: 1
        }

        this.game.state.add('boot', Boot, false);
        this.game.state.add('preload', Preload, false);
        this.game.state.add('menu', Menu, false);
        this.game.state.add('main', Main, false);
        this.game.state.add('options', Options, false);

        this.game.state.start('boot', true, true);
    }


}

window.onload = () => {
    var game = new WebBlackjack();
}