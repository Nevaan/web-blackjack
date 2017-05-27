var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        function Menu() {
            _super.call(this);
        }
        Menu.prototype.create = function () {
            this.background = this.add.sprite(100, 50, 'menu-background');
            this.startButton = this.add.button(this.world.centerX, this.world.centerY + 100, 'startButton', this.startGame, this, 2, 1, 0);
            this.startButton.anchor.set(0.5);
            this.optionsButton = this.add.button(this.world.centerX, this.world.centerY + 150, 'optionsButton', this.options, this, 2, 1, 0);
            this.optionsButton.anchor.set(0.5);
        };
        Menu.prototype.startGame = function () {
            this.game.state.start('main');
        };
        Menu.prototype.options = function () {
            this.game.state.start('options');
        };
        return Menu;
    })(Phaser.State);
    exports.Menu = Menu;
});
//# sourceMappingURL=Menu.js.map