var tower,towerImg
var doorImg
var doorGroup
var climberImg
var climberGroup
var ghost,ghostImg
var block
var blockGroup
var gameState="play"
var sound

function preload(){
towerImg=loadImage("tower.png")
doorImg=loadImage("door.png")
climberImg=loadImage("climber.png")
ghostImg=loadImage("ghost-standing.png")
sound=loadSound("spooky.wav")




}

function setup(){
createCanvas(600,600);
  
  tower=createSprite(300,300,300,300);
  tower.addImage("towerImage",towerImg);
  tower.velocityY=2
  
  doorGroup= new Group();
  climberGroup= new Group();
  blockGroup = new Group();
  
  ghost=createSprite(200,200,30,40);
  ghost.addImage(ghostImg)
  ghost.scale=0.3
  
  
  
  
  
  
  
  
  
  
  
}

function draw(){
  
  sound.play();
  loop=true;
  
  if(gameState==="play"){
  if(tower.y>600){
  tower.y=tower.y=300
  
  }
  
  
  if(keyDown("space")){
  ghost.velocityY=-4
    
  }
  ghost.velocityY=ghost.velocityY+0.5
  
  if(keyDown("right")){
  ghost.x=ghost.x+3
  }
  
  if(keyDown("left")){
  ghost.x=ghost.x-3
  }
  
  
  door();

  
  if(ghost.isTouching(blockGroup)|| ghost.y>620){
  ghost.destroy();
    gameState="end"
  }
  if(ghost.isTouching(climberGroup)){
     ghost.velocityY=0
     }
  
    
    drawSprites();
  
  
  }
  
  if(gameState==="end"){
  
    
    stroke("yellow")
    fill("yellow")
    textSize(50)
  text("Game Over",160,300)
  
  }

  

}






function door(){

  if(frameCount%200===0){
  var door=createSprite(200,200,40,40);
  door.addImage(doorImg)
  door.x=Math.round(random(150,450))
    door.velocityY=2
    door.y=-100
    door.lifetime=380
    doorGroup.add(door);
    ghost.depth=door.depth+3
    
    
    var climber=createSprite(door.x,door.y+70,10,10)
    climber.addImage(climberImg)
    climber.velocityY=2
    climber.lifetime=380;
    climberGroup.add(climber)
    
    
    var block=createSprite(climber.x,climber.y+10,climber.width,5)
    block.velocityY=climber.velocityY
    blockGroup.add(block)
  /*block.depth=tower.depth
    block.depth=climber.depth+20*/
  //.debug=true;
  
  
  }
  
  

}





