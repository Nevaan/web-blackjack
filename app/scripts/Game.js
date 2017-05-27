///<reference path="state/Boot"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var WebBlackjack;
    (function (WebBlackjack) {
        var TitleScreenState = (function (_super) {
            __extends(TitleScreenState, _super);
            function TitleScreenState() {
                _super.call(this);
            }
            TitleScreenState.prototype.preload = function () {
                this.load.image("title", "TitleScreen.png");
            };
            TitleScreenState.prototype.create = function () {
                this.titleScreenImage = this.add.sprite(0, 0, "title");
                this.input.onTap.addOnce(this.titleClicked, this); // <-- that um, this is extremely important
            };
            TitleScreenState.prototype.titleClicked = function () {
                this.game.state.start("GameRunningState");
            };
            return TitleScreenState;
        })(Phaser.State);
        WebBlackjack.TitleScreenState = TitleScreenState;
        var GameRunningState = (function (_super) {
            __extends(GameRunningState, _super);
            function GameRunningState() {
                _super.call(this);
            }
            GameRunningState.prototype.create = function () {
                var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
                this.textValue = this.game.add.text(0, 0, "0", style);
                this.updateCount = 0;
            };
            GameRunningState.prototype.update = function () {
                this.textValue.text = (this.updateCount++).toString();
            };
            GameRunningState.prototype.render = function () {
                this.game.debug.text("This is drawn in render()", 0, 80);
            };
            return GameRunningState;
        })(Phaser.State);
        WebBlackjack.GameRunningState = GameRunningState;
        var Game = (function () {
            function Game() {
                this.game = new Phaser.Game(800, 600, Phaser.WEBGL, "game-content");
                this.game.state.add('TitleScreenState', TitleScreenState, false);
                this.game.state.add('GameRunningState', GameRunningState, false);
                //this.game.state.add('preload', Preload, false);
                //this.game.state.add('menu', Menu, false);
                //this.game.state.add('main', Main, false);
                //this.game.state.add('options', Options, false);
                this.game.state.start('TitleScreenState', true, true);
            }
            return Game;
        })();
        WebBlackjack.Game = Game;
    })(WebBlackjack = exports.WebBlackjack || (exports.WebBlackjack = {}));
    window.onload = function () {
        var game = new WebBlackjack.Game();
    };
});
/*
module GameFromScratch {
    export class TitleScreenState extends Phaser.State {
        game: Phaser.Game;

        constructor() {
            super();
        }

        titleScreenImage: Phaser.Sprite;

        preload() {
            this.load.image("title", "TitleScreen.png");
        }

        create() {
            this.titleScreenImage = this.add.sprite(0, 0, "title");
            this.input.onTap.addOnce(this.titleClicked, this); // <-- that um, this is extremely important
        }

        titleClicked() {
            this.game.state.start("GameRunningState");
        }
    }

    export class GameRunningState extends Phaser.State {
        constructor() {
            super();
        }

        textValue: Phaser.Text;
        updateCount: number;

        create() {
            var style = {font: "65px Arial", fill: "#ff0000", align: "center"};
            this.textValue = this.game.add.text(0, 0, "0", style);
            this.updateCount = 0;
        }

        update() {
            this.textValue.text = (this.updateCount++).toString();
        }

        render() {
            this.game.debug.text("This is drawn in render()", 0, 80);
        }
    }

    export class SimpleGame {
        game: Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(800, 600, Phaser.WEBGL, 'game-content');

            this.game.state.add("GameRunningState", GameRunningState, false);
            this.game.state.add("TitleScreenState", TitleScreenState, false);
            this.game.state.start("TitleScreenState", true, true);
        }

    }
}

window.onload = () => {
    var game = new GameFromScratch.SimpleGame();
};*/
//# sourceMappingURL=Game.js.map