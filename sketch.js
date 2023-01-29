const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var canvas;
var engine,world;

var ground,platform
var box1,box2,box3,box4,box5;

var log1,log2;

var rock1,rock2,rock3,rock4;
var vik1,vik2

var slingshot;

var rocks = [];
var gameState = "onSling"







function preload(){

}



function setup(){
    canvas = createCanvas(1200,600);
    canvas.position(15,70)

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,height,1200,100)
    platform = new Ground(150,height-120,300,170);

    box1 = new Box(700,height-100,70,100);
    box2 = new Box(920,height-100,70,100);
    box3 = new Box(700,240,70,100);
    box4 = new Box(920,240,70,100);
    box5 = new Box(810,160,70,100);

    log1 = new Log(810,height-160,300,PI/2);
    log2 = new Log(810,180,300,PI/2)

    rock1 = new Rock(200,50);
    rock2 = new Rock(150,170);
    rock3 = new Rock(100,170);
    rock4 = new Rock(50,170);
    rocks.push(rock1);
    rocks.push(rock2);
    rocks.push(rock3);
    rocks.push(rock4);
    


    vik1 = new Viking(810,height-100);
    vik2 = new Viking(810,height-220);

    slingshot = new Slingshot(rock1.body,{x:200,y:220})
}





function draw(){
    background("skyblue");

    Engine.update(engine);




    ground.display()
    platform.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();

    rock1.display();
    rock2.display();
    rock3.display();
    rock4.display();

    vik1.display();
    vik2.display();

    slingshot.display();

    if(mouseIsPressed && gameState == "onSling"){
        Body.setPosition(rocks[rocks.length-1].body,{x:mouseX,y:mouseY});

        
    }

}
function mouseDragged(){

    if(gameState !== "launched"){
        Body.setPosition(rocks[rocks.length-1].body,{x:mouseX,y:mouseY});
        Body.applyForce(rocks[rocks.length-1].body,rocks[rocks.length-1].body.position,{x:5,y:-5})
        
        return false;

    }

    

}


function mouseReleased(){
    
    if(gameState !== "launched"){
        slingshot.fly();

        rocks.pop()
        gameState = "launched";
        locked = false

        return false;
    }
}

function keyReleased(){

    if(keyCode === 32 && gameState === "launched"){
        if(rocks.length>=0){
            Body.setPosition(rocks[rocks.length-1].body,{x:200,y:220});
            slingshot.attach(rocks[rocks.length-1].body);
            gameState = "onSling";

        }
    }

}























