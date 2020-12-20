var placeChar, platform1, platform2,platform,platformsGroup,goal
,goalsGroup,endPlat;
var PLAY=1,END=0,gameState=PLAY;

function setup(){
   createCanvas(windowWidth-100,windowHeight-100);
  
  placeChar = createSprite(width-1000,height-300,50,50);
  placeChar.shapeColor = "red";

  
  platformsGroup = createGroup();
  goalsGroup = createGroup();
  placeChar.debug = true;
 
  endPlat = createSprite(width-100,height-150,1000,50);
  endPlat.visible = false;
  
}


function draw(){
  background("black");


  console.log(gameState);
  placeChar.collide(platformsGroup);
  placeChar.collide(goalsGroup);

  placeChar.velocityX = 0;
  placeChar.velocityY = placeChar.velocityY+1;

  if(touches.length>0 || keyDown("w")){
   placeChar.velocityY= -10;
     touches=[];
 }

  if(touches.length>0 || keyDown("a")){
   placeChar.velocityX=-10;
   touches=[];
  }

  if(touches.length>0 || keyDown("d")){
   placeChar.velocityX= 10;
     touches=[];
 }
 

      if(gameState === PLAY){


        // placeChar.collide(platform1);
        // placeChar.collide(platform2);
        
       if(goalsGroup.isTouching(placeChar)){
        console.log("working");
        gameState=END;

       }

      }
      else if(gameState === END){

        platformsGroup.setLifetimeEach(1);
        goalsGroup.setLifetimeEach(1);
        placeChar.lifetime = -1;

        endPlat.visible =true;
        // endPlat.collide(placeChar);
       
        
 }

       spawnPlatforms();

       spawnGoals();

     



    drawSprites();
}

function spawnPlatforms(){



  if(frameCount % 70===0 ){
    // 1050
    if(frameCount <= 200){

    platform = createSprite(width-200, height, 200,40);
    platform.y = Math.round(random(height-200,height-400));
    platform.velocityX = -5;
    platform.lifetime = 300;
    
    platformsGroup.add(platform);
  }
 
  }
  

}


function spawnGoals(){
// 1050
  if(frameCount === 200){
    goal = createSprite(width-100,height-300,300,50);
    goal.shapeColor = "yellow";
    goal.velocityX = -3;
    goal.debug= true;
    goal.setCollider("rectangle",0,0,300,100);
    goalsGroup.add(goal);
    }

}