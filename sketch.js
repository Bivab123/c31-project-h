const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;
function setup() {
  createCanvas(800,480);
 engine = Engine.create();
    world = engine.world;

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 
  for(var k=0;k<=innerWidth;k=k+80){
 divisionHeight.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(j=40; j<=innerWidth; j=j+50)
  {
plinkos.push(new Plinko(j,75));
  }
  for(var j= 15; j <=width-10; j=j+50)
  {
plinkos.push(Plinko(j,175));


  }
  if(frameCount%60==0)
  {
    particles.push(new particles(random(width/2-10,width/2+10),10,10))
  }
  
  //  division.display()
    plinko.display()
    particle.display()
    
}



