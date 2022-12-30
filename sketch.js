var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost =createSprite(200,150);
  ghost.addAnimation("ghost",ghostImg);
 ghost.velocityY =0.5;

 gameOver = createSprite(300,100);
 gameOver.addImage(gameOverImg);

 restart =createSprite(300,100);
 restart.addImage(restartImg);

 gameOver.scale =0.5;
 restart.scale = 0.5;

 gameOver.visible = false;
 restart.visible = false;

invisibleBlock = createSprite(100,190,300,10);
invisibleBlock.visible = false;

climbersGroup =new Group();
doorsGroup = new Group();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
}
