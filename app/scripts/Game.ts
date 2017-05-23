/// <reference path="../vendor/phaser-official/typescript/phaser.d.ts"/>

import State = Phaser.State;
import {Preload} from "./state/Preload";
import {Menu} from "./state/Menu";
import {Main} from "./state/Main";
import {Options} from "./state/Options";
import {Boot} from "./state/Boot";

export class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO, "game-content");

        this.state.add('boot', Boot);
        this.state.add('preload', Preload);
        this.state.add('menu', Menu);
        this.state.add('main', Main);
        this.state.add('options', Options);
        this.state.start('boot');
    }
}

window.onload = () => {
    var game = new Game();
}