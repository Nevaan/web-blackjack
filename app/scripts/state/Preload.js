var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            _super.call(this);
        }
        Preload.prototype.preload = function () {
            this.preloadBar = this.add.sprite(0, this.world.centerY + 40, 'preload-bar');
            this.load.setPreloadSprite(this.preloadBar);
            this.load.image('menu-background', 'assets/images/menu-background.png');
            this.load.spritesheet('startButton', 'assets/images/buttons/start_button.png', 200, 40);
            this.load.spritesheet('optionsButton', 'assets/images/buttons/options_button.png', 200, 40);
            this.load.spritesheet('backButton', 'assets/images/buttons/back_button.png', 110, 35);
        };
        Preload.prototype.create = function () {
            var _this = this;
            this.game.time.events.add(Phaser.Timer.SECOND, function () {
                _this.game.state.start('menu');
            }, this);
        };
        return Preload;
    })(Phaser.State);
    exports.Preload = Preload;
});
//# sourceMappingURL=Preload.js.map