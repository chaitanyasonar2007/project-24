
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	var ground_options={
		isStatic:true
	}
	ground=Bodies.rectangle(700,600,1400,20,ground_options);
	World.add(world,ground);

	paper = new Paper(70,35,35);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1400,20);

	paper.display();	

 
}



