const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(780,580,70,70);
    box2 = new Box (970,580,70,70);

    pig1 = new Pig (875,580)
    ground = new Ground (600,600,1200,30);
    log1 = new Log (875,560,275,PI/2);

    box3 = new Box (780,500,70,70);
    box4 = new Box (970, 500,70,70);

    pig2 = new Pig (875,500);

    log2 = new Log (875,450,275,PI/2);

    box5 = new Box (875,430,70,70);
   log3 = new Log (820,400,150,PI/7);
   log4 = new Log (900,400,150,-PI/7);

   bird = new Bird (200,300);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
   log3.display();
   log4.display();
   box5.display();
   bird.display();
}