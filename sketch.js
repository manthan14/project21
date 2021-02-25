var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
thickness=random(22,83)
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  car.velocityX=speed;
}

function draw() {
  background(0);  
  
  if(wall.x-bullet.x(bullet.width+wall.width)/2){
bullet.velocityX=0;
var deformation=0.5* weight*speed*speed/22509;

if(deformation>180){

  wall.shapeColour=colour(255,0,0);

}
if(deformation<180 && deformation>100){

  wall.shapeColour=colour(230,230,0);

}

if(deformation>100){

wall.shapeColour=colour(0,255,0);

}

drawSprites();
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
 





}