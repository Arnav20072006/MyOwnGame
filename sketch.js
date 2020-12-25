var bg,bgImg;
var bullet,PakBullet,bulletImg;
var IndTank,IndTankImg;
var PakTank,PakTankImg; 
var PakSoldier,PakSoldierImg;
var PakSoldier2,PakSoldier2Img;
var ground;
var score = 0;
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var Count = 0;

function preload(){
   bgImg          = loadImage("images/Background.png");
   bulletImg      = loadImage("images/bullet1.png");
   IndTankImg     = loadImage("images/Indian Tank.png");
   PakTankImg     = loadImage("images/PakTank.png");
   PakSoldierImg  = loadImage("images/PakSoldier.png");
   PakSoldier2Img = loadImage("images/Soldier.png")
}


function setup() {
  createCanvas(1500,700);
   
   bg  = createSprite(850,350,1500,700);
   bg.addImage(bgImg);
   bg.scale = 3;
  
   ground = createSprite(750,650,1500,10); 
   ground.shapeColor = "red";
   ground.velocityX = -5; 
   
   PakSoldierGroup = new Group();
   PakBulletGroup  = new Group();
   bulletGroup     = new Group();

   IndTank = createSprite(120,590,10,10);
   IndTank.addImage(IndTankImg);
   IndTank.scale = 0.5;
   
}

function draw() {
   if(gameState === PLAY){
   textSize(20);
   text("Score : "+score,100,50);
    

  if(ground.x<750){
    ground.x = ground.width/2;
   }

   if(keyWentDown("space")){
     bullet1();
   }
  
  


   if(keyDown(RIGHT_ARROW)&&IndTank.x<400){
      IndTank.x = IndTank.x+5;
   }
   if(keyDown(LEFT_ARROW)&&IndTank.x>100){
      IndTank.x = IndTank.x-5;
   }

   if(bulletGroup.isTouching(PakSoldierGroup)){
      PakSoldierGroup.destroyEach();
      bulletGroup.destroyEach();
      score = score+5;
    }

   if(score === 30){
      gameState = END;
   }


   if(PakBulletGroup.isTouching(IndTank))
   {
      Count=Count+1;
      console.log(Count);
   }
    
   if(Count===10)
   {
      IndTank.destroy();
      text("You Lose", 300,300);
   }

  spawnSoldier();
  drawSprites();
  textSize(20);
  text("Score : "+score,100,100);
}
if(gameState === END){
   fill("red");
   textSize(20);
   text("Victory! GAME OVER", 750,350);
   IndTank.destroy();
   PakSoldierGroup.destroyEach();
}
}

function spawnSoldier(){
   if(frameCount % 120 === 0){
   PakSoldier = createSprite(1000,620,20,20);
   PakSoldier.addImage(PakSoldierImg);
   PakSoldier.scale = 0.3;
   PakSoldier.x = random(900,1400);
   PakSoldier.velocityX = 2;
   PakSoldierGroup.add(PakSoldier);

   PakBullet = createSprite(PakSoldier.x-10,PakSoldier.y-20,20,20);
   PakBullet.velocityX = -10;
   PakBullet.addImage(bulletImg);
   PakBullet.scale = 0.5;
   PakBulletGroup.add(PakBullet);
   } 
   
}

function bullet1(){
      
      bullet = createSprite(IndTank.x+110,IndTank.y-16,20,20);
      bullet.velocityX = 10;
      bullet.addImage(bulletImg);
      bullet.scale = 0.5;
      bulletGroup.add(bullet);
     
}

function bullet2(){
     
}


