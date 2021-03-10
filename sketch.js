const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(240,780,480,30);
}

function draw() {
  background(255,255,255);
  ground.display();  
  drawSprites();
}