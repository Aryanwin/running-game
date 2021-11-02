var Jake,Jake_running
var path, pathImage


function preload(){
  Jake_running = loadAnimation("Runner-1.png", "Runner-2.png")
  pathImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY = 4;
  path.scale = 1.2;

  boundary = createSprite (350,200,20,400);
  boundary.visible = false;

  boundary2 = createSprite (50,200,20,400);
  boundary.visible = false;
  
  Jake = createSprite(Mouse.X,300,50,50);
  Jake.scale = 0.05
  Jake.addAnimation("running", Jake_running);
}

function draw() {
  background(0);

  if(path.y > 400){
    path.y= height/2
  }
  Jake.collide(boundary);
  Jake.collide(boundary2);
drawSprites();
    }
