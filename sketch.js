var car,wall;
var weight,speed;




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  wall = createSprite(1500,200,60,height/2);
  

}

function draw() {
  background(255,255,255);  

  if (car.speed*car.weight*0.5*car.speed/22500 < 100){
    car.shapecolor(0,250,0);
  }

  if (car.speed*car.weight*0.5*car.speed/22500 < 180 && car.speed*car.weight*0.5*car.speed/22500 == 100){
    car.shapecolor(230,230,0);
  }
  
  if (car.speed*weight*0.5*car.speed/22500 > 180){
    car.shapecolor(250,0,0);
  }

  if (car.isTouching(wall)){
    car.velocityX = 0;
  }









  drawSprites();

}