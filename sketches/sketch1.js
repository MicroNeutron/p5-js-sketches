function setup() {
  //canvas
  createCanvas(windowWidth, windowHeight);
  background(2);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) { // When the user presses the left arrow
    fill(0, 0, 255); // in Blue color
    circle(100, 100, 50); // draw a circle at (100, 100) with a diameter of 50
  }   
  if (keyCode === LEFT_ARROW) { // When the user presses the right arrow
    fill(0, 255, 0); // in Green color
    circle(200, 200, 50); // draw a circle at (200, 200) with a diameter of 50
  }
  if (keyCode === 32) { // When the user presses the spacebar
    fill(255); 
    circle(mouseX, mouseY, 75); // draw a circle at the mouse position with a diameter of 75.
  }
}
