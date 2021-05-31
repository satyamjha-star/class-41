var  database;
var gameState = 0;
var playerCount;
var game, player, form;
var distance = 0;
var allPlayers;
var car1,car2,car3,car4,cars;
var c1, c2, c3, c4, road1, road2;
 function preload(){
c1= loadImage("images/car1.png");
c2= loadImage("images/car2.png");
c3= loadImage("images/car3.png");
c4= loadImage("images/car4.png");

road1 = loadImage("images/track.jpg")
road2 = loadImage("images/ground.png")

 }
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
game =  new Game(); 
game.getState();
game.start();

  
}

function draw(){
  background("white");
  if (playerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
    game.play();
 }
 
if (gameState===2){
game.end();

}
}



