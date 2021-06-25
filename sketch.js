
var car, weight, speed, wall



function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed
  wall=createSprite(1500,200,60,200)

}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500
    if(deformation>180){
      car.shapeColor="red"
    }

    if(deformation>80&&deformation<180){
      car.shapeColor="yellow"
    }

    if(deformation<80){
      car.shapeColor="green"
    }


  }
  drawSprites();
}