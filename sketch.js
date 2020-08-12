var ground,boy,tree,mango;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	Boy.Img = loadImage(sprites/Boy.png);
	mango.Img = loadImage(sprites/mango.png);
	stone.Img = loadImage(sprites/stone.png);
	tree.Img = loadImage(sprites/tree.png);

	
}

function setup() {
	createCanvas(800, 700);
	tree = createSprite(600,400,50,20);
	boy = createSprite(600,400,20,10);
	mango1 = createSprite(600,400,20,10);
	mango2 = createSprite(600,400,20,10);
	mango3 = createSprite(600,400,20,10);
	mango4 = createSprite(600,400,20,10);
	mango5 = createSprite(600,400,20,10);
	mango6 = createSprite(600,400,20,10);
    ground = createSprite(550,600,1500,20);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150,700,800);
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  ground.visible();
  boy.display();
    mango1.display();
	mango2.display(); 
	mango3.display(); 
	mango4.display(); 
	mango5.display();
	mango6.display();
	tree.display();
  drawSprites();
 
}
function detectCollision(lmango,lstone){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance = dist(stoneBodyPosition.X,stoneBodyPosition.Y,mangoBodyPosition.X,mangoBodyPosition.Y)
	if (distance<-lmango.r+lstone.r){
		Matter.body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
if(keyCode === 32){
	Matter.body.setPosition(stoneObj.body, {x:235,y:420})
	launcherObject.attach(stoneObj.body);
}

}


