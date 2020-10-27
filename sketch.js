const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var score=0;
var bg;

function preload(){
bg = loadImage("jungle2.jpg");
}

function setup() {
createCanvas(displayWidth -20,displayHeight-30);
engine = Engine.create();
world = engine.world;

//polygon = Bodies.circle(50,200,20);
//World.add(world,polygon);


ground1=new Ground(350,790,displayWidth,30);

for(var k = 25; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
}

for (var j = 50; j <=width; j=j+60) {
     plinkos.push(new Plinko(j,75));
     } 
     for (var j = 25; j <=width-10; j=j+50) {
          plinkos.push(new Plinko(j,175));
         } 
         for (var j = 50; j <=width; j=j+60) {
              plinkos.push(new Plinko(j,275)); 
            } 
            




var render = Render.create({
element: document.body,
engine: engine,
options: {
width: 1300,
height: 600,
wireframes: false
}
});

Engine.run(engine);

}

function draw() {

background("pink");

Engine.update(engine);




for (var i = 0; i < plinkos.length; i++) { 
    plinkos[i].display();
 } 
 if(frameCount%60===0){ 
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
     score++; 
    } 
    ground1.display();
    
     for (var k = 0; k < divisions.length; k++) {
          divisions[k].display(); 
        }
      
     
     for (var j = 0; j < particles.length; j++) 
    { 
        particles[j].display();
     } 

}
