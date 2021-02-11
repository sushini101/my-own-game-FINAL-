var fish, fishIMG, fishG
var bg, bgIMG
var rod, rodIMG, rodG
var shark, sharkIMG, sharkG
var jelly, jellyIMG, jellyG
var seaweed, seaweedIMG, seaweedG
var rock, rockIMG, rockG
var lives=3;
var gameState="PLAY";
var over, overIMG;

function preload(){

  fishIMG=loadImage("images/fish.png");
  bgIMG=loadImage("images/background.png");
  rodIMG=loadImage("images/FishingRod (2).png");
  jellyIMG=loadImage("images/jellyfish.png");
  rockIMG=loadImage("images/rock.png");
  sharkIMG=loadImage("images/shark.png");
  seaweedIMG=loadImage("images/seaweed.png");
  overIMG=loadImage("images/over.png");

fishG=new Group();
rodG=new Group();
sharkG=new Group();
rockG=new Group()
jellyG=new Group();
seaweedG=new Group();


}


function setup() {
  createCanvas(1300,700);
  
  bg = createSprite(1300,-700,30,30);
  bg.addImage(bgIMG);
  bg.scale=4.5;
  bg.x=bg.width/2;
  bg.velocityX=-5;


  fish = createSprite(200,450,5,5);
  fish.addImage(fishIMG);
  fish.scale=0.4;
 fish.setCollider("rectangle", 0,0, fish.width-300, fish.height-200);
  
}

function draw() {
  background("black");  

if (gameState==="PLAY"){

  if (keyDown(UP_ARROW)){
    fish.y=fish.y-5;
  }

  if (keyDown(DOWN_ARROW)){
    fish.y=fish.y+5;
  }

  if (bg.x<0){
bg.x=bg.width/2;
  }


if (frameCount%90===0){

  var rand=Math.round(random(1,4));


  if (rand===1){
    jellyfishfunc();
  }
else if (rand===2){
  rockfunc();
}
else if(rand===3){
  sharkfunc();
}
 else if(rand===4){
  seaweedfunc();
 }
}

if(fish.isTouching(jellyG)){
  lives=lives-1;
  jellyG.destroyEach();
  }
  
  if(fish.isTouching(rockG)){
    lives=lives-1;
    rockG.destroyEach();
    }
  
    if(fish.isTouching(sharkG)){
      lives=lives-1;
      sharkG.destroyEach();
      }
  
      if(fish.isTouching(seaweedG)){
        lives=lives-1;
        seaweedG.destroyEach();
        }

}
else if(gameState==="END"){
  bg.velocityX=0;
  over=createSprite(650,350, 10,10);
  over.addImage(overIMG);
  jellyG.destroyEach();
  sharkG.destroyEach();
  seaweedG.destroyEach();
  rockG.destroyEach();
}
  
  
if(lives===0){
  gameState="END";
  }



console.log(lives);
  drawSprites();

  textSize(50);
  fill("white");
  text("Lives: "+ lives, 1100,50);
  
}


function jellyfishfunc(){
  
  jelly= createSprite(1300, 500, 10,10);
  jelly.y=Math.round(random(50,550));
  jelly.addImage(jellyIMG);
  jelly.velocityX=-5;
  jelly.scale=0.4;
  jellyG.add(jelly);
  jelly.setCollider("circle", 0,0, 200);
}

function rockfunc(){

  rock=createSprite(1300, 550, 10, 10);
  rock.addImage(rockIMG);
  rock.velocityX=-5;
  rockG.add(rock);
  rock.setCollider("circle", 0, 0, 100);

}

function sharkfunc(){

  shark=createSprite(1300,500,10,10);
  shark.y=Math.round(random(50,500));
  shark.addImage(sharkIMG);
  shark.velocityX=-5;
  shark.scale=0.9;
  sharkG.add(shark);
  shark.setCollider("rectangle", 0,0, shark.width-120, shark.height-200);

}

function seaweedfunc(){
  
    seaweed=createSprite(1300,550,10,10);
    seaweed.addImage(seaweedIMG);
    seaweed.velocityX=-5;
    seaweed.setCollider("rectangle",0,0, seaweed.width-70, seaweed.height-150);
    seaweedG.add(seaweed);
  
  }