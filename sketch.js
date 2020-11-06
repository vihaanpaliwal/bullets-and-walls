var thickness,wall;
var speed,weight;






function setup() {
  createCanvas(1600,400);

  
thickness=random(22,83)
 speed=random(223,321);
  weight=random(30,52);

  wall = createSprite(1200,283,thickness,height/2);
  wall.shapeColor=(80,80,80);
  car.velocityX=50;
  
}

function draw() {
  background(0);
  
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
  var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage > 10){
   bullet.shapeColor=color(255,0,0)
    }
  
  }
    if(damage < 10){
      bullet.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}