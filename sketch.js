var balloon;
var database;
var position;
var backgroundImg;
var balloonImg;

function preload(){
   backgroundImg = loadImage("pro-C35 images/Hot Air Ballon-01.png");
   balloonImg = loadImage("pro-C35 images/Hot Air Ballon-03.png");
}



function setup() {
  createCanvas(1200,700);
  balloon = createSprite(400, 200, 50, 50);
  //balloon.addImage("balloonImg");
  
}

function draw() {
  background(backgroundImg);  
 
  balloon.addImage("balloonImg");
  drawSprites();
}