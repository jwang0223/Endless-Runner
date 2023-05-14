//***************************************** */
// Jackie Wang
// Endless Runner- Human Catcher
// Took 40 hours 
// Mods added****************************** */
// For this game I use multiple obstalces that are randomly respawned. 
// Often time game only have one or two obstacles at the same time
// But by adding additonal obstaceles to the game it brings in the challenges 
// And bring the player to a better performance by asking them perform a harder task than before
// I also use music I made over the Halloween although it might seem that it doesn't fit the theme that well
// But I wanted to show case my music idea as the human are tend to be evil and scary to the animals
// Making a endless runner game have many challenges as I want the players to feel like they are actually trying to escape
// By adding so many obstacles and adding a scary theme music to the game 
// The player are able to feel and relate to the turtle emotionals as it is scary and horrifying 
//I am pround of my programming but I don't know how to implment actions character/sprite movement to the game
// I saw someone uses multiple sprite in a same png to achieve it 
// But I didn't have time to implment it further more it seems way too complicated for my leve 
// Something new I learned is implmenting obstacles as I learn some of the stuff in class but doing addiontial research has had me 
// I am pround of the art I make because I tend to be a drawer and I never really draw on my laptop or in a software before
// For a first time user I think I implmented my idea pretty well
// I do want to set a timer to the game but I did not know how to track the time and I also did not have the time to do it
// Source For playBackground: https://www.artstation.com/artwork/4bbOBL
let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 700,
    physics: {
      default: "arcade"
    },
    
    scene: [ Menu, Play, Creator, Rule ]
    
  }

let cursors;
let currentScene = 0;
const SCALE = 0.5;
const tileSize = 35;

let game = new Phaser.Game(config);


let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keySPACE, keyRULE, keyMENU, keyRIGHT, keyLEFT, keyS, KeyW, keyQ;