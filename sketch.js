const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var bg = "snow2.jpg";
var snow1;
var snow2;
var snow3;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
 
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
    world = engine.world;
    for(var i=0;i>1000;i=i+20){
      snow2=new Snow(i,i)
      snow3=new Snow(i-5,i-5)
    }
  
snow1=new Snow(10,10)
  
}

function draw() {
  background(backgroundImg);  
 //bg.display();
 snow1.display();
 snow2.display();
 snow3.display();
  drawSprites();
}