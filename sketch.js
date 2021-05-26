const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var rect1;
var ground,ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var box_options = { // JSON format => {key:value} =>{length:50,breadth:30,height:50}
  density:0.8,
  friction:0.3
  }
  rect1 = Bodies.rectangle(400,200,50,50,box_options);
  World.add(world,rect1);
  
  console.log(rect1);

  var ground_options={
    isStatic: true
  }
  ground=Bodies.rectangle(400,390,800,20,ground_options);
  World.add(world,ground);

  var ball_options={
    restitution:0.9
  }
  ball=Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);

  rectMode(CENTER);
  rect(rect1.position.x,rect1.position.y,50,50);
 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}