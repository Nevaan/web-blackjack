var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.call(this);
        }
        Boot.prototype.preload = function () {
            this.load.image('preload-bar', 'assets/images/preload-bar.png');
        };
        Boot.prototype.create = function () {
            this.game.state.start('preload');
        };
        return Boot;
    })(Phaser.State);
    exports.Boot = Boot;
});
//# sourceMappingURL=Boot.js.map