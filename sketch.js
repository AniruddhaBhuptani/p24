
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var log1,log2,log3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
  console.log(mouseX)
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyCode==32){
	ball.X==600;
	ball.Y==640;
}

 ball=createSprite(50, 650, 20, 20,)
 log1=createSprite(500, 625, 20, 100,)
 log2=createSprite(600, 665, 200, 20,)
 log3=createSprite(700, 625, 20, 100,)
  drawSprites();
 
}



