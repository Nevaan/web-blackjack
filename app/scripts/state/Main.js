var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports"], function (require, exports) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.call(this);
            //player: Model.Player;
            this.currentBet = 0;
            this.currentBalance = 0;
        }
        Main.prototype.init = function () {
            //this.player = new Model.Player();
        };
        Main.prototype.create = function () {
            this.stage.backgroundColor = 0x000000;
            this.backButton = this.add.button(30, 30, 'backButton', this.backToMenu, this, 2, 1, 0);
            this.createText();
        };
        Main.prototype.backToMenu = function () {
            this.game.state.start('menu');
        };
        Main.prototype.createText = function () {
            this.currentBalanceText = this.add.text(this.world.width - 300, this.world.height - 140, "Your balance: $ " + this.currentBalance, { font: "30px bree" });
            this.currentBalanceText.anchor.setTo(0);
            this.currentBalanceText.fill = '#daa520';
            this.currentBalanceText.align = 'center';
            this.currentBetText = this.add.text(this.world.width - 280, this.world.height - 105, "Current bet: $ " + this.currentBet, { font: "30px bree" });
            this.currentBetText.anchor.setTo(0);
            this.currentBetText.fill = '#daa520';
            this.currentBetText.align = 'center';
        };
        return Main;
    })(Phaser.State);
    exports.Main = Main;
});
//# sourceMappingURL=Main.js.map