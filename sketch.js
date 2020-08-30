var player;
var maze;


function setup() {
  createCanvas(800,400);
  player=new Player()
  maze=new Maze();
 
}

function draw() {
  background("black"); 
  player.display();
  maze.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    player.triangle.velocityY=-6
    player.triangle.velocityX=0
  }
  if(keyCode===DOWN_ARROW){
    player.triangle.velocityY=6
    player.triangle.velocityX=0
  }
  if(keyCode===LEFT_ARROW){
    player.triangle.velocityX=-6
    player.triangle.velocityY=0
  }
  if(keyCode===RIGHT_ARROW){
    player.triangle.velocityX=6
    player.triangle.velocityY=0
  }
}

  