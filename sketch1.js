const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas;

function setup()
{
canvas=createCanvas(400,400);
engine=Engine.create();
world=engine.world;

var ground_options= { isStatic: true }
ground=Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);

var options={'restitution': 1.0 }
object=Bodies.rectangle(200,100,50,50,options);
World.add(world,object);

var circle_options={'restitution': 1.0 }
circle_object=Bodies.circle(200,300,20,circle_options);
World.add(world,circle_object);


}

function draw()
{
background("gold");
Engine.update(engine);
rectMode(CENTER);
ellipseMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
rect(object.position.x,object.position.y,50,50);
circle(circle_object.position.x,circle_object.position.y,50,50);
}