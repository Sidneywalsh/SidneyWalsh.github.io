var ballX = 200.0
var ballY = 100.0
var ballSpeedY = 0.0
var colorX = 100
var gravity = 0.1;
var back = 50
var colorY = 0
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150, back, 250);
  
    //to make the ball "fall" down, every frame we increase its speed by a tiny amount. We call this amount gravity. 
  
  ballSpeedY = ballSpeedY+gravity
  
  ballY = ballY+ballSpeedY
  if(ballY >= 400){
  ballSpeedY *= -1
    colorX += 40
    back += 200
  }
  fill(colorX, colorY, 0)
  ellipse(mouseX, ballY, 20.0, 20.0)
  if(colorX >= 300){
    colorX -= 280
  }
  if (back >= 300){
    back = 50

  }
  
  
}
