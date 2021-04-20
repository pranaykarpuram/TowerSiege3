var a;
var circles=[];
var score = 0;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
function setup() {
  createCanvas(800,800);
  stroke(255);
  engine = Engine.create();
  world = engine.world;
  
  polygon_img = loadImage("polygon.png");
  ground = new Ground(400,300,240,50);
  ground2 = new Ground(400,800,1000,40);
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new Chain(polygon,{x:100,y:200});

  var render = Matter.Render.create({ element:document.body, engine: engine, options: { width: 400, height: 400  }, }); Matter.Render.run(render);
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  slingshot.display();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  push();
  textSize(20);
  text("Score: "+score,600,40);
  pop();
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display(); 
  box8.display(); 
  box9.display(); 
  box10.display(); 
  box11.display(); 
  box12.display(); 
  box13.display(); 
  box14.display(); 
  box15.display(); 
  box16.display(); 

  box1.score(); 
  box2.score(); 
  box3.score(); 
  box4.score(); 
  box5.score(); 
  box6.score(); 
  box7.score(); 
  box8.score(); 
  box9.score(); 
  box10.score(); 
  box11.score(); 
  box12.score(); 
  box13.score(); 
  box14.score(); 
  box15.score(); 
  box16.score(); 

  ground.display();
  ground2.display();
    
  a=a-1;
  
 text("x:" +mouseX,mouseX,mouseY);
 
 text("y:" +mouseY,mouseX+30,mouseY); 
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
Engine.update(engine);
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(polygon, {x: 100 , y: 200});
    slingshot.attach(polygon);
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}