
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Rubber,Hammer,Stone,Plane;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer=new Hammer(100,200);
	rubber=new Rubber(150,230,340);
	stone=new Stone(700,320,70,70);   
 plane=new Plane(450,360,790,540);

	Engine.run(engine);
  

}


function draw() {
  Engine.update(engine);
  //rectMode(CENTER);
  background(0);
  hammer.display();
  stone.display();
  plane.display();
  rubber.display();
  

 
}



