
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer=new Hammer();
	stone=new Stone(700,545,70,70);
	rubber=new Rubber(400,545);

	ground=new Ground(500,590,1000,20);

	Engine.run(engine);
  
	console.log(stone);
}


function draw() {
  rectMode(CENTER);
  background("aqua");

hammer.display();
stone.display();
rubber.display();

ground.display();

drawSprites();
}



