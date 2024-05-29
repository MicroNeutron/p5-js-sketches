function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight)
  background(2)
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    fill(0, 0, 255);
    circle(100, 100, 50);
  }   
  if (keyCode === LEFT_ARROW) {
    fill(0, 255, 0);
    circle(200, 200, 50);
  }
  if (keyCode === 32) {  
    fill(255);
    circle(mouseX, mouseY, 75);
  }
}
