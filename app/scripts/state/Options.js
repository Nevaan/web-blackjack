var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Options = (function (_super) {
        __extends(Options, _super);
        function Options() {
            _super.call(this);
        }
        Options.prototype.create = function () {
            this.stage.backgroundColor = 0x000000;
            this.backButton = this.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
            // Options impl
        };
        Options.prototype.backToMenu = function () {
            this.game.state.start('menu');
        };
        return Options;
    })(Phaser.State);
    exports.Options = Options;
});
//# sourceMappingURL=Options.js.map