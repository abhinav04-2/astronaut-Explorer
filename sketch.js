function preload(){
background=loadImage("iss.png")
bath=loadImage("bath1.png")
brush=loadImage("brush.png")
drink=loadImage("drink1.png")
eat=loadImage("eat1.png")
gym=loadImage("gym1.png")
move=loadImage("move.png")
sleep=loadImage("sleep.png")


bath=addAnimation("bath1.png")
brush=addAnimation("brush.png")
drink=addAnimmation("drink1.png")
eat=addAAnimation("eat1.png")
gym=addAnimation("gym1.png")
move=addAnimation("move.png")
sleep=addAnimation("sleep.png")

function setup() {
  createCanvas(400, 400);
  astronaut=createsprite(300,230)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1;
  if(keyDown((up_arrow)){
  astronaut.addAnimation("sleep",sleeping)
  }


function draw() {
  background(220);
  
}