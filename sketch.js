
var movingRect,fixedRect,gameobject1



function setup() {


  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 80);
  movingRect.velocityX=3
  fixedRect=createSprite(600, 200, 80, 50);
  fixedRect.velocityX=-3
  gameobject1=createSprite(200, 200, 50, 80);
  gameobject1.shapeColor="green"
}

function draw() {
  background(0); 

 // movingRect.x=mouseX
 // movingRect.y=mouseY 
  collide(movingRect,fixedRect)

  
  drawSprites();
}

