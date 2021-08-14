var ship,ship_running,edges
var seaimage

function preload(){
  seaimage = loadImage("sea.png")
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200,20,20)
  sea.addImage("sea",seaimage)
  sea.scale=0.3
  ship = createSprite(100,180,10,10)
  ship.addAnimation("running",ship_running)
  edges = createEdgeSprites()
  ship.scale = 0.2;
  //ship.x = 50
  invisiblesea=createSprite(200,270,400,10)
  invisiblesea.visible=false
 
sea.velocityX=-5  
}

function draw() {
 
  background("white")
  console.log(ship.y)
  if(keyDown("space")&&ship.y>=140){
  ship.velocityY=-5;
  }
  ship.velocityY = ship.velocityY + 0.5
  sea.velocityX=-3
 if(sea.x<0){
 sea.x=sea.width/8
 }
ship.collide(invisiblesea)
 drawSprites()
}
