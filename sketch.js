
function preload(){
seaImg =  loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}
  


function setup(){
  createCanvas(400,400);
  sea = createSprite(75,25,100,100);
  ship = createSprite(200,200);
  ship.scale = 0.3;
  ship.addAnimation("sippic",shipImg1);
  sea.addImage(seaImg);
  sea.velocityX = -4;

 
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
 drawSprites();
}