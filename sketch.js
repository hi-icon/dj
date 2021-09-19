
var path,Runner,coin;
var pathImg,RunnerImg;

function preload(){
  pathImg = loadImage("path.png");
  RunnerImg= loadAnimation("Runner-1.png","Runner-1.png",
                            "Runner-2.png","Runner-1.png");
  coinImg=loadImage("coin.png");
}

function setup(){
  createCanvas(400,200);
  background("blue");

  // Moving background
  path=createSprite(200,400);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  
  Runner= createSprite(130,200,30,30);
  Runner.addAnimation("movingRunner",RunnerImg);
  Runner.scale =0.10;
  
coin=createSprite(200,5,20,20)
coin.addImage(coinImg);
coin.scale=0.2;
coin.velocityY=2;
}

function draw() {
  background(0);
  path.velocityY = 3;

  
  //code to reset the background
  if(path.y < 400 ){
    path.y =hight/2;
  }
    





  drawSprites();
}