const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1,box2, box3, box4,box5,box6,ball
function setup() {
 engine=Engine.create ();
 world=engine.world

  createCanvas(3000,800);
 ground=new Ground (1500,700,3000,20)
 box1=new Box (900,500,100,100)
 box2=new Box (900,450,100,100)
 box3=new Box (900,400,100,100)
 box4=new Box (900,350,100,100)
 box5=new Box (900,200,100,100)
 box6=new Box (900,100,100,100)
 
 ball=new Ball(700,500,80,80)
 rope= new SlingShot(ball.body, {x:700,y:50})
}

function draw() {
  Engine.update(engine);
  background(0);  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
  rope.display();
}
function mouseDragged()
{
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}