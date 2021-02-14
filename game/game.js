var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />
var game = new ex.Engine({
    backgroundColor: ex.Color.fromHex('#ff5e40'),
    width: 800,
    height: 600,
});
// create an asset loader
var loader = new ex.Loader();
var resources = {
/* include resources here */
//txPlayer: new ex.Texture("assets/tex/player.png")
};
// queue resources for loading
for (var r in resources) {
    loader.addResource(resources[r]);
}
// uncomment loader after adding resources
game.start(loader).then(function () {
    // start your game!
});
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // start-up logic, called once
    MainMenu.prototype.onInitialize = function (engine) { };
    // each time the scene is entered (Engine.goToScene)
    MainMenu.prototype.onActivate = function () { };
    // each time the scene is exited (Engine.goToScene)
    MainMenu.prototype.onDeactivate = function () { };
    return MainMenu;
}(ex.Scene));
