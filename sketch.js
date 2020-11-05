const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ball2, plat1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26, box27, box28, box29, box30;
 
var tower1X = 350, tower1Y = 470, boxSide = 50;
var tower2X = 800, tower2Y = 370;


var rope, rope2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  plat1 = new Platform(450, 500, 300, 30);
  plat2 = new Platform(900, 400, 300, 30);
  ball = new Striker(165, 450, 30);
  //ball2 = new Striker(165, 450,30)
  rope = new chain(ball.body, {x: 165, y: 450}, 0.2, 10);
  //rope2 = new chain(ball2.body, {x: 165, y: 450}, 0.2, 10);

  tower1();
  tower2();

}

function draw() {
  background(250);
  Engine.update(engine);

  Body.setStatic(ball.body, false);

  plat1.display();
  plat2.display();
  ball.display();
  rope.display();
  tower1Display();
  tower2Display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function tower1() {
  box1 = new Box(tower1X,tower1Y,boxSide,boxSide);
  box2 = new Box(tower1X + 50,tower1Y,boxSide,boxSide);
  box3 = new Box(tower1X + 100,tower1Y,boxSide,boxSide);
  box4 = new Box(tower1X + 150,tower1Y,boxSide,boxSide);
  box5 = new Box(tower1X + 200,tower1Y,boxSide,boxSide);
  box6 = new Box(tower1X + 25,tower1Y - 50,boxSide,boxSide);
  box7 = new Box(tower1X + 75,tower1Y - 50,boxSide,boxSide);
  box8 = new Box(tower1X + 125,tower1Y - 50,boxSide,boxSide);
  box9 = new Box(tower1X + 175,tower1Y - 50,boxSide,boxSide);
  box10 = new Box(tower1X + 50 ,tower1Y - 100,boxSide,boxSide);
  box11 = new Box(tower1X + 100 ,tower1Y - 100,boxSide,boxSide);
  box12 = new Box(tower1X + 150 ,tower1Y - 100,boxSide,boxSide);
  box13 = new Box(tower1X + 75 ,tower1Y - 150,boxSide,boxSide);
  box14 = new Box(tower1X + 125 ,tower1Y - 150,boxSide,boxSide);
  box15 = new Box(tower1X + 100 ,tower1Y - 200,boxSide,boxSide);

}

function tower1Display() {
  box1.display("magenta");
  box2.display("magenta");
  box3.display("magenta");
  box4.display("magenta");
  box5.display("magenta");
  box6.display("blue");
  box7.display("blue");
  box8.display("blue");
  box9.display("blue");
  box10.display("red");
  box11.display("red");
  box12.display("red");
  box13.display("lightgreen");
  box14.display("lightgreen");
  box15.display("orange");

}

function tower2() {
  box16 = new Box(tower2X,tower2Y,boxSide,boxSide);
  box17 = new Box(tower2X + 50,tower2Y,boxSide,boxSide);
  box18 = new Box(tower2X + 100,tower2Y,boxSide,boxSide);
  box19 = new Box(tower2X + 150,tower2Y,boxSide,boxSide);
  box20 = new Box(tower2X + 200,tower2Y,boxSide,boxSide);
  box21 = new Box(tower2X + 25,tower2Y - 50,boxSide,boxSide);
  box22 = new Box(tower2X + 75,tower2Y - 50,boxSide,boxSide);
  box23 = new Box(tower2X + 125,tower2Y - 50,boxSide,boxSide);
  box24 = new Box(tower2X + 175,tower2Y - 50,boxSide,boxSide);
  box25 = new Box(tower2X + 50 ,tower2Y - 100,boxSide,boxSide);
  box26 = new Box(tower2X + 100 ,tower2Y - 100,boxSide,boxSide);
  box27 = new Box(tower2X + 150 ,tower2Y - 100,boxSide,boxSide);
  box28 = new Box(tower2X + 75 ,tower2Y - 150,boxSide,boxSide);
  box29 = new Box(tower2X + 125 ,tower2Y - 150,boxSide,boxSide);
  box30 = new Box(tower2X + 100 ,tower2Y - 200,boxSide,boxSide);

}

function tower2Display() {
  box16.display("magenta");
  box17.display("magenta");
  box18.display("magenta");
  box19.display("magenta");
  box20.display("magenta");
  box21.display("blue");
  box22.display("blue");
  box23.display("blue");
  box24.display("blue");
  box25.display("red");
  box26.display("red");
  box27.display("red");
  box28.display("lightgreen");
  box29.display("lightgreen");
  box30.display("orange");

}