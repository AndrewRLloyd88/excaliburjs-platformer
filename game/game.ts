/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />

let game = new ex.Engine({
  backgroundColor: ex.Color.fromHex('#ff5e40'),
  width: 800,
  height: 600,
});

// create an asset loader
let loader = new ex.Loader();
loader.playButtonText = 'Start the best game ever';
// loader.startButtonFactory = () => {
//   let myButton = document.createElement('button');
//   myButton.textContent = 'The best button';
//   return myButton;
// };
let resources = {
  /* include resources here */
  //txPlayer: new ex.Texture("assets/tex/player.png")
};

// queue resources for loading
for (let r in resources) {
  loader.addResource(resources[r]);
}

// uncomment loader after adding resources
game.start(loader).then(() => {
  // start your game!
});
