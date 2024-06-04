function setup(){
  createCanvas(400, 400);
  background(2);
}

function draw(){
  if (keyIsPressed){ // When the user presses any key
    fill(255, 255, 0); // in Yellow color
    ellipse(width/2, height/2, 150, 100); // draw an ellipse at the center of the canvas with a width of 150 andheight of 100
  }
}

function keyReleased(){ // When the user releases any key
  fill(255); 
  ellipse(mouseX, mouseY, 50, 75); // draw an ellipse at the mouse position with a width of 50 andheight of 75
}

function doubleClicked(){ // When the user double-clicks the mouse
  background(200); // clear the canvas
}
