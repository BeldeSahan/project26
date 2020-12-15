
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbinLine1,dustbinLine2,dustbinLine3,ground;

function preload()
{
	
}

function setup() {
createCanvas(1200, 1000);
engine = Engine.create();
world = engine.world;
Engine.run(engine);

paper = new Paper(150,670,50,50);
ground = new Ground(100,690,2500,10);

dustbinLine1=createSprite(1040,600,20,120);
dustbinLine1.shapeColor="cyan";
	
dustbinLine2=createSprite(860,600,20,120);
dustbinLine2.shapeColor="cyan";
	
dustbinLine3=createSprite(950,670,200,20);
dustbinLine3.shapeColor="cyan";



}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  drawSprites();
  
}

function keyPressed(){
if( keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
}
}



