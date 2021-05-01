
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbinSide1,dustbinSide2,dustbinBottom,paper, dustbinImg;

function preload()
{
	dustbinImg = loadImage('dustbingreen.png')
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,300,90,90)
	ground = new Ground(width/2,height-20,width,20)
	dustbinSide1 = new Side(540,height-130,10,200)
	dustbinSide2 = new Side(670,height-130,10,200)
	dustbinBottom = new Bottom(650,570,150,25)

	console.log(paper);

	Engine.run(engine);
  
}


function draw() {
  background(120);
  
  

  Engine.update(engine);
  
  paper.display();
  ground.display();
  dustbinSide1.display();
  dustbinSide2.display();
  dustbinBottom.display();
  
  image(dustbinImg, 510,400, 200,275)
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{
			x:280,
			y: -450
		});
	}
}

