
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stone;
var ball;
var Sand1;;
var hammer
function preload()
{
	
}

function setup() {
	createCanvas(600, 513);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(146,22,47)

	var ground_options ={
		isStatic: true
	 }

	 ground = Bodies.rectangle(width/2, 483, width, 20 , {isStatic:true} );
	 World.add(world, ground);


	var ball_options ={
		restitution: 0.3,
		friction:5,
		density:1
    }

    ball = Bodies.circle(550,30,20, ball_options);
	World.add(world,ball);

	var sand1_options ={
		restitution: 0.3,
		friction:5,
		density:1
    }

    sand1 = Bodies.circle(400,30,5, sand1_options);
    World.add(world,sand1);

	var sand2_options ={
		restitution: 0.3,
		friction:5,
		density:1
    }

    sand2 = Bodies.circle(200,30,5, sand2_options);
	World.add(world,sand2);
	
	var sand3_options ={
		restitution: 0.3,
		friction:5,
		density:1
    }

    sand3 = Bodies.circle(350,30,5, sand3_options);
    World.add(world,sand3);

	var sand4_options ={
		restitution: 0.3,
		friction:5,
		density:1
    }

    sand4 = Bodies.circle(250,30,5, sand4_options);
    World.add(world,sand4);

	var sand5_options ={
		restitution: 0.3,
		friction:5,
		density:1
    }

    sand5 = Bodies.circle(440,30,5, sand5_options);
    World.add(world,sand5);

	var sand6_options ={
		restitution: 0.3,
		friction:5,
		density:1
    }

    sand6 = Bodies.circle(450,30,5, sand6_options);
    World.add(world,sand6);


	stone = new Stone (100,60,50,50);
	hammer = new Hammer (50,60,100,50);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  //ellipese(RADIUS);
  background(128,255,255);
  Engine.update(engine);

    ellipseMode(RADIUS);
	ellipse(ball.position.x, ball.position.y, 20, 20);
	
    ellipseMode(RADIUS);
    ellipse(sand1.position.x, sand1.position.y, 5, 5);

	ellipseMode(RADIUS);
	ellipse(sand2.position.x, sand2.position.y, 5, 5);
	
	ellipseMode(RADIUS);
    ellipse(sand3.position.x, sand3.position.y, 5, 5);

	ellipseMode(RADIUS);
    ellipse(sand4.position.x, sand4.position.y, 5, 5);

	ellipseMode(RADIUS);
	ellipse(sand5.position.x, sand5.position.y, 5, 5);
	
	ellipseMode(RADIUS);
    ellipse(sand6.position.x, sand6.position.y, 5, 5);
  
 	stone.display();
	hammer.display();
 

  drawSprites();
 
}



