function preload(){
  castleImg = loadImage("./assets/Capture.JPG");
  scramble = loadImage("./assets/bg2.jpg")
  girlRunning = loadImage("./assets/girlRun.png");
  artifact = loadImage("./assets/artifact.png");
  artifact1 = loadImage("./assets/artifact1.png");
}




var molly, gaurd,ground,bg,gamestate="puzzle1";
var puzzle, submitbtn;
var check=0;


function setup(){
createCanvas(windowWidth,windowHeight);

//creating the PC  and NPC characters//
bg= createSprite(width/2,height/2,800,800);
bg.addImage(castleImg);
bg.scale=1.4;

ground = createSprite(width/2,height-40,width,60);
ground.visible=false;
molly = createSprite(width/2+200,height-90,20,90);
molly.addImage(girlRunning);
molly.scale=0.7;


gaurd = createSprite(width/2-100,height-100,20,100);

puzzleG=new Group();


    input1 = createInput("");
    input1.position(width/2+195,height/8+130);

    input2 = createInput("");
    input2.position(width/2-530,height/8+300);

    input3 = createInput("");
    input3.position(width/2+100,height/8+90);
    input3.hide();

    input4 = createInput("");
    input4.position(width/2-530,height/8+130);

    input5 = createInput("");
    input5.position(width/2+170,height/8+300); 

    input6 = createInput("");
    input6.position(width/2+130,height/8+440)

    input7 = createInput("");
    input7.position(width/2-510,height/8+440)
 
     
    submitbtn= createButton("Submit");
    submitbtn.position(width/2+375,height/8+130);

    submitbtn1= createButton("Submit");
    submitbtn1.position(width/2-350,height/8+300); 

    submitbtn2= createButton("Submit");
    submitbtn2.position(width/2-350,height/8+130); 

    submitbtn3= createButton("Submit");
    submitbtn3.position(width/2+350,height/8+300); 

    submitbtn4= createButton("Submit");
    submitbtn4.position(width/2+310,height/8+440); 

    submitbtn5= createButton("Submit");
    submitbtn5.position(width/2-330,height/8+440); 

}

function draw(){
  background("white");
  drawSprites();
 //The instructions that will be displayed for the game// 
 fill("white");
textSize(19);
text("Hello molly you are trapped in a castle ,to escape from the castle you have solve puzzles and you must hurry before the ghost catches you",width/2-700,height/2-300)
 
// code for when the gamestate is start//
if(gamestate=="start"){
  if(keyDown("space")){
   check=1;
   
    gaurd.visible=false;
   
    }
    if(bg.x<width/3){
      bg.x=width/2;
    }
    portal();
    enableStart();
    console.log(check);
    
    //code for when the gamestate is puzzle1//
    if(molly.isTouching(puzzleG) && check===1){
     gamestate="puzzle1";
    }
    if(molly.isTouching(puzzleG) && check===2){
      gamestate="puzzle2";
    }
 }

 
//disable the puzzle group//
  if(gamestate==="puzzle1"){
    disableStart();
    bg.addImage(scramble);
    bg.scale=1.8;
    
    fill("darkorange");
    textSize(19);
    text("Hello molly you are trapped in a castle ,to escape from the castle you have solve puzzles and you must hurry before the ghost catches you",width/2-700,height/2-300)

    input1.show();
    submitbtn.show();
    fill("black")
    textSize(23);
    text("Unscramble The Given Words Below",width/2-250,height/8+50);
    
   textSize(19);
    text("RDOIASUANS",width/2+60,height/8+150);

    textSize(19);
    text("ITCHW",width/2-600,height/8+315);

    textSize(19);
    text("CKABL",width/2-600,height/8+147);

    textSize(19);
    text("BOOTERC",width/2+60,height/8+315);

    textSize(19);
    text("RCKIT",width/2+60,height/8+460); 

    textSize(19);
    text("EMVARIP",width/2-600,height/8+460); 


    
   
    var ans= "DINOSAUR";
    submitbtn.mousePressed(()=>{
     var Userans=input1.value();
     Userans=Userans.toUpperCase();

     var ans1= "WITCH";
    submitbtn1.mousePressed(()=>{
     var Userans1=input2.value();
     Userans1=Userans1.toUpperCase();

     
    if(ans===Userans && ans1===Userans1){
       gamestate="start";
       check=2;
     }
   });
  })
     


  }


  if(gamestate=="puzzle2"){ 
    disableStart();
    bg.shapeColor="magenta";
    input3.show();
    submitbtn.show();
    text("solve the riddles given  below",width/2,height/8);
    text("The more there is the less you see.What is it?",width/2,height/8+100); 
    var ans= "DARKNESS";
    submitbtn.mousePressed(()=>{
     var Userans=input2.value();
     Userans=Userans.toUpperCase();
     if(ans===Userans){
       gamestate="end";
       check=3;
     }
   });

    
     


  }
if(gamestate=="end"){
bg.shapeColor="orange";
disableStart();
input1.hide();
submitbtn.hide();
text("Congrajulations!!! You won the game",width/3,height/2);
input2.hide();
}



}
// code for spawning puzzles//
function portal(){
  if(frameCount%80===0){
     puzzle = createSprite(width+100,height-100,10,10);
     var rand = Math.round(random(1,3));
       switch(rand) {
        case 1: puzzle.addImage(artifact);
                 break;
         case 2: puzzle.addImage(artifact1);
                 break;
         default: break;
        }

     puzzle.scale=0.2;
    puzzle.velocityX=-3;
    puzzleG.add(puzzle);
  }
}
function enableStart(){
  input1.hide();
  bg.velocityX=-2;
 submitbtn.hide();
}
function disableStart(){
  bg.velocityX=0;
  gaurd.visible=false;
  puzzleG.destroyEach();
  molly.visible=false;
  
}